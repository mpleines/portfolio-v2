import React, { useState, useEffect } from 'react';
import './Contact.css';
import sendMail from './mailsender';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [emailFrom, setEmailFrom] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateInput(name)) {
      showErrorToast('Please enter a valid name');
      return false;
    }

    if(!validateEmail(emailFrom)) {
      showErrorToast('Please enter a valid email address');
      return false;
    }

    if(!validateInput(text)) {
      showErrorToast('Please enter a valid message');
      return false;
    }

    sendMail({
      name: name,
      emailFrom: emailFrom,
      message_html: text
    });
  }

  const validateInput = (text) => {
    return text.length > 1;
  }

  const validateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  const showErrorToast = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER
    })
  }

  return (
    <form id="contact-form" className="contact">
        <h2 id="contact" className="contactTitle">SAY HELLO</h2>
        <input type="text" placeholder="Your name" className="contactInput" name="name" 
          onChange={e => setName(e.target.value)}
        />
        <input type="email" placeholder="Your email" className="contactInput" name="mail" 
          onChange={e => setEmailFrom(e.target.value)}
        />
        <textarea placeholder="Your message" className="contactInput" name="comment" 
          onChange={e => setText(e.target.value)}
        ></textarea>
        <button type="submit" 
          className="sendButton"
          onClick={e => handleSubmit(e)}
        >SEND</button>
    </form>
  );
}

export default Contact;
