// ============================================================
// CONFIG EDITABLE - BYD Dolphin Mini EV GS
// Jesus Diaz Automotores - Tandil
// ============================================================

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
      torque: '175 Nm',
      bateria: '43.2 kWh - Blade LFP',
      autonomia: '380 km (NEDC)',
      cargaRapidaDC: 'Hasta 85 kW CC',
      tiempoCarga10a80: '~30 min (carga rapida DC)',
      velocidadMaxima: '150 km/h',
      largo: '3.990 mm',
      ancho: '1.720 mm',
      alto: '1.590 mm',
      distanciaEntreEjes: '2.500 mm',
      baul: '308 litros',
      pasajeros: '4',
      airbags: '6',
      garantiaAuto: '6 anos / 150.000 km',
      garantiaBateria: '8 anos / 150.000 km',
      plataforma: 'e-Platform 3.0',
    },
    pendientesValidar: {
      aceleracion0a100: 'Pendiente de confirmar',
      pesoCurb: 'Pendiente de confirmar',
      cargaCA: 'Pendiente de confirmar (potencia AC)',
      traccion: 'Pendiente de confirmar (FWD supuesto)',
      sistemasADAS: 'Pendiente de confirmar detalle completo GS',
    },
    gsVsGl: [
      'Carga rapida DC hasta 85 kW (GS) vs sin carga rapida DC (GL)',
      'Retrovisores exteriores de plegado electrico (GS)',
      'Ajuste electrico asiento pasajero (GS)',
    ],
  },

  escenas: [
    {
      id: 'hero',
      imagen: '/byd-dolphin/01-front-hero-straight.jpg',
      titulo: 'El futuro llego a Tandil.',
      subtitulo: 'BYD Dolphin Mini EV GS - 100% electrico, 0km.',
      hotspots: [],
      visual: {
        objectPosition: 'center center',
        startScale: 1,
        endScale: 1.08,
        overlay:
          'linear-gradient(180deg, rgba(4,8,18,0.28) 0%, rgba(4,8,18,0.04) 38%, rgba(0,0,0,0.36) 100%)',
      },
    },
    {
      id: 'exterior-34',
      imagen: '/byd-dolphin/02-front-hero-three-quarter-right.jpg',
      titulo: 'Exterior 3/4.',
      subtitulo:
        'La silueta del Dolphin Mini combina proporciones urbanas con una presencia bien plantada.',
      hotspots: [],
      visual: {
        objectPosition: '58% center',
        startScale: 1.04,
        endScale: 1.1,
        startX: -16,
        endX: 10,
      },
    },
    {
      id: 'lateral',
      imagen: '/byd-dolphin/04-side-profile-left-full.jpg',
      titulo: 'Lateral limpio y compacto.',
      subtitulo:
        '3.990 mm de largo y una distancia entre ejes de 2.500 mm para aprovechar cada centimetro.',
      hotspots: [],
      visual: {
        objectPosition: '42% center',
        startScale: 1.02,
        endScale: 1.07,
        startX: 12,
        endX: -12,
      },
    },
    {
      id: 'puerta',
      imagen: '/byd-dolphin/08-driver-door-open-interior-reveal.jpg',
      titulo: 'Puerta abierta, cabina lista.',
      subtitulo:
        'La transicion del exterior al interior muestra un acceso amplio y una postura de manejo elevada.',
      hotspots: [
        { label: 'Acceso amplio', x: 33, y: 58 },
        { label: 'Cabina elevada', x: 60, y: 34 },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.11,
        startY: -6,
        endY: 8,
      },
    },
    {
      id: 'interior',
      imagen: '/byd-dolphin/09-front-cabin-dashboard-angle.jpg',
      titulo: 'Interior moderno.',
      subtitulo: 'Tecnologia y confort pensados para el dia a dia.',
      hotspots: [],
      visual: {
        objectPosition: '50% 42%',
        startScale: 1.03,
        endScale: 1.12,
      },
    },
    {
      id: 'tablero',
      imagen: '/byd-dolphin/10-dashboard-wide-cockpit.jpg',
      titulo: 'Cockpit inteligente.',
      subtitulo: 'Pantalla central conectada. Clima digital. Todo bajo control.',
      hotspots: [
        { label: 'Pantalla central', x: 52, y: 38 },
        { label: 'Volante multifuncion', x: 22, y: 62 },
        { label: 'Consola central', x: 58, y: 70 },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1,
        endScale: 1.09,
        endY: -8,
      },
    },
    {
      id: 'butacas',
      imagen: '/byd-dolphin/11-front-seats-driver-side.jpg',
      titulo: 'Butacas delanteras.',
      subtitulo: 'Ajuste electrico del asiento del pasajero. Exclusivo version GS.',
      hotspots: [{ label: 'Ajuste electrico (GS)', x: 35, y: 70 }],
      visual: {
        objectPosition: '48% center',
        startScale: 1.04,
        endScale: 1.1,
        startX: -8,
        endX: 12,
      },
    },
    {
      id: 'traseras',
      imagen: '/byd-dolphin/13-rear-seats-left-angle.jpg',
      titulo: 'Asientos traseros comodos.',
      subtitulo: 'Espacio real para cuatro pasajeros y una segunda fila util de verdad.',
      hotspots: [],
      visual: {
        objectPosition: '52% center',
        startScale: 1.05,
        endScale: 1.12,
        startX: 10,
        endX: -10,
      },
    },
    {
      id: 'autonomia',
      imagen: '/byd-dolphin/05-side-profile-right-full.jpg',
      titulo: '380 km de autonomia.',
      subtitulo: 'Bateria Blade LFP 43.2 kWh. De Tandil a Buenos Aires, y de vuelta.',
      hotspots: [],
      visual: {
        objectPosition: '50% center',
        startScale: 1,
        endScale: 1.07,
        overlay:
          'linear-gradient(120deg, rgba(163,230,53,0.14) 0%, rgba(163,230,53,0.02) 35%, rgba(0,0,0,0.18) 100%)',
      },
    },
    {
      id: 'carga',
      imagen: null,
      imagenPlaceholder: 'Imagen de carga electrica - pendiente de asset',
      titulo: 'Carga rapida.',
      subtitulo: 'Hasta 85 kW CC. Del 10% al 80% en aproximadamente 30 minutos.',
      hotspots: [],
    },
    {
      id: 'tecnologia',
      imagen: '/byd-dolphin/12-front-seats-passenger-side.jpg',
      titulo: 'Tecnologia BYD.',
      subtitulo: 'e-Platform 3.0 - Bateria Blade - ADAS - 6 airbags.',
      hotspots: [],
      visual: {
        objectPosition: '56% center',
        startScale: 1.03,
        endScale: 1.12,
        overlay:
          'linear-gradient(135deg, rgba(64,145,255,0.18) 0%, rgba(64,145,255,0.02) 36%, rgba(0,0,0,0.22) 100%)',
      },
    },
    {
      id: 'testdrive',
      imagen: '/byd-dolphin/06-rear-three-quarter-left.jpg',
      titulo: 'Agenda tu test drive.',
      subtitulo: 'En Jesus Diaz Automotores, Tandil. 0km disponibles ahora.',
      hotspots: [],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.09,
        startX: 10,
        endX: -10,
        overlay:
          'linear-gradient(180deg, rgba(2,6,16,0.32) 0%, rgba(2,6,16,0.08) 42%, rgba(0,0,0,0.44) 100%)',
      },
    },
  ],

  fuentes: [
    {
      nombre: 'BYD Argentina Oficial - Dolphin Mini',
      url: 'https://www.byd.com/ar/car/dolphin-mini',
      confianza: 'oficial',
    },
    {
      nombre: 'Autocosmos - BYD Dolphin Mini GS 2025',
      url: 'https://www.autocosmos.com.ar/catalogo/2025/byd/dolphin-mini/gs/169521',
      confianza: 'alta',
    },
    {
      nombre: 'InsideEVs Argentina - Lanzamiento BYD Dolphin Mini 2025',
      url: 'https://insideevs.com.ar/news/774090/lanzamiento-byd-dolphin-mini-2025/',
      confianza: 'alta',
    },
    {
      nombre: '16 Valvulas - Lanzamiento Argentina desde USD 22.990',
      url: 'https://www.16valvulas.com.ar/nuevo-byd-dolphin-mini-lanzamiento-en-argentina-desde-us-22-990/',
      confianza: 'alta',
    },
    {
      nombre: 'Autocosmos Noticia - Lanzamiento precio Argentina',
      url: 'https://noticias.autocosmos.com.ar/2025/10/08/lanzamiento-el-byd-dolphin-mini-ya-tiene-precio-en-argentina',
      confianza: 'alta',
    },
  ],
}
