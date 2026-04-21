Objetivo:
Crear la base de una experiencia web scrollytelling para presentar el BYD Dolphin Mini EV GS 0km en Tandil.

IMPORTANTE:
En este paso NO quiero pulido visual fino.
NO quiero que gastes tiempo en efectos premium avanzados todavía.
Quiero investigación, estructura, configuración editable y una primera versión funcional.

Producto:
- BYD Dolphin Mini EV GS 0km
- 100% eléctrico
- Autonomía aproximada: 380 km NEDC
- Agencia: Jesús Díaz Automotores
- Ciudad: Tandil
- Test drive disponible

Assets disponibles:
Las imágenes reales están en:
public/byd-dolphin/webp/

Usar estas imágenes:
01-front-hero-straight.webp
02-front-hero-three-quarter-right.webp
03-front-three-quarter-left.webp
04-side-profile-left-full.webp
05-side-profile-right-full.webp
06-rear-three-quarter-left.webp
07-rear-three-quarter-right.webp
08-driver-door-open-interior-reveal.webp
09-front-cabin-dashboard-angle.webp
10-dashboard-wide-cockpit.webp
11-front-seats-driver-side.webp
12-front-seats-passenger-side.webp
13-rear-seats-left-angle.webp
14-rear-seats-right-angle.webp

Investigación:
Buscá la máxima información confiable posible sobre el BYD Dolphin Mini EV GS en Argentina.

Prioridad de fuentes:
1. BYD Argentina oficial
2. ficha técnica oficial PDF de BYD Argentina
3. concesionarios oficiales BYD Argentina
4. medios automotrices confiables

Datos a buscar:
- autonomía versión GS
- tipo de batería
- capacidad de batería si está confirmada
- tiempo de carga rápida
- plataforma
- potencia
- torque
- velocidad máxima
- dimensiones
- baúl
- equipamiento interior confirmado
- seguridad confirmada
- tecnología confirmada
- garantía si está confirmada
- diferencias GL vs GS si aparece claro

Regla:
Si hay datos contradictorios, usar como fuente principal BYD Argentina oficial.
No inventar.
Marcar datos dudosos como pendiente de validar.

Tareas técnicas:
1. Crear archivo de configuración editable:
   src/data/bydExperience.js

2. Incluir en ese archivo:
   - nombreAuto
   - version
   - autonomia
   - autonomiaDisclaimer
   - agencia
   - ciudad
   - whatsapp editable
   - textos por escena
   - imágenes por escena
   - specs confirmadas
   - specs pendientes de validar
   - fuentes consultadas

3. Crear estructura de componentes:
   src/pages/BydDolphinExperience.jsx
   src/components/byd/BydScrollExperience.jsx
   src/components/byd/StickyCarScene.jsx
   src/components/byd/SceneText.jsx
   src/components/byd/Hotspot.jsx
   src/components/byd/FloatingCTA.jsx
   src/components/byd/ScrollProgress.jsx
   src/components/byd/BatteryAnimation.jsx
   src/components/byd/SpecOverlay.jsx

4. Crear una primera versión funcional:
   - mobile first
   - escena sticky full-screen
   - scroll largo
   - cambio de imagen según progreso
   - textos cortos por escena
   - CTA flotante a WhatsApp
   - indicador de progreso
   - hotspots básicos

5. Secuencia base:
   - Hero frontal
   - Novedad en Tandil
   - Exterior
   - Apertura puerta
   - Interior
   - Tablero
   - Butacas
   - Plazas traseras
   - Autonomía
   - Carga eléctrica
   - Tecnología BYD
   - Test drive

Restricciones:
- No hacer landing tradicional.
- No crear secciones normales una debajo de otra.
- Usar escena sticky full-screen.
- Usar fotos reales.
- No usar imágenes externas del auto.
- Si falta foto de carga o baúl, dejar placeholder claro.
- No inventar specs.
- No romper rutas existentes.

Entregables:
1. Implementar primera versión funcional.
2. Indicar archivos creados/modificados.
3. Indicar fuentes usadas.
4. Indicar datos confirmados y dudosos.
5. Validar que compile.
6. Sugerir commit.

Commit sugerido:
feat/byd-dolphin-mini-scroll-structure