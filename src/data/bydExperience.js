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

export const WHATSAPP_PHONE = '5492494541756'

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
      '* Autonomía declarada según ciclo NEDC. La autonomía real puede variar según condiciones de manejo, temperatura y uso de climatización.',
    agencia: 'Jesús Díaz Automotores',
    ciudad: 'Tandil',
    whatsapp: WHATSAPP_PHONE,
    whatsappMensaje:
      'Hola, quiero consultar por el BYD Dolphin Mini EV GS 100% eléctrico y coordinar un test drive.',
  },

  specs: {
    confirmadas: {
      motor: '87 CV (65 kW)',
      torque: '135 Nm',
      bateria: '43,2 kWh Blade Battery',
      autonomia: '380 km (NEDC)',
      cargaRapidaDC: '10% al 80% en 30 min',
      pantalla: 'Pantalla giratoria 10,1"',
      ruedas: 'Rodado 16" · 185/55 R16',
      airbags: '6 airbags',
      plataforma: 'e-Platform 3.0',
      asientosGS: 'Conductor 6 vías / pasajero 4 vías',
      conectividad: 'Apple CarPlay + Android Auto',
    },
  },

  escenas: [
    {
      id: 'hero-exterior',
      imagen: carImages.heroImage,
      thumb: sceneThumb('01_exterior_front_left_three_quarter'),
      titulo: 'BYD Dolphin Mini EV GS.',
      subtitulo: 'El hatchback eléctrico que llegó a Tandil. Compacto, tecnológico y listo para redefinir tu forma de manejar.',
      accent: '#d7ff45',
      features: [
        { icon: 'bolt', label: '100% eléctrico', value: 'Sin nafta, sin ruido' },
        { icon: 'range', label: 'Hasta 380 km', value: 'Autonomía NEDC' },
      ],
      hotspots: [
        {
          label: 'Faros LED',
          title: 'Identidad luminosa',
          detail: 'Firma delantera LED que combina presencia urbana con eficiencia energética.',
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
          'linear-gradient(180deg, rgba(4,10,22,0.18) 0%, rgba(4,10,22,0.03) 34%, rgba(0,0,0,0.55) 100%)',
      },
    },
    {
      id: 'front-identity',
      imagen: carImages.frontViewImage,
      thumb: sceneThumb('02_exterior_front_view'),
      titulo: 'Un frente que genera primera impresión.',
      subtitulo: 'Ópticas LED, postura baja y diseño asiático con carácter propio. Todo pensado para la ciudad.',
      accent: '#d5ff44',
      features: [
        { icon: 'spark', label: 'Faros LED', value: 'Firma luminosa premium' },
        { icon: 'shield', label: '6 airbags', value: 'Seguridad de serie' },
      ],
      hotspots: [
        {
          label: 'Ópticas LED',
          title: 'Diseño frontal',
          detail: 'Faros LED integrados con la firma luminosa característica del Dolphin Mini.',
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
      titulo: 'Proporciones perfectas para la ciudad.',
      subtitulo: 'Silueta compacta con batalla de 2.500 mm, llantas de 16" y líneas que fluyen de adelante hacia atrás.',
      accent: '#caff45',
      features: [
        { icon: 'wheel', label: 'Llantas 16"', value: '185/55 R16' },
        { icon: 'space', label: '2.500 mm', value: 'Distancia entre ejes' },
      ],
      hotspots: [
        {
          label: 'Aleación 16"',
          title: 'Rodado oficial',
          detail: 'Llantas de 16 pulgadas con neumáticos 185/55 R16, especificadas en la ficha técnica oficial.',
          icon: 'wheel',
          x: 24,
          y: 76,
        },
        {
          label: 'Silueta',
          title: 'Perfil urbano',
          detail: 'El diseño lateral muestra la proporción compacta del Dolphin Mini, ideal para maniobrar en ciudad.',
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
      titulo: 'Cada línea tiene un propósito.',
      subtitulo: 'El diseño trasero cierra un lenguaje visual coherente de adelante hacia atrás. Spoiler, stop LED y volumen bien resuelto.',
      accent: '#d2ff45',
      features: [
        { icon: 'design', label: 'Diseño 360°', value: 'Cohesión visual completa' },
        { icon: 'spark', label: 'Stop LED', value: 'Firma trasera luminosa' },
      ],
      hotspots: [
        {
          label: 'Sector trasero',
          title: 'Cierre del diseño',
          detail: 'El remate posterior mantiene el lenguaje del frente: limpio, moderno y bien proporcionado.',
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
      titulo: '360 grados de diseño.',
      subtitulo: 'Una silueta que se ve bien desde cualquier ángulo. Compacto sin sacrificar presencia en la calle.',
      accent: '#68d8ff',
      features: [
        { icon: 'city', label: 'Urbano por diseño', value: 'Compacto y ágil' },
        { icon: 'design', label: 'Vista complementaria', value: 'Volumen posterior' },
      ],
      hotspots: [
        {
          label: 'Vista trasera',
          title: 'Perspectiva completa',
          detail: 'La vista 3/4 trasera derecha completa la galería exterior con otra lectura del volumen posterior.',
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
      titulo: 'La parte eléctrica entra en escena.',
      subtitulo: 'Blade Battery de 43,2 kWh, e-Platform 3.0 y hasta 380 km de autonomía NEDC. El corazón que cambia todo.',
      accent: '#5adfff',
      features: [
        { icon: 'battery', label: '43,2 kWh', value: 'Blade Battery' },
        { icon: 'range', label: '380 km', value: 'Autonomía NEDC' },
        { icon: 'charge', label: '30 min', value: '10% a 80%' },
      ],
      hotspots: [
        {
          label: 'Blade Battery',
          title: 'Tecnología EV',
          detail: 'La Blade Battery de BYD es reconocida por su seguridad y densidad energética. Base e-Platform 3.0.',
          icon: 'battery',
          x: 80,
          y: 29,
        },
        {
          label: 'Carga rápida DC',
          title: 'Uso diario real',
          detail: '10% al 80% en aproximadamente 30 minutos bajo carga rápida DC. Especificación oficial Argentina.',
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
      titulo: 'Abrí la puerta. Entrá a otro mundo.',
      subtitulo: 'La primera impresión del interior del Dolphin Mini comienza aquí. Un habitáculo tecnológico desde el primer vistazo.',
      accent: '#ceff44',
      features: [
        { icon: 'door', label: 'Acceso natural', value: 'Ingreso a cabina' },
        { icon: 'comfort', label: 'Interior premium', value: 'Tecnología desde la entrada' },
      ],
      hotspots: [
        {
          label: 'Ingreso a cabina',
          title: 'Primera impresión',
          detail: 'Puerta abierta, asiento visible y cockpit al fondo. El Dolphin Mini recibe diferente.',
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
      titulo: 'Un interior que recibe distinto.',
      subtitulo: 'Volante, pantalla y consola en perfecta sintonía. La transición del mundo exterior al cockpit del Dolphin Mini.',
      accent: '#67d7ff',
      features: [
        { icon: 'door', label: 'Transición editorial', value: 'Exterior a interior' },
        { icon: 'screen', label: 'Cockpit visible', value: 'Pantalla ya en escena' },
      ],
      hotspots: [
        {
          label: 'Primer vistazo',
          title: 'El interior te recibe',
          detail: 'Desde la puerta se percibe el nivel tecnológico: volante, pantalla giratoria y materiales de calidad.',
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
      titulo: 'El cockpit fue diseñado para vos.',
      subtitulo: 'Volante multifunción, controles intuitivos y todo al alcance de la mano. Un puesto de manejo pensado para el conductor.',
      accent: '#d4ff43',
      features: [
        { icon: 'wheel', label: 'Volante multifunción', value: 'Comandos integrados' },
        { icon: 'platform', label: 'Layout limpio', value: 'Cockpit ordenado y claro' },
      ],
      hotspots: [
        {
          label: 'Volante',
          title: 'Control total',
          detail: 'Volante multifunción con controles de audio, teléfono y asistencias al alcance del conductor.',
          icon: 'wheel',
          x: 26,
          y: 42,
        },
        {
          label: 'Consola central',
          title: 'Todo a mano',
          detail: 'Consola diseñada para el uso cotidiano. Portaobjetos, almacenamiento y apoyabrazos integrados.',
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
      titulo: 'Interior amplio, tablero limpio.',
      subtitulo: 'La pantalla giratoria de 10,1" ocupa el centro. Un interior que combina tecnología con claridad visual.',
      accent: '#62d8ff',
      features: [
        { icon: 'screen', label: 'Pantalla 10,1"', value: 'Centro multimedia giratorio' },
        { icon: 'comfort', label: 'Cabina clara', value: 'Lectura total del interior' },
      ],
      hotspots: [
        {
          label: 'Pantalla giratoria',
          title: 'Centro multimedia',
          detail: 'Pantalla táctil giratoria de 10,1 pulgadas. Especificación oficial de la ficha técnica argentina.',
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
      titulo: 'El puesto de manejo más avanzado de su segmento.',
      subtitulo: 'Pantalla, volante y consola en armonía. Una vista 3/4 que muestra la integración real del cockpit.',
      accent: '#d4ff45',
      features: [
        { icon: 'screen', label: 'Interfaz BYD', value: 'Centro de control digital' },
        { icon: 'storage', label: 'Consola práctica', value: 'Objetos al alcance' },
      ],
      hotspots: [
        {
          label: 'Vista 3/4',
          title: 'Integración total',
          detail: 'Esta perspectiva muestra cómo la pantalla, el volante y la consola forman un conjunto coherente.',
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
      titulo: 'Confort real, no prometido.',
      subtitulo: 'Asientos eléctricos en la versión GS: conductor 6 vías y pasajero 4 vías. Soporte y postura para cada viaje.',
      accent: '#cbff43',
      features: [
        { icon: 'seat', label: 'Asientos eléctricos', value: '6 vías conductor · 4 vías pasajero' },
        { icon: 'adjust', label: 'Versión GS', value: 'Regulación eléctrica' },
      ],
      hotspots: [
        {
          label: 'Asientos GS',
          title: 'Confort delantero',
          detail: 'La versión GS incluye regulación eléctrica en conductor y pasajero. Dato confirmado en ficha oficial.',
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
      titulo: 'Un habitáculo pensado para el uso diario.',
      subtitulo: 'Butacas con soporte, consola funcional y espacio bien aprovechado. La calidad interior que se siente al entrar.',
      accent: '#66d8ff',
      features: [
        { icon: 'seat', label: 'Habitabilidad', value: 'Interior útil y claro' },
        { icon: 'comfort', label: 'Uso cotidiano', value: 'Pensado para la ciudad' },
      ],
      hotspots: [
        {
          label: 'Postura del conductor',
          title: 'Soporte y apoyo real',
          detail: 'El perfil del asiento y la integración con la consola muestran un interior listo para viajes largos.',
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
      titulo: 'Tecnología conectada al centro.',
      subtitulo: 'Apple CarPlay, Android Auto y control por voz Hi BYD. La pantalla giratoria de 10,1" es el corazón digital del habitáculo.',
      accent: '#61d7ff',
      features: [
        { icon: 'carplay', label: 'Apple CarPlay', value: 'Compatible' },
        { icon: 'android', label: 'Android Auto', value: 'Compatible' },
        { icon: 'voice', label: 'Hi, BYD', value: 'Control por voz' },
      ],
      hotspots: [
        {
          label: 'Pantalla 10,1"',
          title: 'Infotainment giratorio',
          detail: 'Pantalla táctil giratoria de 10,1" con CarPlay, Android Auto y asistente por voz Hi BYD.',
          icon: 'screen',
          x: 76,
          y: 24,
        },
        {
          label: 'Controles físicos',
          title: 'Acceso rápido',
          detail: 'Botonera y salidas de aire integradas bajo la pantalla para acceso directo sin quitar la vista del camino.',
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
      titulo: 'Los detalles marcan la diferencia.',
      subtitulo: 'Apoyabrazos, consola, panel de puerta y terminaciones que se sienten premium al tacto. El cierre de una experiencia completa.',
      accent: '#d8ff44',
      features: [
        { icon: 'storage', label: 'Consola', value: 'Portaobjetos y apoyo' },
        { icon: 'switch', label: 'Terminaciones', value: 'Acabados interiores' },
      ],
      hotspots: [
        {
          label: 'Detalle interior',
          title: 'Acabados y uso real',
          detail: 'Apoyabrazos, paneles y consola con terminaciones cuidadas. La calidad se percibe en cada detalle.',
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
      nombre: 'Ficha técnica BYD Dolphin Mini Argentina',
      url: 'https://www.byd.com/material/byd-site/ar/flyers_argentina/new/AR-BYD-DOLPHIN-MINI-20250829.pdf',
      confianza: 'oficial',
    },
  ],
}
