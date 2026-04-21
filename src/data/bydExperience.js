// ============================================================
// CONFIG EDITABLE - BYD Dolphin Mini EV GS
// Jesus Diaz Automotores - Tandil
// ============================================================

const IMAGE_BASE = '/byd-dolphin-semantic-jpg'
const THUMB_BASE = '/byd-dolphin-semantic-thumb'

function sceneImage(file) {
  return `${IMAGE_BASE}/${file}.jpg`
}

function sceneThumb(file) {
  return `${THUMB_BASE}/${file}.jpg`
}

export const carImages = {
  heroImage: sceneImage('01_exterior_front_left_three_quarter'),
  frontViewImage: sceneImage('02_exterior_front_view'),
  sideProfileImage: sceneImage('03_exterior_left_side_profile'),
  rearLeftImage: sceneImage('04_exterior_rear_left_three_quarter'),
  entryViewImage: sceneImage('05_driver_door_open_interior_entry_view'),
  cockpitImage: sceneImage('06_interior_driver_cockpit_wide_angle'),
  seatsImage: sceneImage('07_interior_front_seats_side_view'),
  evSectionImage: sceneImage('08_exterior_left_side_profile_battery_graphic'),
  rearRightImage: sceneImage('09_exterior_rear_right_three_quarter'),
  dashboardFrontImage: sceneImage('10_interior_dashboard_full_frontal_view'),
  infotainmentImage: sceneImage('11_interior_infotainment_screen_closeup'),
  cockpitThreeQuarterImage: sceneImage('12_interior_driver_cockpit_three_quarter'),
  detailCollageImage: sceneImage('13_interior_seats_console_door_detail_collage'),
  seatsObliqueImage: sceneImage('14_interior_front_seats_oblique_view'),
  entryStudioImage: sceneImage('15_driver_door_open_cabin_blue_studio'),
}

