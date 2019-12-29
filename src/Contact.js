import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <form className="contact" action="mailto:maik.pleines@googlemail.com" method="post">
        <h2 id="contact" className="contactTitle">SAY HELLO</h2>
        <input type="text" placeholder="Your name" className="contactInput" name="name"/>
        <input type="email" placeholder="Your email" className="contactInput" name="mail"/>
        <textarea placeholder="Your message" className="contactInput" name="comment"></textarea>
        <button type="submit" className="sendButton">SEND</button>
    </form>
  );
}

export default Contact;
