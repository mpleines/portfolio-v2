import React, { useState } from 'react';
import './Contact.css';
import sendMail from './mailsender';

const Contact = () => {
  const [name, setName] = useState('');
  const [emailFrom, setEmailFrom] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail({
      name: name,
      emailFrom: emailFrom,
      message_html: text
    });
  }

  return (
    <form id="contact-form" className="contact">
        <h2 id="contact" className="contactTitle">SAY HELLO</h2>
        <input type="text" placeholder="Your name" className="contactInput" name="name" onChange={e => setName(e.target.value)}/>
        <input type="email" placeholder="Your email" className="contactInput" name="mail" onChange={e => setEmailFrom(e.target.value)}/>
        <textarea placeholder="Your message" className="contactInput" name="comment" onChange={e => setText(e.target.value)}></textarea>
        <button type="submit" className="sendButton" onClick={e => handleSubmit(e)}>SEND</button>
    </form>
  );
}

export default Contact;
