import { Link, Navigate, useParams } from "react-router-dom";
import { GRADOS } from "../data.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Tema() {
  const { gradoId, temaId } = useParams();
  const { vistos, marcarVisto } = useAuth();
  const g = GRADOS.find((x) => x.id === gradoId);
  const t = g?.temas.find((x) => x.id === temaId);
  if (!g) return <Navigate to="/" replace />;
  if (!t || !(t.video || t.youtube)) return <Navigate to={`/grado/${g.id}`} replace />;

  const idx = g.temas.indexOf(t);
  const disponibles = g.temas.filter((x) => x.video || x.youtube);
  const visto = vistos[`${g.id}/${t.id}`];
  const pos = disponibles.indexOf(t);
  const prev = disponibles[pos - 1];
  const next = disponibles[pos + 1];

  return (
    <main className="reproductor">
      <Link className="volver" to={`/grado/${g.id}`}>← {g.nombre}</Link>
      <div className="cine">
        {t.youtube ? (
          <iframe
            key={t.id}
            className="yt"
            src={`https://www.youtube-nocookie.com/embed/${t.youtube}?rel=0&modestbranding=1`}
            title={t.titulo}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <video
            key={t.id}
            src={t.video}
            poster={t.poster}
            controls
            playsInline
            preload="metadata"
            onEnded={() => marcarVisto(g.id, t.id)}
          >
            Tu navegador no puede reproducir este video.
          </video>
        )}
      </div>
      {t.youtube && (
        <button className="btn chico marcar" disabled={visto} onClick={() => marcarVisto(g.id, t.id)}>
          {visto ? "✓ Visto" : "Marcar como visto"}
        </button>
      )}
      <div className="pergamino info-video">
        <p className="sobre">Tema {idx + 1} · {g.nombre}</p>
        <h1>{t.icono} {t.titulo}</h1>
        <p>{t.descripcion}</p>
      </div>
      <div className="nav-video">
        {prev ? <Link className="btn" to={`/tema/${g.id}/${prev.id}`}>← {prev.titulo}</Link> : <span />}
        {next ? <Link className="btn" to={`/tema/${g.id}/${next.id}`}>{next.titulo} →</Link> : <span />}
      </div>
    </main>
  );
}
