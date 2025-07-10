function ProjectPreview({ data }) {
  return (
    <>
      <section className="preview">
        <div className="preview__container">
          <div
            className="projectImage"
            style={{
              backgroundImage: `url(${data.image})`,
            }}
          ></div>
          <article className="card">
            <h2 className="card__projectTitle">
              <span className="card__projectTitle--text">
                Tarjeta proyecto personal
              </span>
            </h2>

            <div className="card__author">
              <div
                className="card__authorPhoto"
                style={{
                  backgroundImage: `url(${data.photo})`,
                }}
              ></div>
              <p className="card__job">{data.job || "Full Stack Developer"}</p>
              <h3 className="card__name">{data.author || "Sylvia Johnson"}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{data.name || "Your Next Book"}</h3>
              <p className="card__slogan">
                {data.slogan || "Comparte tu libro favorito"}
              </p>
              <h3 className="card__descriptionTitle">
                Descripción del producto
              </h3>
              <p className="card__description">
                {data.description || "Crea tu tarjeta literaria"}
              </p>

              <div className="card__technicalInfo">
                <p className="card__technologies">
                  {data.technologies || "HTML | CSS | React"}
                </p>

                <a
                  className="icon icon__www"
                  href={data.demo || "#"}
                  title="Haz click para ver el proyecto online"
                >
                  Web link
                </a>
                <a
                  className="icon icon__github"
                  href={data.repo || "#"}
                  title="Haz click para ver el código del proyecto"
                >
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default ProjectPreview;
