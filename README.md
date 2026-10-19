# Carlos Rubio · Portafolio QA

Sitio estático en español e inglés con HTML generado, CSS y JavaScript sin dependencias de producción. El contenido llega completo al navegador y a los buscadores, incluso sin JavaScript. Incluye un selector de idioma y modos claro y oscuro. No requiere backend ni servicios de formularios.

Repositorio: [CarlosRubio9827/carlos-cv-qa](https://github.com/CarlosRubio9827/carlos-cv-qa).

## Ejecutar

Requiere Node.js 20 o posterior. Desde esta carpeta:

```sh
npm start
```

Abre http://127.0.0.1:4173. El servidor genera `dist/` al iniciarse. Después de editar, reinicia el servidor o ejecuta `npm run build` y actualiza la página. Puedes elegir otro puerto con la variable `PORT`.

```sh
npm run build
npm run check
```

Para publicar en cualquier alojamiento estático, utiliza el contenido de `dist/`. `.openai/hosting.json` conserva la identidad de la publicación en Sites.

## Editar

- `content/portfolio.mjs`: única fuente de contenido profesional, datos de contacto, fechas, herramientas, enlaces, casos y metadatos. Los perfiles opcionales vacíos se ocultan. No agregar datos que no se hayan verificado con Carlos.
- `src/render.mjs`: estructura HTML y etiquetas de la interfaz.
- `content/portfolio.en.mjs`: traducción al inglés; comparte identidad, enlaces y fechas con el contenido original.
- `src/locales.mjs`: etiquetas de interfaz y diagramas en ambos idiomas.
- `public/styles.css`: diseño, adaptación a pantallas y movimiento reducido.
- `public/app.js`: menú, navegación activa y copia de correo.
- `public/preferences.js`: aplica el tema antes de mostrar la página y recupera el idioma preferido.
- `public/assets/carlos-rubio-cv.pdf`: CV que se descarga, sin teléfono. El original permanece fuera del repositorio. El script opcional de preparación lo busca en `../cv/`.
- `public/assets/social-card.png`: imagen para compartir.

La versión en español se genera en `/` y la versión en inglés en `/en/`, con metadatos y enlaces alternativos para cada idioma. El selector conserva la sección actual. Idioma y tema se recuerdan en el navegador; el tema inicial sigue la preferencia del sistema. Si el almacenamiento del navegador está bloqueado, los controles siguen funcionando durante la visita. El CV descargable se conserva en español y se indica en la versión inglesa.

## Criterios de contenido

Fuente: CV de Carlos Alberto Rubio Gallego entregado en el proyecto, dos páginas, revisado el 16 de octubre de 2026. Los enlaces de correo, LinkedIn y diplomas se transcribieron de las anotaciones del PDF; la disponibilidad de las plataformas externas depende de sus controles de acceso.

- Se respetan los períodos indicados, incluido Linex Travel | UltraGroup: **12/2023–10/2026**. No se cambió por «actual».
- Los casos describen experiencia de trabajo y no tienen repositorios, resultados numéricos ni capturas ficticias. Los gráficos son esquemas ilustrativos.
- Cypress, FullStack Developer con JavaScript, Git y GitHub, y Front End Developer se distinguen como cursos/ruta con diplomas de Platzi; EF SET aparece como certificación de idioma, **B1 intermedio**, de octubre de 2023.
- No hay nivel porcentual de herramientas, disponibilidad laboral supuesta, teléfono en HTML o foto inventada.
- La descarga es una copia del CV con el operador de texto del teléfono eliminado. Se verificó que el resto del texto coincide y se conservaron correo, LinkedIn y enlaces de certificados. El CV original no se publica ni se modifica.

## Pendientes opcionales antes de una publicación pública

No faltan datos obligatorios para esta versión. GitHub se oculta hasta recibir un perfil verificado. Se puede añadir un dominio propio. Al cambiar la dirección de publicación, actualizar `siteUrl` y volver a generar: alimenta canonical, Open Graph y sitemap. La publicación inicial de Sites es privada; para enviarla a reclutadores se deberá habilitar acceso público mediante la configuración del sitio.

## Validación

`npm run check` verifica destinos de navegación, archivos locales, PDF, datos estructurados, metadatos, ocultación de campos pendientes y ausencia de teléfono en HTML. Las comprobaciones de navegador y del PDF se documentan en `VERIFICACION.md`.

La preparación del CV y de la tarjeta social se realizó con `scripts/prepare-assets.py` y Python (`pypdf`, `pypdfium2`, `Pillow`). No son necesarios para ejecutar ni construir el sitio. Si cambias el CV, revisa y vuelve a preparar su copia pública antes de sustituirla.
