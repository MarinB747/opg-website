import emailjs from "emailjs-com";


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_f0lndjd', e.target, 'user_aA2UgjKNawzlffIXMWDFo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  export default sendEmail