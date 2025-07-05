import '../styles/components/header.scss'

function Header() {
  
  return (
    <>
      
   
<header className="header">
      {/* <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
        <img className="header__companyLogo" src="./images/laptop-code-solid.svg" alt="Logo proyectos molones">
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <img className="logoSponsor" src="./images/adalab.png" alt="Logo Adalab"> */}

      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a className="button--link" href="./">Ver proyectos</a>
      </section>
      
    </header> 
    </>
  )
}

export default Header
