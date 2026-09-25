import { AUTOR } from "../data.js";

export default function Footer() {
  return (
    <footer className="pie">
      <div className="ornamento" aria-hidden="true"><span></span>◆<span></span></div>
      <p>Un proyecto de <b>{AUTOR}</b> · Historia Viva</p>
      <p className="lema">“Conocer nuestro pasado nos ayuda a construir un mejor futuro.”</p>
    </footer>
  );
}
