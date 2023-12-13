import './Contact.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  console.log(serviceId, templateId, publicKey);


  const form = useRef();
 
  const sendEmail = (e) => {
    
    e.preventDefault();
    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(serviceId, templateId, publicKey);
          alert(`Thank you for your message.`);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  
  return (
    <>
      <main id="section04" className="contact-page">
        <section className="call-to-action">
          <h1>Nice to Meet You!</h1>
          <p>
            Feel free to reach out and send me a message, I'm here and eager to
            connect!.
          </p>
        </section>
        <section className="user-input">
          {/* <form method="post" ref={form} onSubmit={sendEmail}> */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-and-email">
              <input
                className="name"
                type="text"
                name="user_name"
                placeholder=" Name"
              />

              <input
                className="email"
                type="email"
                name="user_email"
                placeholder=" Email"
              />
            </div>

            <textarea
              className="message"
              name="message"
              placeholder=" Message"
            />
            <input
              className="message-button"
              type="submit"
              value="Submit "
            />
          </form>
          {/* <div className="name-and-email">
              <input
                type="text"
                className="name"
                name="user_name"
                placeholder=" Full Name"
              ></input>
              <input
                className="email"
                name="user_email"
                placeholder=" Email"
              ></input>
            </div>
            <textarea
              className="message"
              name="message"
              placeholder=" Message"
            ></textarea>
            <button type="submit" value="Send" className="message-button">
              Send Message
            </button> */}
          {/* </form> */}
        </section>
      </main>
    </>
  );
}

export default Contact;
