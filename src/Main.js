import React from 'react';
import './Main.css';
import AvatarAnimation from './AvatarAnimation';
import AboutMe from './AboutMe';
import ProjectWrapper from './ProjectWrapper';
import Contact from './Contact';
import Footer from './Footer';
import Banner from './Banner';

const App = () => {
  return (
    <div className="main">
      <AvatarAnimation />
      <AboutMe />
      <h2 id="projects" class="title-underlined title-black title-margin">Projects</h2>
      <Banner />
      <ProjectWrapper />
      
      <h2 class="title-underlined title-black title-margin">Contact</h2>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
