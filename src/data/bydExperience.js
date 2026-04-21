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
      id: 'hero-front',
      imagen: '/byd-dolphin-neo/14.png',
      titulo: 'Dolphin Mini, ahora con otra presencia.',
      subtitulo: 'Frente LED, postura urbana y una identidad visual que se reconoce al instante.',
      accent: '#d5ff3f',
      features: [
        { icon: 'spark', label: 'Faros LED', value: 'Firma luminosa delantera' },
        { icon: 'shield', label: '6 airbags', value: 'Proteccion de serie' },
      ],
      hotspots: [
        {
          label: 'Luces LED',
          title: 'Faros y DRL LED',
          detail: 'BYD destaca faros LED y luces diurnas con una firma visual marcada para el frente.',
          icon: 'spark',
          x: 20,
          y: 38,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.01,
        endScale: 1.08,
        overlay:
          'linear-gradient(180deg, rgba(4,10,22,0.28) 0%, rgba(4,10,22,0.04) 36%, rgba(0,0,0,0.55) 100%)',
      },
    },
    {
      id: 'hero-34',
      imagen: '/byd-dolphin-neo/15.png',
      titulo: 'Exterior 3/4 con look electrico.',
      subtitulo: 'Compacto para ciudad, pero con una silueta bien plantada y mucho caracter.',
      accent: '#c7ff3d',
      features: [
        { icon: 'bolt', label: '100% electrico', value: 'Hatchback urbano' },
        { icon: 'measure', label: '3.990 mm', value: 'Formato compacto' },
      ],
      hotspots: [
        {
          label: 'Ocean Aesthetics',
          title: 'Diseno inspirado en Ocean Series',
          detail: 'La marca describe una silueta de un solo arco y lineas fluidas para reforzar el perfil urbano.',
          icon: 'wave',
          x: 63,
          y: 44,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.04,
        endScale: 1.11,
        startX: -12,
        endX: 10,
      },
    },
    {
      id: 'side-profile',
      imagen: '/byd-dolphin-neo/13.png',
      titulo: 'Perfil limpio, ruedas de 16".',
      subtitulo: 'La vista lateral deja leer bien la plataforma, el piso plano y el enfoque de uso urbano.',
      accent: '#c6ff45',
      features: [
        { icon: 'wheel', label: '16 pulgadas', value: '185/55 R16' },
        { icon: 'space', label: '2.500 mm', value: 'Entre ejes' },
      ],
      hotspots: [
        {
          label: 'Rodado 16"',
          title: 'Ruedas de 16 pulgadas',
          detail: 'La ficha tecnica oficial indica tamano de rueda de 16 pulgadas con neumaticos 185/55 R16.',
          icon: 'wheel',
          x: 22,
          y: 73,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.09,
        startX: 8,
        endX: -10,
      },
    },
    {
      id: 'battery',
      imagen: '/byd-dolphin-neo/8.png',
      titulo: 'Energia BYD en escena.',
      subtitulo: 'Blade Battery, autonomia NEDC de 380 km y carga rapida para un uso real de todos los dias.',
      accent: '#5ce6ff',
      features: [
        { icon: 'battery', label: '43.2 kWh', value: 'Blade Battery' },
        { icon: 'range', label: '380 km', value: 'Autonomia NEDC' },
        { icon: 'charge', label: '30 min', value: '10% a 80%' },
      ],
      hotspots: [
        {
          label: 'Blade Battery',
          title: 'Bateria de 43.2 kWh',
          detail: 'BYD resalta su Blade Battery y la e-Platform 3.0 como parte central del Dolphin Mini.',
          icon: 'battery',
          x: 78,
          y: 29,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1,
        endScale: 1.08,
        overlay:
          'linear-gradient(120deg, rgba(38,183,255,0.18) 0%, rgba(38,183,255,0.04) 38%, rgba(0,0,0,0.38) 100%)',
      },
    },
    {
      id: 'rear-three-quarter',
      imagen: '/byd-dolphin-neo/12.png',
      titulo: 'Trasera con firma luminosa completa.',
      subtitulo: 'La barra LED trasera y el techo flotante son dos de los rasgos mas reconocibles del modelo.',
      accent: '#d6ff39',
      features: [
        { icon: 'spark', label: 'LED trasero', value: 'De lado a lado' },
        { icon: 'design', label: 'Techo flotante', value: 'Efecto visual marcado' },
      ],
      hotspots: [
        {
          label: 'LED trasero',
          title: 'Faros traseros de lado a lado',
          detail: 'BYD destaca un conjunto trasero LED continuo que refuerza el ancho visual del auto.',
          icon: 'spark',
          x: 53,
          y: 28,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.1,
        startX: -6,
        endX: 12,
      },
    },
    {
      id: 'rear-ambience',
      imagen: '/byd-dolphin-neo/7.png',
      titulo: 'Diseno pensado para destacar de noche.',
      subtitulo: 'La escena resalta como trabaja la carroceria con reflejos, volumenes y la firma posterior.',
      accent: '#5fcfff',
      features: [
        { icon: 'design', label: 'Volumenes limpios', value: 'Trazos bien definidos' },
        { icon: 'city', label: 'Formato urbano', value: 'Compacto y agil' },
      ],
      hotspots: [],
      visual: {
        objectPosition: 'center center',
        startScale: 1.02,
        endScale: 1.08,
      },
    },
    {
      id: 'door-open-side',
      imagen: '/byd-dolphin-neo/11.png',
      titulo: 'Acceso amplio al puesto de manejo.',
      subtitulo: 'La apertura y el umbral bajo ayudan a entrar y salir con comodidad en uso diario.',
      accent: '#cbff3f',
      features: [
        { icon: 'seat', label: 'Asientos sport', value: 'Cabina orientada al conductor' },
        { icon: 'comfort', label: '4 plazas', value: 'Config. 2+2' },
      ],
      hotspots: [
        {
          label: 'Ingreso',
          title: 'Acceso a cabina',
          detail: 'La posicion de manejo y la abertura de puerta favorecen una entrada comoda.',
          icon: 'door',
          x: 26,
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
      id: 'door-open-cabin',
      imagen: '/byd-dolphin-neo/1.png',
      titulo: 'Puerta abierta, interior protagonista.',
      subtitulo: 'Una cabina con mucho contraste visual, lineas horizontales y un cockpit bien despejado.',
      accent: '#65d8ff',
      features: [
        { icon: 'screen', label: 'Pantalla 10.1"', value: 'Centro multimedia' },
        { icon: 'voice', label: 'Hi, BYD', value: 'Control por voz' },
      ],
      hotspots: [
        {
          label: 'Cockpit',
          title: 'Pantalla y tablero digital',
          detail: 'La web oficial destaca pantalla tactil giratoria de 10,1" con CarPlay y Android Auto.',
          icon: 'screen',
          x: 70,
          y: 36,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.12,
      },
    },
    {
      id: 'front-seats',
      imagen: '/byd-dolphin-neo/2.png',
      titulo: 'Butacas delanteras con mejor postura.',
      subtitulo: 'BYD habla de asientos deportivos integrados y la version GS suma ajustes electricos.',
      accent: '#c7ff41',
      features: [
        { icon: 'seat', label: 'Asientos sport', value: 'Integrados' },
        { icon: 'adjust', label: 'GS electrico', value: 'Conductor 6 vias' },
      ],
      hotspots: [
        {
          label: 'Ajuste GS',
          title: 'Asiento electrico GS',
          detail: 'La ficha oficial para GS indica ajuste electrico de 6 vias en conductor y 4 en pasajero.',
          icon: 'adjust',
          x: 34,
          y: 74,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.04,
        endScale: 1.12,
      },
    },
    {
      id: 'cabin-details',
      imagen: '/byd-dolphin-neo/3.png',
      titulo: 'Detalles funcionales en toda la cabina.',
      subtitulo: 'Portaobjetos, apoyabrazos, comandos y terminaciones quedan mas claros en una vista de detalle.',
      accent: '#5dd9ff',
      features: [
        { icon: 'storage', label: 'Consola practica', value: 'Objetos a mano' },
        { icon: 'switch', label: 'Comandos directos', value: 'Uso intuitivo' },
      ],
      hotspots: [
        {
          label: 'Consola',
          title: 'Espacios de uso diario',
          detail: 'La disposicion de consola y apoyabrazos refuerza una experiencia simple y urbana.',
          icon: 'storage',
          x: 53,
          y: 48,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.01,
        endScale: 1.08,
      },
    },
    {
      id: 'cockpit-angle',
      imagen: '/byd-dolphin-neo/4.png',
      titulo: 'Puesto de conduccion digital.',
      subtitulo: 'Volante multifuncion, cluster digital y pantalla central a una altura muy natural.',
      accent: '#d8ff40',
      features: [
        { icon: 'screen', label: '10.1"', value: 'Pantalla giratoria' },
        { icon: 'wheel', label: 'Multifuncion', value: 'Volante con accesos directos' },
      ],
      hotspots: [
        {
          label: 'Pantalla',
          title: 'Multimedia central',
          detail: 'BYD resalta la altura de pantalla para mantener mejor la atencion al manejar.',
          icon: 'screen',
          x: 61,
          y: 31,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.1,
      },
    },
    {
      id: 'screen-closeup',
      imagen: '/byd-dolphin-neo/5.png',
      titulo: 'Infoentretenimiento con foco total.',
      subtitulo: 'Apple CarPlay, Android Auto y control por voz en una interfaz que se vuelve protagonista.',
      accent: '#61d7ff',
      features: [
        { icon: 'carplay', label: 'CarPlay', value: 'Compatible' },
        { icon: 'android', label: 'Android Auto', value: 'Compatible' },
        { icon: 'voice', label: 'Hi, BYD', value: 'Control por voz' },
      ],
      hotspots: [
        {
          label: '10.1"',
          title: 'Pantalla tactil giratoria',
          detail: 'La web oficial de BYD Argentina menciona una pantalla tactil giratoria de 10,1 pulgadas.',
          icon: 'screen',
          x: 76,
          y: 24,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.04,
        endScale: 1.13,
        overlay:
          'linear-gradient(135deg, rgba(49,146,255,0.16) 0%, rgba(49,146,255,0.04) 40%, rgba(0,0,0,0.34) 100%)',
      },
    },
    {
      id: 'wide-cabin',
      imagen: '/byd-dolphin-neo/6.png',
      titulo: 'Cabina despejada para cuatro.',
      subtitulo: 'La vista frontal completa ayuda a leer espacio, consola central y simetria del interior.',
      accent: '#cbff3d',
      features: [
        { icon: 'comfort', label: 'Cabina amplia', value: 'Mayor espacio interior' },
        { icon: 'safety', label: '6 airbags', value: 'Proteccion total de serie' },
      ],
      hotspots: [
        {
          label: 'Seguridad',
          title: 'Proteccion total de serie',
          detail: 'La pagina oficial destaca seis airbags: frontales, laterales delanteros y de cortina.',
          icon: 'safety',
          x: 16,
          y: 40,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1,
        endScale: 1.06,
      },
    },
    {
      id: 'seat-mood',
      imagen: '/byd-dolphin-neo/9.png',
      titulo: 'Texturas y postura de uso diario.',
      subtitulo: 'Una escena mas cercana para transmitir confort, apoyo lateral y calidad percibida.',
      accent: '#5cd6ff',
      features: [
        { icon: 'seat', label: 'Asientos deportivos', value: 'Diseno integrado' },
        { icon: 'comfort', label: 'Uso diario', value: 'Cabina practica' },
      ],
      hotspots: [],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.1,
      },
    },
    {
      id: 'final-cabin',
      imagen: '/byd-dolphin-neo/10.png',
      titulo: 'Tu proximo test drive arranca aca.',
      subtitulo: 'Todo listo para cerrar la experiencia y pasar de la pantalla al manejo real en Tandil.',
      accent: '#d8ff43',
      features: [
        { icon: 'test', label: 'Test drive', value: 'Agendalo por WhatsApp' },
        { icon: 'platform', label: 'e-Platform 3.0', value: 'Base del modelo' },
      ],
      hotspots: [
        {
          label: 'Agenda',
          title: 'Coordina tu prueba',
          detail: 'El cierre de la experiencia apunta a convertir interes en contacto directo con la concesionaria.',
          icon: 'test',
          x: 55,
          y: 40,
        },
      ],
      visual: {
        objectPosition: 'center center',
        startScale: 1.03,
        endScale: 1.11,
        overlay:
          'linear-gradient(180deg, rgba(4,8,18,0.12) 0%, rgba(0,0,0,0.46) 100%)',
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
