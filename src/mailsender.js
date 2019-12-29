import emailjs from 'emailjs-com';

const sendMail = (variables) => {
    const templateId = 'portfolio';
    emailjs.init("user_TuDyJlLJSycGxqbXaEMFo"); // TODO: remove later
    emailjs.send(
        'gmail', 
        templateId,
        variables
    ).then(res => {
        console.log('Email successfully sent!')
    })
    .catch(err => console.error(err));
}

export default sendMail;