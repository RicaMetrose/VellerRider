function Projects({ projects }) {
    return (
      <section>
        <div className="projects-section-title">Coding Stuff</div>
        <div className="projects">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-title">{project.title}</div>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Check it out →
              </a>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Projects