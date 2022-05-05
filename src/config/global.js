export default {
  global: {
    componenteFormativo:
      'Diseño y documentación de propuesta para servicios en la nube',
    descripcionCurso:
      'Este componente proporciona la información necesaria para conformar una propuesta de implementación de servicios en la nube, de acuerdo a los requerimientos de los sistemas de información de las organizaciones y las buenas prácticas parta garantizar la disponibilidad, confidencialidad e integridad de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias de migración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos y características',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Contratación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de contrato',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Proveedores de servicio en la nube',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Proyectos de TI',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto:
        'Ministerio de Comercio, Industria y Turismo. (2013). Decreto Número 1317 del 27 de junio de 2013.',
      tipo: 'PDF',
      descarga: '/downloads/articles-9011_documento.pdf',
    },
    {
      texto:
        'Agencia española de protección de datos. (2013). Guía para clientes que contraten servicios de Computing.',
      tipo: 'PDF',
      descarga:
        '/downloads/GuíaParaClientesQueContratenServiciosDeCloudComputing-AGPD.pdf',
    },
    {
      texto:
        'República de Colombia, Ministerio de tecnologías de la información y las comunicaciones.  (2012). Ley 1581 de 2012.',
      tipo: 'PDF',
      descarga: '/downloads/Ley_1581_de_2012.pdf',
    },
    {
      texto:
        'Página relacionada con los proveedores de servicios en la nube. Accedida el 27 de diciembre de 2021 Public Cloud Services Comparison, comparecloud.in',
      tipo: 'Página web',
      link: 'https://comparecloud.in/',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación',
      significado:
        'La comunicación consciente consiste en la transmisión y recepción de datos entre dos o más actores con el fin de transmitir o recibir mensajes u opiniones distintas.',
    },
    {
      termino: 'Contratación',
      significado:
        'Según la RAE (Real Academia Española) define contratación como “Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas”.',
    },
    {
      termino: '<em>Cloud computing</em>',
      significado:
        'La computación en la nube, conocida también como servicios en la nube, consiste en el uso de una red de servidores remotos alojados en Internet para almacenar, administrar y procesar datos e información, en lugar de un servidor local o una computadora personal.',
    },
    {
      termino: 'Migración',
      significado:
        'En tecnología, consiste en el desplazamiento del software, aplicaciones o sistemas de información de una infraestructura tecnológica a otra, por ejemplo, la migración de una aplicación de un servidor local a un servidor en la nube.',
    },
    {
      termino: 'Proveedor',
      significado: 'Sujeto o entidad que suministra un producto o servicios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Allcode.com (2021). <em>10 Top Cloud Providers in 2021.</em>',
      link: 'https://allcode.com/cloud-providers/',
    },
    {
      referencia:
        'Claranet.es (2021). 6 enfoques para afrontar la migración a la nube.',
      link:
        'https://www.claranet.es/blog/6-enfoques-para-afrontar-la-migracion-a-la-nube',
    },
    {
      referencia: 'RAE - Real Academia Española (2021). Contratar.',
      link: 'https://dle.rae.es/contratar',
    },
    {
      referencia: 'SANTOS GARCÍA (2012).  Comunicación oral y escrita.',
      link:
        'http://190.57.147.202:90/jspui/bitstream/123456789/650/1/Comunicacion_oral_y_escrita.pdf',
    },
    {
      referencia:
        'SECRETARIA GENERAL DE LA ORGANIZACIÓN DE LOS ESTADOS AMERICANOS (1992). Honduras - Proyecto de Manejo de los Recursos Naturales Renovables de la Cuenca del Embalse el Cajón - Estudio de Factibilidad. Costos y financiamiento.',
      link: 'https://www.oas.org/dsd/publications/Unit/oea15s/ch09.htm',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Pablo Cesar Pardo Ortiz',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'José Luis Bastidas Pérez',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Joaquín Patiño Cerón',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Peter Emerson Pinchao Solís',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
