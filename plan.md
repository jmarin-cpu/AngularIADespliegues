- [x] T1: Crear el componente standalone `header` mediante Angular CLI.
- Archivos: `src/app/header/header.ts`, `src/app/header/header.html`, `src/app/header/header.css`, `src/app/header/header.spec.ts`
- Hecho cuando: el componente queda en `src/app/header/` con TypeScript, HTML y CSS separados, y sin crear componentes, servicios o rutas adicionales.

- [x] T2: Diseñar el contenido moderno y semántico de la cabecera para la aplicación de aprendizaje.
- Archivos: `src/app/header/header.html`, `src/app/header/header.spec.ts`
- Hecho cuando: la cabecera presenta claramente la identidad de la aplicación y sus elementos informativos o de navegación, usa estructura HTML semántica y accesible, y las pruebas verifican su contenido principal sin introducir funcionalidades o destinos inexistentes.

- [x] T3: Adaptar visualmente la cabecera a distintos tamaños de pantalla.
- Archivos: `src/app/header/header.css`, `src/app/header/header.spec.ts`
- Hecho cuando: los estilos parten de móvil, usan dimensiones y tipografía fluidas con límites legibles, distribuyen el contenido según el espacio disponible y evitan desbordamiento horizontal; en pantallas táctiles, los controles interactivos tienen un área mínima de 44 × 44 px.

- [x] T4: Integrar la cabecera en la aplicación y dar un marco responsive al contenido.
- Archivos: `src/app/app.ts`, `src/app/app.html`, `src/app/app.css`, `src/app/app.spec.ts`, `src/styles.css`
- Hecho cuando: la aplicación raíz muestra `header` en lugar de la plantilla de ejemplo y los estilos globales establecen una base consistente que funciona en móvil y escritorio, sin agregar otros componentes ni rutas.

- [x] T5: Verificar el funcionamiento, la accesibilidad y la adaptación responsive.
- Archivos: ninguno; ejecutar `ng build` y `ng test`, y revisar la aplicación en `ng serve`
- Hecho cuando: compilación y pruebas terminan correctamente; al revisar la aplicación con anchos de 320 px, 768 px y 1440 px, el contenido sigue siendo legible y utilizable, no aparece desplazamiento horizontal y los controles mantienen sus áreas táctiles previstas.