export const bydExperience = {
  auto: {
    nombreAuto: 'BYD Dolphin Mini',
    version: 'EV GS',
    autonomia: '380 km',
    autonomiaDisclaimer:
      '* Autonomia declarada segun ciclo NEDC. La autonomia real puede variar segun condiciones de manejo, temperatura y uso de climatizacion.',
    agencia: 'Jesus Diaz Automotores',
    ciudad: 'Tandil',
    whatsapp: '5492494000000',
    whatsappMensaje:
      'Hola! Me interesa el BYD Dolphin Mini EV GS 0km. Puedo coordinar un test drive en Tandil?',
  },

  specs: {
    confirmadas: {
      motor: '87 CV (65 kW)',
      torque: '135 Nm',
      bateria: '43.2 kWh Blade Battery',
      autonomia: '380 km (NEDC)',
      cargaRapidaDC: '10% al 80% en 30 min',
      pantalla: 'Pantalla giratoria 10.1"',
      ruedas: 'Rodado 16" - 185/55 R16',
      airbags: '6 airbags',
      plataforma: 'e-Platform 3.0',
      asientosGS: 'Conductor 6 vias / pasajero 4 vias',
      conectividad: 'Apple CarPlay + Android Auto',
    },
  },

  escenas: [
    {
      id: 'hero-exterior',
      imagen: carImages.heroImage,
      thumb: sceneThumb('01_exterior_front_left_three_quarter'),
      titulo: 'BYD Dolphin Mini EV GS.',
      subtitulo: 'Faros LED, postura urbana y una apertura hero que presenta el auto desde su angulo mas fuerte.',
      accent: '#d7ff45',
      features: [
        { icon: 'spark', label: 'Faros LED', value: 'Firma luminosa delantera' },
        { icon: 'bolt', label: '100% electrico', value: 'Hatchback urbano BYD' },
      ],
      hotspots: [
        {
          label: 'Faros LED',
          title: 'Identidad luminosa',
          detail: 'BYD Argentina destaca faros LED como parte del frente del Dolphin Mini.',
          icon: 'spark',
          x: 26,
          y: 39,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.01,
        endScale: 1.08,
        overlay:
          'linear-gradient(180deg, rgba(4,10,22,0.18) 0%, rgba(4,10,22,0.03) 34%, rgba(0,0,0,0.5) 100%)',
      },
    },
    {
      id: 'front-identity',
      imagen: carImages.frontViewImage,
      thumb: sceneThumb('02_exterior_front_view'),
      titulo: 'Frente con primera impresion clara.',
      subtitulo: 'La vista frontal centrada es la indicada para contar luces, presencia y gesto visual del auto.',
      accent: '#d5ff44',
      features: [
        { icon: 'spark', label: 'Frontal LED', value: 'Lectura directa del frente' },
        { icon: 'shield', label: '6 airbags', value: 'Seguridad de serie' },
      ],
      hotspots: [
        {
          label: 'Opticas',
          title: 'Frente principal',
          detail: 'Esta escena se reserva para contar la identidad frontal y la firma visual del modelo.',
          icon: 'spark',
          x: 18,
          y: 36,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.08,
      },
    },
    {
      id: 'side-profile',
      imagen: carImages.sideProfileImage,
      thumb: sceneThumb('03_exterior_left_side_profile'),
      titulo: 'Perfil lateral y proporciones.',
      subtitulo: 'La silueta completa deja explicar largo, batalla y el rodado de 16 pulgadas.',
      accent: '#caff45',
      features: [
        { icon: 'wheel', label: '16 pulgadas', value: '185/55 R16' },
        { icon: 'space', label: '2.500 mm', value: 'Distancia entre ejes' },
      ],
      hotspots: [
        {
          label: 'Aleacion 16"',
          title: 'Rodado oficial',
          detail: 'La ficha tecnica indica ruedas de 16 pulgadas con neumaticos 185/55 R16.',
          icon: 'wheel',
          x: 24,
          y: 76,
        },
        {
          label: 'Silueta',
          title: 'Perfil urbano',
          detail: 'La vista lateral muestra mejor la proporcion compacta y el formato urbano del Dolphin Mini.',
          icon: 'measure',
          x: 52,
          y: 44,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.01,
        endScale: 1.07,
      },
    },
    {
      id: 'rear-left',
      imagen: carImages.rearLeftImage,
      thumb: sceneThumb('04_exterior_rear_left_three_quarter'),
      titulo: 'Diseno trasero con lectura completa.',
      subtitulo: 'La vista 3/4 trasera izquierda muestra spoiler, cola y cierre de lineas del auto.',
      accent: '#d2ff45',
      features: [
        { icon: 'design', label: 'Vista 3/4', value: 'Continuidad del lateral al sector trasero' },
        { icon: 'spark', label: 'Firma trasera', value: 'Lectura visual posterior' },
      ],
      hotspots: [
        {
          label: 'Sector trasero',
          title: 'Cierre del diseno',
          detail: 'Esta toma explica mejor el remate posterior y el trabajo de superficies del auto.',
          icon: 'design',
          x: 56,
          y: 31,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.09,
      },
    },
    {
      id: 'rear-right',
      imagen: carImages.rearRightImage,
      thumb: sceneThumb('09_exterior_rear_right_three_quarter'),
      titulo: 'Exterior trasero desde el otro angulo.',
      subtitulo: 'Una segunda vista para reforzar la galeria exterior con otra lectura del volumen posterior.',
      accent: '#68d8ff',
      features: [
        { icon: 'city', label: 'Formato urbano', value: 'Compacto y agil' },
        { icon: 'design', label: 'Volumen posterior', value: 'Otra perspectiva del remate' },
      ],
      hotspots: [
        {
          label: 'Perspectiva trasera',
          title: 'Vista complementaria',
          detail: 'Esta toma refuerza la narrativa exterior sin repetir exactamente la misma composicion.',
          icon: 'design',
          x: 64,
          y: 34,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.08,
      },
    },
    {
      id: 'ev-mobility',
      imagen: carImages.evSectionImage,
      thumb: sceneThumb('08_exterior_left_side_profile_battery_graphic'),
      titulo: 'La parte electrica entra en escena.',
      subtitulo: 'Blade Battery de 43.2 kWh, e-Platform 3.0 y autonomia de 380 km NEDC.',
      accent: '#5adfff',
      features: [
        { icon: 'battery', label: '43.2 kWh', value: 'Blade Battery' },
        { icon: 'range', label: '380 km', value: 'Autonomia NEDC' },
        { icon: 'charge', label: '30 min', value: '10% a 80%' },
      ],
      hotspots: [
        {
          label: 'Blade Battery',
          title: 'Tecnologia EV',
          detail: 'La pagina oficial y la ficha tecnica destacan Blade Battery y e-Platform 3.0 como base del modelo.',
          icon: 'battery',
          x: 80,
          y: 29,
        },
        {
          label: 'Carga rapida',
          title: 'Uso diario real',
          detail: 'La ficha argentina publica 10% a 80% en 30 minutos bajo carga rapida.',
          icon: 'charge',
          x: 54,
          y: 42,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1,
        endScale: 1.07,
        overlay:
          'linear-gradient(120deg, rgba(38,183,255,0.18) 0%, rgba(38,183,255,0.04) 38%, rgba(0,0,0,0.34) 100%)',
      },
    },
    {
      id: 'entry-view',
      imagen: carImages.entryViewImage,
      thumb: sceneThumb('05_driver_door_open_interior_entry_view'),
      titulo: 'Acceso a cabina desde la puerta del conductor.',
      subtitulo: 'La imagen correcta para la transicion exterior a interior: puerta abierta y cockpit a la vista.',
      accent: '#ceff44',
      features: [
        { icon: 'door', label: 'Puerta abierta', value: 'Ingreso natural a cabina' },
        { icon: 'comfort', label: 'Entrada comoda', value: 'Escena de acceso' },
      ],
      hotspots: [
        {
          label: 'Ingreso',
          title: 'Acceso a cabina',
          detail: 'La puerta abierta y el asiento a la vista hacen de esta la mejor escena para explicar entrada y postura.',
          icon: 'door',
          x: 22,
          y: 45,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.1,
      },
    },
    {
      id: 'entry-studio',
      imagen: carImages.entryStudioImage,
      thumb: sceneThumb('15_driver_door_open_cabin_blue_studio'),
      titulo: 'Entrada a cabina con atmosfera editorial.',
      subtitulo: 'Una toma azul mas inmersiva para reforzar la narrativa antes de entrar al cockpit.',
      accent: '#67d7ff',
      features: [
        { icon: 'door', label: 'Transicion visual', value: 'Exterior a interior' },
        { icon: 'screen', label: 'Cabina protagonista', value: 'Cockpit ya visible' },
      ],
      hotspots: [
        {
          label: 'Cockpit visible',
          title: 'Primer vistazo interior',
          detail: 'La composicion editorial deja ver volante, pantalla y acceso en una sola escena.',
          icon: 'screen',
          x: 69,
          y: 35,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.11,
      },
    },
    {
      id: 'cockpit-wide',
      imagen: carImages.cockpitImage,
      thumb: sceneThumb('06_interior_driver_cockpit_wide_angle'),
      titulo: 'Cockpit amplio del conductor.',
      subtitulo: 'Volante, tablero y consola aparecen juntos en una vista amplia y clara.',
      accent: '#d4ff43',
      features: [
        { icon: 'wheel', label: 'Volante multifuncion', value: 'Comandos al alcance' },
        { icon: 'platform', label: 'Layout limpio', value: 'Cockpit ordenado' },
      ],
      hotspots: [
        {
          label: 'Volante',
          title: 'Puesto de manejo',
          detail: 'La vista amplia es ideal para explicar ergonomia y disposicion de controles.',
          icon: 'wheel',
          x: 26,
          y: 42,
        },
        {
          label: 'Consola',
          title: 'Uso diario',
          detail: 'La consola central resalta la practicidad del habitaculo para manejo urbano.',
          icon: 'storage',
          x: 56,
          y: 54,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.08,
      },
    },
    {
      id: 'dashboard-front',
      imagen: carImages.dashboardFrontImage,
      thumb: sceneThumb('10_interior_dashboard_full_frontal_view'),
      titulo: 'Tablero completo de frente.',
      subtitulo: 'Una vista frontal total para mostrar espacio, tablero y simetria interior.',
      accent: '#62d8ff',
      features: [
        { icon: 'screen', label: 'Pantalla 10.1"', value: 'Centro multimedia giratorio' },
        { icon: 'comfort', label: 'Cabina abierta', value: 'Lectura total del interior' },
      ],
      hotspots: [
        {
          label: 'Pantalla',
          title: 'Multimedia central',
          detail: 'La ficha argentina indica pantalla giratoria de 10.1 pulgadas.',
          icon: 'screen',
          x: 52,
          y: 28,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1,
        endScale: 1.06,
      },
    },
    {
      id: 'cockpit-three-quarter',
      imagen: carImages.cockpitThreeQuarterImage,
      thumb: sceneThumb('12_interior_driver_cockpit_three_quarter'),
      titulo: 'Cockpit en vista 3/4.',
      subtitulo: 'Una toma mas cercana del conductor para reforzar volante, consola y tablero.',
      accent: '#d4ff45',
      features: [
        { icon: 'screen', label: 'Interfaz BYD', value: 'Centro de control' },
        { icon: 'storage', label: 'Consola practica', value: 'Objetos al alcance' },
      ],
      hotspots: [
        {
          label: 'Volante + consola',
          title: 'Cockpit 3/4',
          detail: 'Esta escena complementa la vista frontal con mas sensacion de uso real desde la puerta.',
          icon: 'wheel',
          x: 38,
          y: 40,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.09,
      },
    },
    {
      id: 'seats-side',
      imagen: carImages.seatsImage,
      thumb: sceneThumb('07_interior_front_seats_side_view'),
      titulo: 'Asientos delanteros y ergonomia.',
      subtitulo: 'La vista lateral de butacas es la correcta para hablar de postura, soporte y confort.',
      accent: '#cbff43',
      features: [
        { icon: 'seat', label: 'Asientos sport', value: 'Lectura lateral completa' },
        { icon: 'adjust', label: 'GS electrico', value: 'Conductor 6 vias / pasajero 4 vias' },
      ],
      hotspots: [
        {
          label: 'Butacas',
          title: 'Confort delantero',
          detail: 'La version GS informa ajuste electrico en conductor y pasajero en la ficha argentina.',
          icon: 'seat',
          x: 34,
          y: 47,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.1,
      },
    },
    {
      id: 'seats-oblique',
      imagen: carImages.seatsObliqueImage,
      thumb: sceneThumb('14_interior_front_seats_oblique_view'),
      titulo: 'Confort interior desde la puerta.',
      subtitulo: 'La vista oblicua suma una mejor lectura de butacas, consola y habitabilidad delantera.',
      accent: '#66d8ff',
      features: [
        { icon: 'seat', label: 'Habitabilidad', value: 'Interior util y claro' },
        { icon: 'comfort', label: 'Uso diario', value: 'Ingreso y postura' },
      ],
      hotspots: [
        {
          label: 'Asiento conductor',
          title: 'Postura y apoyo',
          detail: 'La toma oblicua deja ver mejor el perfil del respaldo y la integracion con la consola.',
          icon: 'seat',
          x: 34,
          y: 44,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.1,
      },
    },
    {
      id: 'infotainment',
      imagen: carImages.infotainmentImage,
      thumb: sceneThumb('11_interior_infotainment_screen_closeup'),
      titulo: 'Pantalla y conectividad al centro.',
      subtitulo: 'Apple CarPlay, Android Auto y control por voz en la escena correcta: el close-up multimedia.',
      accent: '#61d7ff',
      features: [
        { icon: 'carplay', label: 'Apple CarPlay', value: 'Compatible' },
        { icon: 'android', label: 'Android Auto', value: 'Compatible' },
        { icon: 'voice', label: 'Hi, BYD', value: 'Control por voz' },
      ],
      hotspots: [
        {
          label: 'Pantalla 10.1"',
          title: 'Infotainment',
          detail: 'La web oficial BYD Argentina informa pantalla giratoria de 10.1" con CarPlay y Android Auto.',
          icon: 'screen',
          x: 76,
          y: 24,
        },
        {
          label: 'Comandos fisicos',
          title: 'Acceso rapido',
          detail: 'La toma tambien deja ver la botonera y salidas de aire bajo la pantalla central.',
          icon: 'switch',
          x: 58,
          y: 46,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.04,
        endScale: 1.11,
        overlay:
          'linear-gradient(135deg, rgba(49,146,255,0.16) 0%, rgba(49,146,255,0.04) 40%, rgba(0,0,0,0.28) 100%)',
      },
    },
    {
      id: 'detail-collage',
      imagen: carImages.detailCollageImage,
      thumb: sceneThumb('13_interior_seats_console_door_detail_collage'),
      titulo: 'Detalles de interior y consola.',
      subtitulo: 'El collage final concentra apoyabrazos, consola, panel de puerta y terminaciones de cabina.',
      accent: '#d8ff44',
      features: [
        { icon: 'storage', label: 'Consola', value: 'Portaobjetos y apoyos' },
        { icon: 'switch', label: 'Mandos', value: 'Lectura de detalles' },
      ],
      hotspots: [
        {
          label: 'Detalle interior',
          title: 'Acabados y uso',
          detail: 'La composicion multipanel se usa para cerrar la narrativa interior con foco en materiales y funciones.',
          icon: 'storage',
          x: 56,
          y: 48,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.01,
        endScale: 1.06,
      },
    },
  ],

  fuentes: [
    {
      nombre: 'BYD Argentina - Dolphin Mini',
      url: 'https://www.byd.com/ar/car/dolphin-mini',
      confianza: 'oficial',
    },
    {
      nombre: 'Ficha tecnica BYD Dolphin Mini Argentina',
      url: 'https://www.byd.com/material/byd-site/ar/flyers_argentina/new/AR-BYD-DOLPHIN-MINI-20250829.pdf',
      confianza: 'oficial',
    },
  ],
}
