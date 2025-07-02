
function Form({pprojectData, psetprojectData}) {

  const handleChange = (ev) => {
    console.log("id :", ev.target.id);
    console.log("type :", ev.target.type);
    console.log(ev.target.value);
    const id = ev.target.id;
    const value = ev.target.value;
    const newProjectData = {
      ...pprojectData, [id]: value
    }
    psetprojectData(newProjectData)
  }



  return (
    <>
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