import { Link } from "react-router-dom";
import "../styles/components/landing.scss";

function LandingPage() {
  return (
    <main className="landing">
      <h1 className="landing__title">Bienvenida a tu Gestor de Proyectos</h1>
      <p className="landing__subtitle">
        Documenta, organiza y comparte tu stack con el mundo.
      </p>
      <Link to="/app" className="landing__button">
        Comenzar
      </Link>
    </main>
  );
}

export default LandingPage;
