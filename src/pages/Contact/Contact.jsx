import './Contact.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';


function Contact() {
    // const form = useRef();
    // console.log(process.env)
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .sendForm(
    //       process.env.REACT_APP_Service_ID,
    //       process.env.REACT_APP_Template_ID,
    //       form.current,
    //       process.env.REACT_APP_Public_Key
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         console.log('message sent');
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // };
  return (
    <>
      <main id="section04" className="contact-page">
        <section className="call-to-action">
          <h1>Nice to Meet You!</h1>
          <p>
            Feel free to reach out and send me a message, I'm here and eager to
            connect!.{' '}
          </p>
        </section>
        <section className="user-input">
          {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form> */}
          <form method="post">
            <div className="name-and-email">
              <input
                className="name"
                name="name"
                placeholder=" Full Name"
              ></input>
              <input
                className="email"
                name="email"
                placeholder=" Email"
              ></input>
            </div>
            <textarea
              className="message"
              name="message"
              placeholder=" Message"
            ></textarea>
            <button className="message-button">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contact;
