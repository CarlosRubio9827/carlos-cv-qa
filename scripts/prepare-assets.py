"""Prepara la copia pública del CV y la tarjeta social; conserva el CV original."""
from pathlib import Path
import re
from pypdf import PdfReader, PdfWriter
from pypdf.generic import ContentStream, ArrayObject
from PIL import Image, ImageDraw, ImageFont
import pypdfium2 as pdfium

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / 'cv' / 'Carlos Alberto Rubio Gallego - CV - QA.pdf'
ASSETS = ROOT / 'public' / 'assets'
QA = ROOT / '.qa'
ASSETS.mkdir(parents=True, exist_ok=True)
QA.mkdir(parents=True, exist_ok=True)

reader = PdfReader(SOURCE)
writer = PdfWriter()
writer.append_pages_from_reader(reader)
phone = re.compile(r'\+57(?:[\s().-]*\d){10}')
removed = 0
for page in writer.pages:
    positions = []
    def collect(text, cm, tm, font, size):
        if phone.search(text):
            positions.append((tm[4], tm[5]))
    page.extract_text(visitor_text=collect)
    if not positions:
        continue
    stream = ContentStream(page.get_contents(), writer)
    current_position = (0, 0)
    for operands, operator in stream.operations:
        if operator == b'Tm':
            current_position = (float(operands[4]), float(operands[5]))
        if operator in (b'Tj', b'TJ') and any(abs(current_position[0] - x) < .01 and abs(current_position[1] - y) < .01 for x, y in positions):
            # Eliminar el operador del número; no cubrirlo con un rectángulo.
            operands[0] = ArrayObject() if operator == b'TJ' else ''
            removed += 1
    page.replace_contents(stream)
assert removed == 1, f'No se identificó una única línea de teléfono: {removed}'
writer.add_metadata({'/Title': 'Carlos Alberto Rubio Gallego - Analista QA | QA Automation', '/Author': 'Carlos Alberto Rubio Gallego'})
out = ASSETS / 'carlos-rubio-cv.pdf'
with out.open('wb') as output:
    writer.write(output)
public_reader = PdfReader(out)
public_text = '\n'.join(p.extract_text() for p in public_reader.pages)
original_text = '\n'.join(p.extract_text() for p in PdfReader(SOURCE).pages)
assert not phone.search(public_text)
assert re.sub(r'\s+', '', public_text) == re.sub(r'\s+', '', phone.sub('', original_text)), 'La copia cambió texto distinto al teléfono'
assert len(public_reader.pages) == 2
for filename, pdf_path in [('cv-original', SOURCE), ('cv-publico', out)]:
    pdf = pdfium.PdfDocument(str(pdf_path))
    for i, page in enumerate(pdf):
        page.render(scale=1.5).to_pil().save(QA / f'{filename}-{i + 1}.png')

im = Image.new('RGB', (1200, 630), '#101412')
draw = ImageDraw.Draw(im)
def font(size, bold=False):
    return ImageFont.truetype('C:/Windows/Fonts/seguisb.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf', size)
draw.rounded_rectangle((68, 58, 133, 123), radius=15, outline='#c8f56b', width=2)
draw.text((79, 58), 'cr.', font=font(43, True), fill='#c8f56b')
draw.text((157, 61), 'Carlos Rubio', font=font(24, True), fill='#f2f3ed')
draw.text((157, 98), 'ANALISTA QA  |  QA AUTOMATION', font=font(13), fill='#a4afa7')
draw.text((68, 195), 'La calidad empieza', font=font(71, True), fill='#f2f3ed')
draw.text((68, 282), 'antes del primer clic.', font=font(71, True), fill='#c8f56b')
draw.line((68, 449, 1132, 449), fill='#303a32', width=1)
draw.text((68, 483), 'QA manual  /  Automatización  /  IA aplicada', font=font(23), fill='#c6d0c0')
draw.text((68, 542), 'Carlos Alberto Rubio Gallego', font=font(18), fill='#a4afa7')
draw.text((1040, 542), 'Colombia', font=font(18), fill='#a4afa7')
im.save(ASSETS / 'social-card.png', optimize=True)
print('CV público sin teléfono verificado. Tarjeta social y vistas de revisión generadas.')
