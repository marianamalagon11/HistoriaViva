import { createContext, useContext, useState } from "react";
import { USUARIOS } from "../data.js";

const SESSION_KEY = "hv_usuario";
const VISTOS_KEY = "hv_vistos";

const leer = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const guardar = (k, v) => { try { localStorage.setItem(k, v); } catch { /* sin storage */ } };
const borrar = (k) => { try { localStorage.removeItem(k); } catch { /* sin storage */ } };

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => leer(SESSION_KEY));
  const [vistos, setVistos] = useState(() => {
    try { return JSON.parse(leer(VISTOS_KEY) || "{}"); } catch { return {}; }
  });

  const login = (nombre, clave) => {
    const ok = USUARIOS.find((u) => u.usuario.toLowerCase() === nombre.trim().toLowerCase() && u.clave === clave);
    if (!ok) return false;
    guardar(SESSION_KEY, ok.usuario);
    setUsuario(ok.usuario);
    return true;
  };

  const logout = () => { borrar(SESSION_KEY); setUsuario(null); };

  const marcarVisto = (gradoId, temaId) => {
    setVistos((prev) => {
      const next = { ...prev, [`${gradoId}/${temaId}`]: true };
      guardar(VISTOS_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, vistos, marcarVisto }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
