// emailjs.js
import emailjs from 'emailjs-com';

export const sendEmail = (form) => {
    return emailjs.sendForm(
        'YOUR_SERVICE_ID',    // Reemplaza con tu Service ID
        'YOUR_TEMPLATE_ID',   // Reemplaza con tu Template ID
        form,
        'YOUR_USER_ID'        // Reemplaza con tu User ID
    );
};
