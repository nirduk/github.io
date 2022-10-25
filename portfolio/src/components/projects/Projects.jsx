import ProjectCard from '../project-card/ProjectCard'
import './projects.css'

const Projects = () => {
  return (
    <div className="projects-container">
      <h3>and these are some of my projects</h3>
      <div className="projects">
        <i className="fa-solid fa-chevron-left"></i>
        <ProjectCard />
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default Projects