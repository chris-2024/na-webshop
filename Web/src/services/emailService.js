import emailjs from "emailjs-com";

const sendEmail = async (templateParams) => {
  const emailjsParams = {
    service_id: import.meta.env.VITE_EMAIL_SERVICE_ID,
    template_id: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    user_id: import.meta.env.VITE_EMAIL_USER_ID,
  };

  try {
    await emailjs.send(
      emailjsParams.service_id,
      emailjsParams.template_id,
      templateParams,
      emailjsParams.user_id
    );
  } catch (error) {
    throw error;
  }
};

export default sendEmail;
