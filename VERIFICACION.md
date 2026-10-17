# Verificación de la primera versión

Revisado el 16 de octubre de 2026.

- Construcción y comprobaciones de contenido completadas con Node.js, sin instalar paquetes.
- Respuesta HTTP 200 de la página local; estilos, JavaScript, fuente y PDF cargan desde el mismo servidor. Se corrigió la normalización de rutas de Windows durante la revisión.
- Revisión visual en navegador a 1440 × 1000, 768 × 1024 y 390 × 844; comprobación adicional de desbordamiento a 320 × 740. Sin desplazamiento horizontal.
- Navegación principal y llamada «Explorar mi experiencia» llevan a las secciones previstas.
- Menú móvil: abrir, navegar y cerrar. Teclado: Enter abre; Escape cierra y devuelve el foco al botón.
- Botón de copiar correo muestra confirmación accesible y copia el correo. Enlace mailto configurado con el correo extraído del CV.
- Descarga real del CV desde el navegador comprobada. El SHA-256 del archivo recibido coincide con el de la copia servida: `64A7B7155FD455C90BEBFD91BE3A2A5837A54AC2805AC211E11EF741D5F9A4FF`.
- CV público de dos páginas: se eliminó el texto del teléfono, no se cubrió visualmente. Comparación de texto con el original: coincide todo lo demás. Ambas páginas renderizadas y revisadas, sin cambios de distribución. Original intacto.
- Contraste calculado a partir de estilos de texto y fondos compuestos de 205 elementos: sin valores inferiores a 4.5:1 en la revisión. Esta comprobación no sustituye una auditoría completa con tecnologías de asistencia.
- Un h1, idioma español, regiones semánticas, etiquetas accesibles, enlace para saltar al contenido y foco visible. CSS incluye `prefers-reduced-motion` para desactivar movimiento.
- Metadatos de descripción, canonical, Open Graph, Twitter Card, imagen social, Person en JSON-LD, robots y sitemap.
- Sin errores ni advertencias de la consola en la revisión final.
- Las URL externas se transcribieron de las anotaciones del CV. No se publicaron perfiles supuestos ni enlaces de proyectos privados.

Captura de referencia: `.qa/portafolio-desktop.jpg`. La carpeta `.qa/` queda fuera del repositorio y del despliegue; tampoco se incluye el CV original.
