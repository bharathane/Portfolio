import React, { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

import "./index.css";

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      "#subjectInputElement",
      {
        x: -500,
      },
      { x: 0, duration: 1 }
    );
    gsap.fromTo(
      "#emailInputelement",
      {
        x: 900,
      },
      { x: 0, duration: 1 }
    );
    gsap.fromTo(
      ".submitButtonforForm",
      {
        x: 900,
      },
      { x: 0, duration: 1 }
    );

    gsap.fromTo(
      "#textareaInputElement",
      {
        x: -500,
      },
      { x: 0, duration: 1 }
    );

    gsap.fromTo(
      "lable",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 2 }
    );
  });
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
          <lable htmlFor="subjectInputElement">Subject</lable>
          <br />
          <input
            id="subjectInputElement"
            type="text"
            placeholder="Enter Subject"
            name="Subject"
            required
          />
          <br />
        </div>
        <div>
          <lable htmlFor="emailInputelement">Email</lable>
          <br />
          <input
            type="email"
            id="emailInputelement"
            placeholder="You Mail Here"
            name="Email"
            required
          />
          <br />
        </div>
        <div>
          <lable htmlFor="textareaInputElement">Message</lable>
          <br />
          <textarea
            id="textareaInputElement"
            rows={15}
            cols={20}
            placeholder="Please Enter Message Here"
            name="message"
            required
          ></textarea>
          <br />
        </div>
        <button type="submit" className="submitButtonforForm">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
