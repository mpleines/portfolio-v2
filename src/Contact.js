import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <form className="contact">
        <h2 id="contact" className="contactTitle">SAY HELLO</h2>
        <input type="text" placeholder="Your name" className="contactInput"/>
        <input type="email" placeholder="Your email" className="contactInput"/>
        <textarea placeholder="Your message" className="contactInput"></textarea>
        <button type="submit" className="sendButton">SEND</button>
    </form>
  );
}

export default Contact;
