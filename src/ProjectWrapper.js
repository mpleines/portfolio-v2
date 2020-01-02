import React from 'react';
import './ProjectWrapper.css';
import ProjectBox from './components/ProjectBox';
import ProjectCatalog from './ProjectCatalog';

const ProjectWrapper = () => {
  return (
    <div className="project-wrapper">
    {
        ProjectCatalog.map(project => {
        return (
            <ProjectBox key={project.title} project={project} />
        )
        })
    }
    </div>
  )
}

export default ProjectWrapper;
