function ProjectPreview({ data }) {
  return (
    <>
      <section className="preview">
        <div
          className="projectImage"
          style={{
            backgroundImage: `url("https://reformasbcnhogar.es/wp-content/uploads/1643821043_954_Japandi-style-la-decoracion-de-2022.jpg")`,
          }}
        ></div>
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>

          <div className="card__author">
            <div
              className="card__authorPhoto"
              style={{
                backgroundImage: `url(${data.photo})`,
              }}
            ></div>
            <p className="card__job">{data.job}</p>
            <h3 className="card__name">{data.author}</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">{data.name}</h3>
            <p className="card__slogan">{data.slogan}</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">{data.description}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{data.technologies}</p>

              <a
                className="icon icon__www"
                href={data.demo}
                title="Haz click para ver el proyecto online"
              >
                Web link
              </a>
              <a
                className="icon icon__github"
                href={data.repo}
                title="Haz click para ver el código del proyecto"
              >
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default ProjectPreview;
