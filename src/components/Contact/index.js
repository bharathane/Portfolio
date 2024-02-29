import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./index.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_43xfobq", "template_4t13a9k", form.current, {
        publicKey: "t0-Pf4jvmCzI9Seby",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Subject</label>
          <br />
          <input
            type="text"
            placeholder="Enter Subject"
            name="Subject"
            required
          />
          <br />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="You Mail Here"
            name="Email"
            required
          />
          <br />
        </div>
        <div>
          <label>Message</label>
          <br />
          <textarea
            rows={15}
            cols={20}
            placeholder="Please Enter Message Here"
            name="message"
            required
          ></textarea>
          <br />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
