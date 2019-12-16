import React from 'react';
import './aboutMe.css'

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 id="about" class="title-underlined about-title">About Me</h2>
      <h3 class="navbar-title">
        Hi, I´m Maik! 
        <span role="img" aria-label="peace emoji">✌️</span>
      </h3>
      <p className="big-paragraph small-paragraph">I love <i>developing things.</i></p>
      <p className="big-paragraph small-paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <a href="">At vero eos</a> et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore <a href="">magna aliquyam</a> erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default AboutMe;
