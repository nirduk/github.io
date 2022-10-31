import './projectCard.css'

const ProjectCard = ({ img, link, projectName }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noreferrer" >
        <p>{projectName}</p>
        <div className="card-image">
          <img src={img} alt={`${projectName} cover`} />
        </div>
      </a>
    </div>
  )
}

export default ProjectCard