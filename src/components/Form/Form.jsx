
// paso de App a Form la variable de estado y la funcion que la actualiza

function Form({pprojectData, psetprojectData}) {

  /* con el mismo evento recojo todos los cambios de os inputs y actualizo la variable de estado
    1. const id: guardo el id sobre el que se hacen cambios
    2. const value : guardo los datos del valor que escribe el usuario
    3. const newProjectData: creo una nueva constante para guardar los datos nuevos que va introduciendo el usuario (en un objeto)
    4. uso el spread operator, que quiere decir "deja lo que tienes en projectData y añade lo nuevo" (lo nuevo son los datos que va introduciendo el usuario)
    5. actualiza la variable de estado original con los datos nuevos */

  const handleChange = (ev) => {
    const id = ev.target.id; 
    const value = ev.target.value; 
    const newProjectData = {
      ...pprojectData, [id]: value //spread operator
    }
    psetprojectData(newProjectData) 
  }



  return (
    <>
    {/* todos los campos del formulario van asociados al mismo evento */}
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input onChange={handleChange} className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto"/>
          <input onChange={handleChange} className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan"/>
          <div className="addForm__2col">
            <input onChange={handleChange} className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio"/>
            <input onChange={handleChange} className="addForm__input" type="url" name="demo" id="demo" placeholder="demo"/>
          </div>         
          <input onChange={handleChange} className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías"/>
          <textarea onChange={handleChange} className="addForm__input" type="text" name="description" id="description" placeholder="Descripción" rows="5"></textarea>
        </fieldset>
    
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input onChange={handleChange} className="addForm__input" type="text" name="author" id="author" placeholder="Nombre"/>
          <input onChange={handleChange} className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"/>
        </fieldset>
    
        <fieldset className="addForm__group--upload">
          <label htmlFor="image" className="button">Subir foto del proyecto</label>
          <input className="addForm__hidden" type="file" name="image" id="image"/>
          <label htmlFor="photo" className="button">Subir foto de la autora</label>
          <input className="addForm__hidden" type="file" name="photo" id="photo"/>
          <button className="button--large">Guardar proyecto</button>
        </fieldset>
        
      </form>
      </>
  )
}

export default Form