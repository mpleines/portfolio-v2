import React from 'react';
import './Main.css'
import ProjectBox from './components/ProjectBox';
import ProjectCatalog from '../ProjectCatalog';
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


      <nav className="navbar-outer">
        <ul className="navbar">
          <li>
            <a href="http://localhost:3000">Projects</a>
          </li>
          <li>
            <a href="http://localhost:3000">About me</a>
          </li>
          <li>
            <a href="http://localhost:3000">GitHub</a>
          </li>
          <li>
            <a href="mailto: maik.pleines@googlemail.com">E-Mail</a>
          </li>
        </ul> 
      </nav>


      <div className="project-wrapper">
        {
          ProjectCatalog.map(project => {
            return (
              <ProjectBox key={project.title} project={project} />
            )
          })
        }
      </div>


    </div>
  );
}

export default App;
