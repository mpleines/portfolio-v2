import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const sendMail = (variables) => {
    const templateId = 'portfolio';
    emailjs.init("user_TuDyJlLJSycGxqbXaEMFo"); // TODO: remove later
    emailjs.send(
        'gmail', 
        templateId,
        variables
    ).then(res => toast.success('Email successfully sent!', {
    position: toast.POSITION.BOTTOM_CENTER
    })).catch(err => {
    toast.error(err, {
        position: toast.POSITION.BOTTOM_CENTER
    })
    })
};
export default sendMail;