// Contenido de Historia Viva.
// Para agregar un video: pon su ruta en `video` (ej. "/videos/mi-video.mp4").
// Para un video de YouTube (se reproduce dentro de la página): `youtube: "ID"`,
// donde ID es lo que va después de youtu.be/ (o de ?v=). Sirve para videos pesados.
// Si el tema no tiene `video` ni `youtube`, aparece como "Próximamente".
// Opcional: `poster` (imagen de portada del video).

export const AUTOR = "Tomas Chavarro";

// Usuarios fijos (solo frontend: NO es seguridad real, cualquiera puede verlos en el código).
export const USUARIOS = [
  { usuario: "Tomas", clave: "Mono" },
  { usuario: "Mari", clave: "Mono" },
];

export const GRADOS = [
  {
    id: "primero",
    nombre: "Primer grado",
    corto: "1°",
    banner: "/fotos/primero.png",
    descripcion: "Nuestra familia, nuestro entorno y los símbolos que nos representan.",
    temas: [
      {
        id: "familia-y-cultura",
        titulo: "Familia y Cultura",
        descripcion: "La familia como primera cultura: tradiciones, valores y costumbres que nos forman.",
        icono: "👨‍👩‍👧‍👦",
        video: "/videos/FamiliaYCulturaPRIMERO.mp4",
      },
      {
        id: "mi-entorno-cercano",
        titulo: "Mi Entorno Cercano",
        descripcion: "Un recorrido por el lugar donde vivimos: casa, barrio y escuela.",
        icono: "🏡",
        video: "/videos/MiEntornoCercanoPRIMERO.mp4",
      },
      {
        id: "normas-de-convivencia",
        titulo: "Normas de Convivencia",
        descripcion: "Las reglas que nos ayudan a vivir en armonía con los demás.",
        icono: "🤝",
        video: "/videos/NormasDeConvivenciaPRIMERO.mp4",
      },
      {
        id: "simbolos-patrios",
        titulo: "Símbolos Patrios",
        descripcion: "La bandera, el escudo y los símbolos que representan a nuestra nación.",
        icono: "🇨🇴",
        video: "/videos/SimboloPatriosPRIMERO.mp4",
      },
      {
        id: "himno-nacional",
        titulo: "Himno Nacional",
        descripcion: "La historia y el significado del himno que nos une como colombianos.",
        icono: "🎶",
        video: "/videos/himnoNacional.mp4",
      },
    ],
  },
  {
    id: "segundo",
    nombre: "Segundo grado",
    corto: "2°",
    banner: "/fotos/segundo.png",
    descripcion: "Nuestra comunidad, sus autoridades y nuestros derechos y deberes.",
    temas: [
      {
        id: "comunidad-educativa",
        titulo: "Comunidad Educativa",
        descripcion: "Quiénes forman parte de nuestra escuela y cómo trabajamos juntos.",
        icono: "🏫",
        video: "/videos/comunidadEducativaSEGUNDO.mp4",
      },
      {
        id: "autoridades-locales",
        titulo: "Autoridades Locales",
        descripcion: "Las personas e instituciones que organizan y cuidan nuestra comunidad.",
        icono: "🏛️",
        video: "/videos/autoridadesLocalesSEGUNDO.mp4",
      },
      {
        id: "derechos-y-deberes",
        titulo: "Derechos y Deberes",
        descripcion: "Lo que todos tenemos derecho a recibir y la responsabilidad de cumplir.",
        icono: "⚖️",
        video: "/videos/derechosYDeberesSEGUNDO.mp4",
      },
      {
        id: "himno-nacional",
        titulo: "Himno Nacional",
        descripcion: "La historia y el significado del himno que nos une como colombianos.",
        icono: "🎶",
        video: "/videos/himnoNacional.mp4",
      },
    ],
  },
  {
    id: "tercero",
    nombre: "Tercer grado",
    corto: "3°",
    banner: "/fotos/tercero.png",
    descripcion: "Descubre los paisajes y recursos de nuestra Colombia.",
    temas: [
      {
        id: "municipio-y-recursos-naturales",
        titulo: "El Municipio y sus Recursos Naturales",
        descripcion: "Conoce el municipio como territorio y las riquezas naturales que nos ofrece.",
        icono: "🧭",
        video: "/videos/municipioRecursosNaTTerceros.mp4",
      },
      {
        id: "culturas-madre",
        titulo: "Culturas Madre",
        descripcion: "Las grandes civilizaciones originarias que dieron forma a nuestra identidad.",
        icono: "🌿",
        video: "/videos/culturaMadreTERCERO.mp4",
      },
      {
        id: "pueblos-originarios-de-america-1",
        titulo: "Pueblos Originarios de América (Parte 1)",
        descripcion: "Primer acercamiento a los pueblos que habitaron nuestro continente.",
        icono: "🪶",
        video: "/videos/puebloAmericaPARTE1TERCERO.mp4",
      },
      {
        id: "pueblos-originarios-de-america-2",
        titulo: "Pueblos Originarios de América (Parte 2)",
        descripcion: "Continuamos el recorrido por las culturas originarias de América.",
        icono: "🪶",
        video: "/videos/puebloAmericaPARTE2TERCERO.mp4",
      },
      {
        id: "division-politica-de-colombia",
        titulo: "División Política de Colombia",
        descripcion: "Departamentos, municipios y la organización de nuestro territorio.",
        icono: "🗺️",
        video: "/videos/divisionPoliticaTERCERO.mp4",
      },
      {
        id: "gobierno-escolar",
        titulo: "Gobierno Escolar",
        descripcion: "Cómo se organiza y participa la comunidad dentro de la escuela.",
        icono: "🏫",
        video: "/videos/gobiernoEscolarTERCERO.mp4",
      },
    ],
  },
  {
    id: "cuarto",
    nombre: "Cuarto grado",
    corto: "4°",
    banner: "/fotos/cuarto.png",
    descripcion: "Viaja por la geografía, las regiones y la economía de Colombia.",
    temas: [
      {
        id: "geografia-fisica",
        titulo: "Geografía Física",
        descripcion: "Relieve, ríos y accidentes geográficos que forman nuestro territorio.",
        icono: "⛰️",
        video: "/videos/geografiaFisicaCUARTO.mp4",
      },
      {
        id: "regiones-naturales",
        titulo: "Regiones Naturales",
        descripcion: "Un recorrido por las grandes regiones naturales de nuestro país.",
        icono: "🌄",
        video: "/videos/regionesNatCUARTO.mp4",
      },
      {
        id: "grupos-etnicos",
        titulo: "Grupos Étnicos",
        descripcion: "La diversidad de pueblos y culturas que conforman a Colombia.",
        icono: "🧑🏽‍🤝‍🧑🏿",
        video: "/videos/gruposEtnicosCUARTO.mp4",
      },
      {
        id: "sectores-economicos",
        titulo: "Sectores Económicos",
        descripcion: "Cómo trabajamos y producimos: sector primario, secundario y terciario.",
        icono: "🏭",
        video: "/videos/sectoresEconomicosCUARTO.mp4",
      },
    ],
  },
  {
    id: "quinto",
    nombre: "Quinto grado",
    corto: "5°",
    banner: "/fotos/quinto.png",
    descripcion: "Los grandes hechos que forjaron nuestra nación.",
    temas: [
      {
        id: "descubrimiento",
        titulo: "Descubrimiento",
        descripcion: "La llegada de los europeos a nuestro continente.",
        icono: "🧭",
        video: "/videos/Descubrimiento.mp4",
      },
      {
        id: "conquista",
        titulo: "Conquista",
        descripcion: "El proceso de conquista de los territorios americanos.",
        icono: "⚔️",
        video: "/videos/Conquista.mp4",
      },
      {
        id: "colonia",
        titulo: "Colonia",
        descripcion: "La organización y la vida en el Nuevo Reino de Granada durante la Colonia.",
        icono: "🏰",
        video: "/videos/Colonia.mp4",
      },
      {
        id: "proceres-de-la-independencia",
        titulo: "Próceres de la Independencia",
        descripcion: "Los héroes que lucharon por la libertad de Colombia.",
        icono: "🏳️",
        video: "/videos/proceresIndependencia.mp4",
      },
    ],
  },
];

