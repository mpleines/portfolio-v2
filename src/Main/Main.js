import React from 'react';
import './Main.css'
import ProjectBox from './components/ProjectBox';
import ProjectCatalog from '../ProjectCatalog';
const App = () => {
  return (
    <div className="main">
      <div className="welcome-banner">
        <div className="text-content">
          <h1>Hi, I´m Maik!</h1>
          <h3>I love to write Code - mostly in JavaScript</h3>
        </div>
      </div>

      <div className="nav-outer">
        <ul style={{listStyleType: 'disc'}}>
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
      </div>

      <div className="project-wrapper">
        {
          ProjectCatalog.map(project => {
            return (
              <ProjectBox project={project} />
            )
          })
        }
      </div>


    </div>
  );
}

export default App;
