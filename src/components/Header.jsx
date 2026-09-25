import { Link, NavLink } from "react-router-dom";
import { GRADOS } from "../data.js";
import { useAuth } from "../context/AuthContext.jsx";
import Brujula from "./Brujula.jsx";

export default function Header() {
  const { usuario, logout } = useAuth();
  return (
    <header className="top">
      <Link className="marca" to="/">
        <Brujula />
        <span>Historia <b>Viva</b></span>
      </Link>
      <nav>
        {GRADOS.map((g) => (
          <NavLink key={g.id} to={`/grado/${g.id}`} className={({ isActive }) => (isActive ? "on" : "")}>
            {g.corto}
          </NavLink>
        ))}
      </nav>
      <div className="sesion">
        <span>Hola, <b>{usuario}</b></span>
        <button className="btn chico" onClick={logout}>Salir</button>
      </div>
    </header>
  );
}
