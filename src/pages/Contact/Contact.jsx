import './Contact.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


function Contact() {
  return (
    <>
      <main id="section04" className="contact-page">
        <section className="call-to-action">
          <h1>Hello</h1>
          <p>
         I would love to work together. Feel free to leave a message. </p>
        </section>
        <section className="user-input">
          <form  method="post">
            <div className='name-and-email'>
              <input className='name' name="name" placeholder=" Full Name"></input>
              <input className='email' name="email" placeholder=" Email"></input>
            </div>
            <textarea className='message' name="message" placeholder=" Message"></textarea>
            <button className='message-button' >Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contact;
