import "./Contact.scss";

import { FiLinkedin, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h1 className="contact__title" id="contact">
          Contact
        </h1>
        <p className="contact__text">
          I would love to chat with you! Please reach out to me on any medium
        </p>
        <p className="contact__text">email: jonnycronk@me.com</p>
        <div className="contact__icons-container">
          <a href="mailto:jonnycronk@me.com">
            <FiMail className="contact__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonny-cronk/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="contact__icon" />
          </a>
          <a
            href="https://www.instagram.com/jonnycronk/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="contact__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
