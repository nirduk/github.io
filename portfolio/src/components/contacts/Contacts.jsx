import { useParallax } from 'react-scroll-parallax';
import { useRef } from 'react'
import './contacts.css'

const Contacts = () => {
  const parallaxContacts = useParallax({
    // translateY: [-10, 0],
    opacity: [0, 2, 'easeInOut']
  })
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()
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

              <i class="fa-brands fa-telegram"></i>
            </a>
            <a
              href="https://github.com/nirduk"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/oleksandr-kudrin-b197401b4/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="contact-form">
          <p>or just send me an email</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea id="" cols="30" rows="10" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
