import './contacts.css';
import { useParallax } from 'react-scroll-parallax';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const parallaxContacts = useParallax({
    opacity: [0, 2, 'easeInOut']
  })

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_u2k9qkc', 'template_kpkg43a', formRef.current, 'P0iEoxOrereBPlR5Q')
      .then((result) => {        
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      event.target.reset();
  }

  return (
    <div className="contacts-container" ref={parallaxContacts.ref}>
      <div className="contacts">
        <div className="contact-links">
          <p>you can find me here</p>
          <div className="icon-container">
            <a
              href="https://www.t.me/nirduk"
              target="_blank"
              rel="noreferrer">

              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://github.com/nirduk"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/oleksandr-kudrin-b197401b4/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="contact-form">
          <p>or just send me an email</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="text" placeholder="Subject" name="user_subject" required />
            <input type="text" placeholder="Email" name="user_email" required />
            <textarea rows="10" placeholder="Message" name="message" required></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
