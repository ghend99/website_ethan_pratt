import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Header } from "../components/header.js";
import "../css/contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_baem50f",
        "template_3lrlcby",
        form.current,
        "PLR_fdQuEr_RCEmkO"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="bg">
        <Header />
        <div id="contact-container">
          <h1 className="contact-header">Get in touch</h1>
          <div id="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label className="form-name-header">Name</label>
              <input className="form-name-input" type="text" name="user_name" />
              <label className="form-email-header">Email</label>
              <input
                className="form-email-input"
                type="email"
                name="user_email"
              />
              <label className="form-message-header">Message</label>
              <textarea
                className="form-message-input"
                name="message"
                rows="7"
                cols="40"
              />
              <input className="form-submit" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
