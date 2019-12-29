import React from 'react';
import './aboutMe.css'

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 id="about" class="title-underlined about-title">About Me</h2>
      <h3 class="navbar-title">
        Hi, I´m Maik! 
        <span role="img" aria-label="peace emoji"> ✌️</span>
      </h3>
      <p className="big-paragraph small-paragraph">I love <i>developing things.</i></p>
      <p className="big-paragraph small-paragraph">I am a <b>Web/Javascript Developer</b> from Germany</p>
      <p className="big-paragraph small-paragraph">Most of the time I´m using <a href="https://reactjs.org/" className="link">ReactJS</a> for building my applications and websites. 
        I also really like <a href="https://vuejs.org/" className="link">VueJS</a>.
      </p>
      <p className="big-paragraph small-paragraph">Some of my <a href="#projects" className="link">projects</a> are listed below.
        If you would like to talk, feel free to <a href="#contact" className="link">contact me</a>.
      </p>
    </div>
  );
}

export default AboutMe;
