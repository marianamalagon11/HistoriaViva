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
    id: "tercero",
    nombre: "Tercer grado",
    corto: "3°",
    banner: "/fotos/tercero.png",
    descripcion: "Descubre los paisajes y regiones de nuestra Colombia.",
    temas: [
      {
        id: "regiones-naturales",
        titulo: "Regiones naturales de Colombia",
        descripcion: "Un recorrido por las grandes regiones naturales de nuestro país: sus paisajes, climas y tesoros.",
        icono: "🧭",
        video: "/videos/video1Tomas.mp4",
      },
      {
        id: "amazonia",
        titulo: "La Amazonía",
        descripcion: "Selva, ríos gigantes y pueblos ancestrales: viaja al pulmón del mundo.",
        icono: "🌿",
        video: "/videos/video2Tomas.mp4",
      },
      {
        id: "region-pacifica",
        titulo: "La Región Pacífica",
        descripcion: "Lluvias, mar y cultura: conoce la costa del océano Pacífico colombiano.",
        icono: "🌊",
        video: "/videos/video3Tomas.mp4",
      },
    ],
  },
  {
    id: "cuarto",
    nombre: "Cuarto grado",
    corto: "4°",
    banner: "/fotos/cuarto.png",
    descripcion: "Viaja por las regiones y las primeras culturas de Colombia.",
    temas: [
      { id: "prueba-youtube", titulo: "Video de prueba (YouTube)", descripcion: "Video alojado en YouTube pero reproducido aquí mismo, sin salir de la página.", icono: "🎬", youtube: "ae8Owzvak58" },
      { id: "region-andina", titulo: "La Región Andina", descripcion: "Montañas, ciudades y café en el corazón del país.", icono: "⛰️", video: null },
      { id: "region-caribe", titulo: "La Región Caribe", descripcion: "Playas, música y la historia de las ciudades amuralladas.", icono: "🏝️", video: null },
      { id: "orinoquia", titulo: "La Orinoquía", descripcion: "Llanuras infinitas, ríos y la vida llanera.", icono: "🐎", video: null },
    ],
  },
  {
    id: "quinto",
    nombre: "Quinto grado",
    corto: "5°",
    banner: "/fotos/quinto.png",
    descripcion: "Los grandes hechos que forjaron nuestra nación.",
    temas: [
      { id: "pueblos-indigenas", titulo: "Pueblos indígenas antes de la Conquista", descripcion: "Muiscas, Tayronas y otras culturas que habitaron nuestro territorio.", icono: "🪶", video: null },
      { id: "independencia", titulo: "La Independencia de Colombia", descripcion: "El 20 de julio y la lucha por la libertad.", icono: "🏳️", video: null },
      { id: "batalla-boyaca", titulo: "La Batalla de Boyacá", descripcion: "El combate que selló la libertad de la Nueva Granada.", icono: "⚔️", video: null },
    ],
  },
];

