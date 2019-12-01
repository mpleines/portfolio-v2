import React from 'react';
import './Main.css'
import AboutMe from './AboutMe';
import ProjectBox from './components/ProjectBox';
import ProjectCatalog from './ProjectCatalog';
import Button from './components/Button';
const App = () => {
  return (
    <div className="main">
      <AboutMe />
      <h2 class="title-underlined title-black title-margin">Projects</h2>
      <div className="project-wrapper">
        {
          ProjectCatalog.map(project => {
            return (
              <ProjectBox key={project.title} project={project} />
            )
          })
        }
      </div>

      <a href="https://github.com/mpleines">
        <Button buttonText="Show All Projects"/>
      </a>
      
      
      
    </div>
  );
}

export default App;
