import ProjectCard from '../project-card/ProjectCard'
import './projects.css'
import { projectsData } from '../../projectsData'
import { useParallax } from 'react-scroll-parallax';
import { useState } from 'react';


const Projects = () => {
  const parallaxText = useParallax({
    translateY: [-100, 0],
    opacity: [0, 1, 'easeInOut']
  });

  const parallaxProjects = useParallax({
    opacity: [0, 3, 'easeInOut']
  });

  const [count, setCount] = useState(0);

  return (
    <div className="projects-container">
      <h3 ref={parallaxText.ref}>and these are some of my projects</h3>
      <div className="projects" ref={parallaxProjects.ref}>
        <i
          className="fa-solid fa-chevron-left"
          onClick={() => {
            if(count <= 0) {
              return count
            }
            setCount(count - 1)
          }}
        ></i>
        {projectsData.map(item => (
          <ProjectCard
            className="card"
            img={item.img}
            link={item.link}
            projectName={item.projectName}
            key={item.id}
            count={count}
          />
        ))}
        <i
          className="fa-solid fa-chevron-right"
          onClick={() => {
            if(count >= 3) {
              return count
            }
            setCount(count + 1)
          }}
        ></i>
      </div>
    </div>
  )
}

export default Projects