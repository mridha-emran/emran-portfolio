
import './project.css'
import  ProjectCard  from '../../components/card/projectCard/ProjectCard';
import { projectsData } from '../../data/projectsData'
import PageTitle from '../../components/pageTitel/Pagetitel';

function Project() {

    return (      
        
        <div className="project-container">
         <PageTitle text ='PROJECTS' />
          <div className="project-grid">
               {projectsData.map(project => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.projectName}
                    desc={project.projectDesc}
                    tags={project.tags}
                    code={project.code}
                    demo={project.demo}
                    delay ={project.delay}
                    image={project.image} 
                />
                ))}
            </div>
        </div>
        
    )
}

export default Project