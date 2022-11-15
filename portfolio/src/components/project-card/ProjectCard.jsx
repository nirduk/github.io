import './projectCard.css'

const ProjectCard = ({ img, link, projectName, count }) => {
  const projectPlace = ['first', 'second', 'third', 'fourth'];

  return (
    <div className={`card ${projectPlace[count]}`}>
      <a href={link} target="_blank" rel="noreferrer">
        <p>{projectName}</p>
        <div className="card-image">
          <img src={img} alt={`${projectName} cover`} />
        </div>
      </a>
    </div>
  )
}

export default ProjectCard