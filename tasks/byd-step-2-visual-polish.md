Objetivo:
Mejorar la experiencia visual de la web scrollytelling del BYD Dolphin Mini EV GS.

Siempre first mobile
Contexto:
Ya existe una primera versión funcional creada en el Paso 1.
Ahora quiero pulido visual premium, transiciones, performance mobile y experiencia cinematográfica.

NO rehagas todo desde cero.
NO cambies la estructura base si no es necesario.
NO rompas la config editable.
NO inventes datos técnicos nuevos.

Objetivo visual:
Que parezca una experiencia de producto premium, no una landing común.

La experiencia debe sentirse así:
- el auto es protagonista absoluto
- el usuario scrollea y siente que recorre el vehículo
- la cámara se acerca, se aleja y cambia de ángulo
- las imágenes cambian con transiciones suaves
- los textos aparecen/desaparecen con intención
- los hotspots ayudan a mirar detalles
- el cierre empuja a agendar test drive

Mejoras requeridas:
1. Scroll cinematográfico
- Mejorar transiciones entre escenas
- Agregar zoom suave
- Agregar parallax
- Agregar movimientos de cámara simulados
- Usar sticky full-screen de forma prolija

2. Diseño premium
- Fondo oscuro / tecnológico
- Acentos en lima, azul eléctrico o blanco
- Glassmorphism moderado
- Glow eléctrico sutil
- Sombras premium
- Viñeteado cinematográfico
- Grano/noise sutil si suma

3. Hotspots
- Animarlos mejor
- Que aparezcan en el momento correcto
- Que no tapen el auto en mobile
- Textos cortos

4. Autonomía
- Mejorar animación de batería
- Animar número hasta 380
- Agregar disclaimer chico:
  “La autonomía puede variar según uso, manejo y condiciones.”

5. Carga eléctrica
- Si no hay imagen real de carga, crear una escena visual elegante con placeholder, íconos o gráfico.
- No inventar datos no confirmados.

6. CTA
- CTA flotante a WhatsApp más visible pero no invasivo
- CTA final fuerte:
  “Agendar test drive”
  “Consultar por WhatsApp”
- Preparar link editable desde config

7. Mobile first
- Revisar especialmente 390x844 y 430x932
- Evitar textos largos
- Evitar que hotspots tapen el auto
- Mantener buena legibilidad
- Optimizar altura de escenas
- Que el scroll se sienta fluido

8. Performance
- Usar transform y opacity
- Preload de imágenes críticas
- Lazy loading donde corresponda
- Evitar animaciones pesadas
- No cargar librerías innecesarias

9. Calidad final
- No debe parecer plantilla genérica.
- No debe parecer catálogo.
- Debe parecer demo digital premium del auto.

Validación:
- Ejecutar build.
- Revisar errores TypeScript/JS si existen.
- No dejar imports rotos.
- No romper rutas existentes.

Entregables:
1. Mejorar visualmente la experiencia.
2. Indicar archivos modificados.
3. Validar build.
4. Sugerir commit.
5- Siempre first mobile
Commit sugerido:
style/byd-dolphin-mini-scroll-polish