import { Link } from "react-router-dom";
import { GRADOS } from "../data.js";
import { useAuth } from "../context/AuthContext.jsx";
import Brujula from "../components/Brujula.jsx";

export default function Inicio() {
  const { vistos } = useAuth();
  return (
    <main>
      <section className="hero">
        <div>
          <p className="sobre">Aprende · Explora · Viaja en el tiempo</p>
          <h1 className="titulo">Historia <span>Viva</span></h1>
          <p className="lead">Revive el pasado de Colombia con videos creados con inteligencia artificial. Elige tu grado y empieza la aventura.</p>
        </div>
        <div className="hero-brujula"><Brujula /></div>
      </section>

      <h2 className="seccion">¿En qué grado estás?</h2>
      <div className="grados">
        {GRADOS.map((g) => {
          const hechos = g.temas.filter((t) => vistos[`${g.id}/${t.id}`]).length;
          return (
            <Link key={g.id} className="grado-card" to={`/grado/${g.id}`}>
              <img src={g.banner} alt={g.nombre} loading="lazy" />
              <div className="grado-info">
                <p>{g.descripcion}</p>
                <span className="chip">{hechos}/{g.temas.length} temas vistos</span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
