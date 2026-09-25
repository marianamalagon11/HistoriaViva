import { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Inicio from "./pages/Inicio.jsx";
import Grado from "./pages/Grado.jsx";
import Tema from "./pages/Tema.jsx";

function Protegido() {
  const { usuario } = useAuth();
  if (!usuario) return <Navigate to="/login" replace />;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const { usuario } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/login" element={usuario ? <Navigate to="/" replace /> : <Login />} />
      <Route element={<Protegido />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/grado/:gradoId" element={<Grado />} />
        <Route path="/tema/:gradoId/:temaId" element={<Tema />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
