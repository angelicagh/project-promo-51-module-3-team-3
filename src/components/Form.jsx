import PropTypes from "prop-types";
import GetAvatar from "./GetAvatar";

function Form({ pprojectData, psetProjectData }) {
  const handleChange = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    const newProjectData = {
      ...pprojectData,
      [id]: value,
    };
    localStorage.setItem("projectData", JSON.stringify(newProjectData));
    psetProjectData(newProjectData);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log("click!");

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: pprojectData.name,
        slogan: pprojectData.slogan,
        repo: pprojectData.repo,
        demo: pprojectData.demo,
        technologies: pprojectData.technologies,
        desc: pprojectData.description,
        author: pprojectData.author,
        job: pprojectData.job,
        photo: "https://placecats.com/neo/300/200",
        image: "https://placecats.com/neo/300/200",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Respuesta completa:", data);
        if (data.success) {
          console.log("URL generada:", data.cardURL);
        } else {
          console.log("Algo ha fallado");
        }
      })
      .catch((error) => console.error("Error en el fetch:", error));
  };

  return (
    <>
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
            value={pprojectData.name}
            required
          />
          <input
            onChange={handleChange}
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            value={pprojectData.slogan}
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
              value={pprojectData.repo}
              required
            />
            <input
              onChange={handleChange}
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
              value={pprojectData.demo}
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
            value={pprojectData.technologies}
            required
          />
          <textarea
            onChange={handleChange}
            className="addForm__input"
            name="description"
            id="description"
            placeholder="Descripción"
            value={pprojectData.description}
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
            value={pprojectData.author}
            required
          />
          <input
            onChange={handleChange}
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
            value={pprojectData.job}
            required
          />
        </fieldset>

        <fieldset className="addForm__group--upload">
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
        </fieldset>

        <button onClick={handleClick}>Crear proyecto</button>
      </form>
    </>
  );
}

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
