// ============================================================
// CONFIG EDITABLE - BYD Dolphin Mini EV GS
// Jesus Diaz Automotores - Tandil
// ============================================================

export const carImages = {
  hero: '/byd-dolphin-semantic/01_exterior_front_left_three_quarter.png',
  frontView: '/byd-dolphin-semantic/02_exterior_front_view.png',
  sideProfile: '/byd-dolphin-semantic/03_exterior_left_side_profile.png',
  rearLeft: '/byd-dolphin-semantic/04_exterior_rear_left_three_quarter.png',
  entryView: '/byd-dolphin-semantic/05_driver_door_open_interior_entry_view.png',
  cockpitWide: '/byd-dolphin-semantic/06_interior_driver_cockpit_wide_angle.png',
  seatsSide: '/byd-dolphin-semantic/07_interior_front_seats_side_view.png',
  evProfile: '/byd-dolphin-semantic/08_exterior_left_side_profile_battery_graphic.png',
  rearRight: '/byd-dolphin-semantic/09_exterior_rear_right_three_quarter.png',
  dashboardFront: '/byd-dolphin-semantic/10_interior_dashboard_full_frontal_view.png',
  infotainmentCloseup: '/byd-dolphin-semantic/11_interior_infotainment_screen_closeup.png',
  cockpitThreeQuarter: '/byd-dolphin-semantic/12_interior_driver_cockpit_three_quarter.png',
  detailCollage: '/byd-dolphin-semantic/13_interior_seats_console_door_detail_collage.png',
  seatsOblique: '/byd-dolphin-semantic/14_interior_front_seats_oblique_view.png',
  entryStudio: '/byd-dolphin-semantic/15_driver_door_open_cabin_blue_studio.png',
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
      imagen: carImages.hero,
      titulo: 'BYD Dolphin Mini EV GS.',
      subtitulo: 'Una apertura hero con la vista 3/4 delantera para presentar el auto desde su mejor angulo.',
      accent: '#d7ff45',
      features: [
        { icon: 'design', label: 'Hero exterior', value: 'Vista 3/4 delantera' },
        { icon: 'bolt', label: '100% electrico', value: 'Estilo urbano BYD' },
      ],
      hotspots: [
        {
          label: 'Primera impresion',
          title: 'Diseno frontal marcado',
          detail: 'La vista 3/4 delantera concentra postura, firma optica y volumen del capot en una sola toma.',
          icon: 'spark',
          x: 31,
          y: 36,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.01,
        endScale: 1.08,
        overlay:
          'linear-gradient(180deg, rgba(4,10,22,0.18) 0%, rgba(4,10,22,0.02) 34%, rgba(0,0,0,0.48) 100%)',
      },
    },
    {
      id: 'front-identity',
      imagen: carImages.frontView,
      titulo: 'Identidad frontal con luces LED.',
      subtitulo: 'Una toma frontal centrada ideal para destacar la expresion del frente y la firma visual.',
      accent: '#d5ff44',
      features: [
        { icon: 'spark', label: 'Faros LED', value: 'Lectura frontal clara' },
        { icon: 'shield', label: '6 airbags', value: 'Seguridad de serie' },
      ],
      hotspots: [
        {
          label: 'Luces LED',
          title: 'Faros delanteros',
          detail: 'La imagen frontal es la mejor para contar el diseno de luces y la identidad del frente.',
          icon: 'spark',
          x: 18,
          y: 38,
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
      imagen: carImages.sideProfile,
      titulo: 'Perfil lateral y proporciones.',
      subtitulo: 'La silueta completa permite explicar largo, distancia entre ejes y presencia urbana.',
      accent: '#caff45',
      features: [
        { icon: 'wheel', label: 'Rodado 16"', value: '185/55 R16' },
        { icon: 'space', label: '2.500 mm', value: 'Distancia entre ejes' },
      ],
      hotspots: [
        {
          label: 'Aleacion 16"',
          title: 'Rodado del Dolphin Mini',
          detail: 'La ficha tecnica oficial indica ruedas de 16 pulgadas con neumaticos 185/55 R16.',
          icon: 'wheel',
          x: 21,
          y: 74,
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
      imagen: carImages.rearLeft,
      titulo: 'Diseno trasero con continuidad visual.',
      subtitulo: 'La toma 3/4 trasera izquierda muestra como cierra la linea lateral y la firma posterior.',
      accent: '#d2ff45',
      features: [
        { icon: 'design', label: 'Trasera limpia', value: 'Volumenes definidos' },
        { icon: 'spark', label: 'Firma LED', value: 'Lectura posterior' },
      ],
      hotspots: [
        {
          label: 'Visual trasero',
          title: 'Cierre de lineas',
          detail: 'La vista 3/4 trasera permite leer spoiler, barra trasera y hombros del auto.',
          icon: 'design',
          x: 57,
          y: 30,
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
      imagen: carImages.rearRight,
      titulo: 'Otra lectura del sector posterior.',
      subtitulo: 'La vista 3/4 trasera derecha suma una segunda perspectiva para reforzar la galeria exterior.',
      accent: '#68d8ff',
      features: [
        { icon: 'city', label: 'Compacto urbano', value: 'Maniobrable y expresivo' },
        { icon: 'design', label: 'Superficies tensas', value: 'Buen trabajo de carroceria' },
      ],
      hotspots: [],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.08,
      },
    },
    {
      id: 'ev-mobility',
      imagen: carImages.evProfile,
      titulo: 'Movilidad electrica en primer plano.',
      subtitulo: 'La imagen con grafica de bateria es la escena correcta para autonomia, carga y tecnologia EV.',
      accent: '#5adfff',
      features: [
        { icon: 'battery', label: '43.2 kWh', value: 'Blade Battery' },
        { icon: 'range', label: '380 km', value: 'Autonomia NEDC' },
        { icon: 'charge', label: '30 min', value: '10% a 80%' },
      ],
      hotspots: [
        {
          label: 'Bateria',
          title: 'Blade Battery',
          detail: 'Esta escena se reserva para la parte EV porque ya incorpora una lectura visual de energia y bateria.',
          icon: 'battery',
          x: 79,
          y: 27,
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
      imagen: carImages.entryView,
      titulo: 'Transicion exterior a interior.',
      subtitulo: 'La puerta abierta mostrando el acceso a cabina funciona como puente natural entre diseno y habitaculo.',
      accent: '#ceff44',
      features: [
        { icon: 'door', label: 'Acceso a cabina', value: 'Vista de entrada' },
        { icon: 'comfort', label: 'Uso diario', value: 'Ingreso simple y comodo' },
      ],
      hotspots: [
        {
          label: 'Acceso',
          title: 'Entrada a la cabina',
          detail: 'La toma muestra exactamente el momento de pasar del exterior al puesto de manejo.',
          icon: 'door',
          x: 24,
          y: 43,
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
      imagen: carImages.entryStudio,
      titulo: 'Acceso editorial con atmosfera azul.',
      subtitulo: 'Una variante visual mas cinematografica para reforzar la transicion hacia el interior.',
      accent: '#67d7ff',
      features: [
        { icon: 'door', label: 'Puerta abierta', value: 'Entrada protagonista' },
        { icon: 'screen', label: 'Cabina visible', value: 'Cockpit a primera vista' },
      ],
      hotspots: [],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.11,
      },
    },
    {
      id: 'cockpit-wide',
      imagen: carImages.cockpitWide,
      titulo: 'Cockpit amplio del conductor.',
      subtitulo: 'La vista general del puesto de manejo sirve para presentar volante, tablero y consola en conjunto.',
      accent: '#d4ff43',
      features: [
        { icon: 'wheel', label: 'Volante multifuncion', value: 'Comandos al alcance' },
        { icon: 'platform', label: 'Layout limpio', value: 'Cockpit ordenado' },
      ],
      hotspots: [
        {
          label: 'Puesto de manejo',
          title: 'Cockpit completo',
          detail: 'Esta toma amplia es la correcta para explicar ergonomia y distribucion general.',
          icon: 'wheel',
          x: 27,
          y: 39,
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
      imagen: carImages.dashboardFront,
      titulo: 'Tablero completo de frente.',
      subtitulo: 'La vista frontal total del interior deja leer simetria, espacio y organizacion de la cabina.',
      accent: '#62d8ff',
      features: [
        { icon: 'screen', label: 'Pantalla 10.1"', value: 'Centro multimedia' },
        { icon: 'comfort', label: 'Cabina abierta', value: 'Lectura total del interior' },
      ],
      hotspots: [
        {
          label: 'Vista total',
          title: 'Layout interior',
          detail: 'Ideal para mostrar tablero, consola flotante y espacio entre plazas delanteras.',
          icon: 'platform',
          x: 50,
          y: 34,
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
      imagen: carImages.cockpitThreeQuarter,
      titulo: 'Cockpit en vista 3/4.',
      subtitulo: 'Complementa la toma amplia con una lectura mas cercana de volante, tablero y consola central.',
      accent: '#d4ff45',
      features: [
        { icon: 'screen', label: 'Interfaz BYD', value: 'Centro de control' },
        { icon: 'storage', label: 'Consola practica', value: 'Uso diario mas simple' },
      ],
      hotspots: [],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.09,
      },
    },
    {
      id: 'seats-side',
      imagen: carImages.seatsSide,
      titulo: 'Asientos delanteros y ergonomia.',
      subtitulo: 'La vista lateral de butacas es la mejor para hablar de postura, soporte y confort.',
      accent: '#cbff43',
      features: [
        { icon: 'seat', label: 'Asientos delanteros', value: 'Lectura lateral completa' },
        { icon: 'adjust', label: 'Version GS', value: 'Ajustes electricos' },
      ],
      hotspots: [
        {
          label: 'Confort',
          title: 'Butacas delanteras',
          detail: 'Esta toma esta dedicada especificamente a asientos, materiales y apoyo lateral.',
          icon: 'seat',
          x: 33,
          y: 54,
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
      imagen: carImages.seatsOblique,
      titulo: 'Confort interior desde la puerta.',
      subtitulo: 'La vista oblicua suma perspectiva para mostrar butacas, consola y acceso en una misma escena.',
      accent: '#66d8ff',
      features: [
        { icon: 'seat', label: 'Habitabilidad', value: 'Interior util y claro' },
        { icon: 'comfort', label: 'Cabina comoda', value: 'Ambiente diario' },
      ],
      hotspots: [],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.1,
      },
    },
    {
      id: 'infotainment',
      imagen: carImages.infotainmentCloseup,
      titulo: 'Pantalla y conectividad al centro.',
      subtitulo: 'El close-up de infotainment es la escena correcta para multimedia, CarPlay y Android Auto.',
      accent: '#61d7ff',
      features: [
        { icon: 'carplay', label: 'CarPlay', value: 'Compatible' },
        { icon: 'android', label: 'Android Auto', value: 'Compatible' },
        { icon: 'voice', label: 'Hi, BYD', value: 'Control por voz' },
      ],
      hotspots: [
        {
          label: 'Pantalla 10.1"',
          title: 'Infotainment',
          detail: 'La toma cerrada coincide exactamente con la seccion de conectividad y pantalla central.',
          icon: 'screen',
          x: 77,
          y: 23,
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
      imagen: carImages.detailCollage,
      titulo: 'Detalles de interior y consola.',
      subtitulo: 'El collage se reserva para materiales, apoyabrazos, mandos y pequenos features del habitaculo.',
      accent: '#d8ff44',
      features: [
        { icon: 'storage', label: 'Consola', value: 'Espacios y apoyos' },
        { icon: 'switch', label: 'Mandos', value: 'Lectura de detalles' },
      ],
      hotspots: [
        {
          label: 'Detalles',
          title: 'Consola y puertas',
          detail: 'La composicion multipanel es ideal para cerrar la parte interior con foco en acabados y uso.',
          icon: 'storage',
          x: 58,
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
