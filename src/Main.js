import React from 'react';
import './Main.css'
import AboutMe from './AboutMe';
import ProjectBox from './components/ProjectBox';
import ProjectCatalog from './ProjectCatalog';
import Button from './components/Button';
const App = () => {
  return (
    <div className="main">
      
      <h1 class="title">
        <a href="https://maikpleines.com/">Maik Pleines.</a>
      </h1>

      <div className="welcome-banner">
        <div className="text-content">
          <p class="p-banner">
            <i>I love to write Code, mostly in JavaScript!</i>
          </p>
        </div>
      </div>

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

      <Button buttonText="Show All Projects"/>
      
      <AboutMe />
    </div>
  );
}

export default App;
