## Proyecto
Aplicación web Angular de aprendizaje. Inicialmente tiene un único componente, `header`, que
representa la cabecera de la aplicación.
El código debe ser sencillo y fácil de entender para un estudiante que está aprendiendo Angular.
## Tecnologías
- Angular (la versión indicada en package.json), TypeScript, HTML y CSS.
- No instalar librerías externas salvo que se pida expresamente.
## Convenciones de Angular
- Componentes standalone (sin NgModules).
- Usar signals para el estado de los componentes.
- Mantener separados los archivos .ts, .html y .css de cada componente.
- Crear los componentes con Angular CLI: ng generate component <nombre>
## Estructura
- El componente header estará en src/app/header/ (header.ts, header.html y header.css).
- No crear otros componentes, servicios ni rutas salvo que se pida expresamente.
## Comandos
- Arrancar en desarrollo: ng serve
- Compilar: ng build
- Ejecutar las pruebas: ng test
## Forma de trabajar
1. Lee plan.md y localiza la primera tarea pendiente (- [ ]).
2. Antes de cambiar nada, explica qué vas a hacer y qué archivos se verán afectados.
3. Realiza solo los cambios necesarios para esa tarea. No modifiques otros archivos ni elimines
código sin justificarlo.
4. Comprueba la tarea: ng build debe terminar sin errores y debe cumplirse el criterio "Hecho
cuando" de plan.md.
5. Si hay errores, corrígelos antes de dar la tarea por terminada.
6. Marca la tarea como completada cambiando - [ ] por - [x].
7. Detente, resume los cambios realizados y espera confirmación antes de pasar a la siguiente
tarea.
## Reglas
- No añadir funcionalidades que no estén en plan.md.
- No marcar una tarea como completada si no se ha comprobado.
- No modificar AGENTS.md salvo que se pida expresamente.
- Explicar los cambios de forma clara, pensando en un estudiante que está aprendiendo Angular.