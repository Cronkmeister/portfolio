import "./Contact.scss";

import { FiLinkedin, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h1 className="contact__title">Contact</h1>
        <p className="contact__text">
          I would love to chat with you! Please feel to feel out to me using any
          medium
        </p>
        <p className="contact__text">email: jonnycronk@me.com</p>
        <div className="contact__icons-container">
          <a href="mailto:jonnycronk@me.com">
            <FiMail className="contact__icon" />
          </a>
          <a href="https://www.linkedin.com/in/jonathan-cronk/">
            <FiLinkedin className="contact__icon" />
          </a>
          <a href="https://www.instagram.com/jonnycronk/">
            <FaInstagram className="contact__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
