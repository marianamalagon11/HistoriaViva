import { Link, Navigate, useParams } from "react-router-dom";
import { GRADOS } from "../data.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Grado() {
  const { gradoId } = useParams();
  const { vistos } = useAuth();
  const g = GRADOS.find((x) => x.id === gradoId);
  if (!g) return <Navigate to="/" replace />;

  return (
    <main>
      <Link className="volver" to="/">← Todos los grados</Link>
      <img className="banner" src={g.banner} alt={g.nombre} />
      <p className="lead centro">{g.descripcion}</p>

      <h2 className="seccion">Temas del curso</h2>
      <div className="temas">
        {g.temas.map((t, i) => {
          const listo = !!(t.video || t.youtube);
          const visto = vistos[`${g.id}/${t.id}`];
          const contenido = (
            <>
              <span className="num">{i + 1}</span>
              <span className="icono">{t.icono}</span>
              <div className="tema-cuerpo">
                <h3>{t.titulo}</h3>
                <p>{t.descripcion}</p>
              </div>
              <span className={`estado ${visto ? "visto" : ""}`}>
                {listo ? (visto ? "✓ Visto" : "▶ Ver video") : "Próximamente"}
              </span>
            </>
          );
          return listo ? (
            <Link key={t.id} className="tema" to={`/tema/${g.id}/${t.id}`}>{contenido}</Link>
          ) : (
            <div key={t.id} className="tema pronto">{contenido}</div>
          );
        })}
      </div>
    </main>
  );
}
