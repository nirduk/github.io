import ProjectCard from '../project-card/ProjectCard'
import './projects.css'
import { projectsData } from '../../projectsData'
import { useParallax } from 'react-scroll-parallax';


const Projects = () => {
  const parallaxText = useParallax({
    translateY: [-100, 0],
    opacity: [0, 1, 'easeInOut']
  });

  return (
    <div className="projects-container">
      <h3 ref={parallaxText.ref}>and these are some of my projects</h3>
      <div className="projects">
        <i className="fa-solid fa-chevron-left"></i>
        {projectsData.map(item => (
          <ProjectCard
            className="card"
            img={item.img}
            link={item.link}
            projectName={item.projectName}
            key={item.id}
          />
        ))}
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default Projects