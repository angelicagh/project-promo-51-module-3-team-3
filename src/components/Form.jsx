import PropTypes from "prop-types"; //por que salen tres puntitos?
import GetAvatar from "./GetAvatar";

// paso de App a Form la variable de estado y la funcion que la actualiza

function Form({ pprojectData, psetProjectData /* pavatar, pupdateAvatar */ }) {
  /*   const [avatar, setAvatar] = useState("")
  const updateAvatar = (avatar) => {
    console.log("nuevo avatar", avatar)
    setAvatar(avatar);
  } */

  /* con el mismo evento recojo todos los cambios de los inputs y actualizo la variable de estado
    1. const id: guardo el id sobre el que se hacen cambios
    2. const value : guardo los datos del valor que escribe el usuario
    3. const newProjectData: creo una nueva constante para guardar los datos nuevos que va introduciendo el usuario (en un objeto)
    4. uso el spread operator, que quiere decir "deja lo que tienes en projectData y añade lo nuevo" (lo nuevo son los datos que va introduciendo el usuario)
    5. actualiza la variable de estado original con los datos nuevos */
  const handleChange = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    const newProjectData = {
      ...pprojectData,
      [id]: value, //spread operator
    };
    psetProjectData(newProjectData);
  };

  return (
    <>
      {/* todos los campos del formulario van asociados al mismo evento */}
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">
            Cuéntanos sobre el proyecto
          </legend>
          <input
            onChange={handleChange}
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
            required
          />
          <input
            onChange={handleChange}
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            required
          />
          <div className="addForm__2col">
            <input
              onChange={handleChange}
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
              required
            />
            <input
              onChange={handleChange}
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
              required
            />
          </div>
          <input
            onChange={handleChange}
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
            required
          />
          <textarea
            onChange={handleChange}
            className="addForm__input"
            type="text"
            name="description"
            id="description"
            placeholder="Descripción"
            rows="5"
            required
          ></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input
            onChange={handleChange}
            className="addForm__input"
            type="text"
            name="author"
            id="author"
            placeholder="Nombre"
            required
          />
          <input
            onChange={handleChange}
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
            required
          />
        </fieldset>

        {/*  BOTONES */}
        <fieldset className="addForm__group--upload">
          {/* <label htmlFor="image" className="button">Subir foto del proyecto</label>
          <input className="addForm__hidden" type="file" name="image" id="image"/> */}

          <GetAvatar
            avatar={pprojectData.image}
            updateAvatar={(image) =>
              psetProjectData({ ...pprojectData, image })
            }
            text="Subir foto del proyecto"
          />
          <GetAvatar
            avatar={pprojectData.photo}
            updateAvatar={(photo) =>
              psetProjectData({ ...pprojectData, photo })
            }
            text="Subir foto de la autora"
          />

          {/* <label htmlFor="photo" className="button">Subir foto de la autora</label>
          <input className="addForm__hidden" type="file" name="photo" id="photo"/>
          <button className="button--large">Crear proyecto</button> */}
        </fieldset>
      </form>
    </>
  );
}

//esto no termino de entenderlo
//prop-types: validar las props que recibe un componente
//no funciona e investigando me dice copilot que la vesion 19 de react no devuelve los errores de proptypes, asi que no sirven de nada vaya, la solucion que me da es volver a la version 18
Form.propTypes = {
  pprojectData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  }).isRequired,
  psetProjectData: PropTypes.func.isRequired,
};

export default Form;
