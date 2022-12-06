import React from "react";
import "./Context.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contect = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c23rplg",
      "template_0tekfqe",
      form.current,
      "cItpeFkTlw5SlYnbl"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contect Me</h2>
      <div className="container contact__container">
        <div className="contect__options">
          <article className="contect__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mueezgamings@gmail.com</h5>
            <a href="mailto:mueezgamings@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          <article className="contect__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>MUEEZ UD DIN</h5>
            <a
              href="https://www.facebook.com/messages/t/100081067539941"
              target="__blank"
            >
              Send a message
            </a>
          </article>
          <article className="contect__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+92 316*******</h5>
            <a
              href="https://api.whatsapp.com/send?phone=03160978329"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;
