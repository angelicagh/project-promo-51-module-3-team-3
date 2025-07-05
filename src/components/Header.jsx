import '../styles/components/header.scss'
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <section className="hero">
          <h2 className="title">Gestor de proyectos</h2>
          <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
          <Link to="/" className="header__landing-btn">
            Volver al inicio
          </Link>
        </section>
      </header>
    </>
  )
}

export default Header
