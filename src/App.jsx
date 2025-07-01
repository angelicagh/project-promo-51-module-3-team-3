import './styles/App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router'

function App() {
  
  return (
    <>

    

    <Routes>
      <Route >
        
      </Route>
    </Routes>
            <h1>Escribe aquí tu HTML</h1>
            <ol>Pasos:
              <li>Crear un componente: carpeta src-carpeta components-archivo Header.jsx</li>
              <li>Crear una hoja de estilos para ese componente: carpeta styles-carpeta components-archivo _header.scss</li>
              <li>Importar la hoja de estilos en el componente: dentro de Header.jsx se escribe: import '../styles/components/_header.scss'</li>
              <li>Importar el componente en el componente principal App.jsx: dentro de App.jsx se escribe: import Header from './components/Header'</li>
            </ol>
           
            
      <Header></Header>
      <Footer></Footer>

      {/* <div class="container">

    <header class="header">
      <a class="header__brand" href="./" title="Haz click para volver a la página inicial">
        <img class="header__companyLogo" src="./images/laptop-code-solid.svg" alt="Logo proyectos molones">
        <h1 class="header__title">Proyectos molones</h1>
      </a>
      <img class="logoSponsor" src="./images/adalab.png" alt="Logo Adalab">

      <section class="hero">
        <h2 class="title">Proyectos molones</h2>
        <p class="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a class="button--link" href="./">Ver proyectos</a>
      </section>

    </header>
    
    <main class="main">
      

      <section class="preview">
        <div class="projectImage"></div>
        <article class="card">
          <h2 class="card__projectTitle"><span class="card__projectTitle--text">Personal project card</span></h2>

          <div class="card__author">
            <div class="card__authorPhoto"></div>
            <p class="card__job">
              Full stack Developer
            </p>
            <h3 class="card__name">Emmelie Bjôrklund</h3>
          </div>
      
          <div class="card__project">            
            <h3 class="card__name">Elegant Workspace</h3>
            <p class="card__slogan">Diseños Exclusivos</p>
            <h3 class="card__descriptionTitle">Product description</h3>
            <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione</p>

            <div class="card__technicalInfo">
              <p class="card__technologies">React JS - HTML - CSS</p>
          
              <a class="icon icon__www" href="#" title="Haz click para ver el proyecto online">
                Web link
              </a>
              <a class="icon icon__github" href="#" title="Haz click para ver el código del proyecto">
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>

      
      <form class="addForm">
        <h2 class="title">Información</h2>
        <fieldset class="addForm__group">
          <legend class="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input class="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto">
          <input class="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan">
          <div class="addForm__2col">
            <input class="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio">
            <input class="addForm__input" type="url" name="demo" id="demo" placeholder="Demo">
          </div>         
          <input class="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías">
          <textarea class="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5"></textarea>
        </fieldset>
    
        <fieldset class="addForm__group">
          <legend class="addForm__title">Cuéntanos sobre la autora</legend>
          <input class="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre">
          <input class="addForm__input" type="text" name="job" id="job" placeholder="Trabajo">
        </fieldset>
    
        <fieldset class="addForm__group--upload">
          <label for="image" class="button">Subir foto del proyecto</label>
          <input class="addForm__hidden" type="file" name="image" id="image">
          <label for="photo" class="button">Subir foto de la autora</label>
          <input class="addForm__hidden" type="file" name="photo" id="photo">
          <button class="button--large">Guardar proyecto</button>
        </fieldset>
        
      </form>
    </main>

    <footer class="footer">
      <img class="logoSponsor" src="./images/adalab.png" alt="Logo Adalab">
    </footer> */}
    </>
  )
}

export default App
