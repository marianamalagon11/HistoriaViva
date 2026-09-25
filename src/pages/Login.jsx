import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTOR } from "../data.js";
import { useAuth } from "../context/AuthContext.jsx";
import Brujula from "../components/Brujula.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState(false);

  const enviar = (e) => {
    e.preventDefault();
    if (login(usuario, clave)) navigate("/");
    else setError(true);
  };

  return (
    <main className="login">
      <section className="pergamino login-card">
        <Brujula />
        <p className="sobre">Bienvenido a</p>
        <h1 className="titulo">Historia <span>Viva</span></h1>
        <p className="sub">Conocer nuestro pasado<br />nos ayuda a construir un mejor futuro</p>
        <form onSubmit={enviar} autoComplete="off">
          <label>Usuario
            <input value={usuario} onChange={(e) => setUsuario(e.target.value)} required autoFocus placeholder="Tu usuario" />
          </label>
          <label>Contraseña
            <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} required placeholder="Tu contraseña" />
          </label>
          {error && <p className="error" role="alert">Usuario o contraseña incorrectos</p>}
          <button className="btn grande" type="submit">Entrar a viajar en el tiempo</button>
        </form>
        <p className="autor">Por {AUTOR}</p>
      </section>
    </main>
  );
}
