import { useRef } from "react";
import emailjs from "emailjs-com";

import ContactImage from "../Images/Contact/ContactImage.jpg";
import ContactGallery1 from "../Images/Contact/ContactGallery1.jpg";
import ContactGallery2 from "../Images/Contact/ContactGallery2.jpg";
import ContactGallery3 from "../Images/Contact/ContactGallery3.jpg";
import ContactGallery4 from "../Images/Contact/ContactGallery4.jpg";
import ContactGallery5 from "../Images/Contact/ContactGallery5.jpg";
import ContactGallery6 from "../Images/Contact/ContactGallery6.jpg";
import ContactGallery7 from "../Images/Contact/ContactGallery7.jpg";
import ContactGallery8 from "../Images/Contact/ContactGallery8.jpg";
import "./Styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i9lgfqo",
        "template_k5v4c1p",
        form.current,
        "user_Cl87UiSB9AkN7aPVXWV8w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="contact-page__gallery">
        <img src={ContactGallery1} alt="Contact" />
        <img src={ContactGallery2} alt="Contact" />
        <img src={ContactGallery3} alt="Contact" />
        <img src={ContactGallery4} alt="Contact" />
        <img src={ContactGallery5} alt="Contact" />
        <img src={ContactGallery6} alt="Contact" />
        <img src={ContactGallery7} alt="Contact" />
        <img src={ContactGallery8} alt="Contact" />
      </div>
      <div className="contact-page__section" id="contact">
        <img src={ContactImage} alt="Contact" />
        <div className="contact-page-decor" />
        <div className="contact-page__content">
          <h2>Let's Connect</h2>
          <p>okay, i'm in. let's do this thing!</p>
          <form
            className="contact-page__content__form"
            ref={form}
            onSubmit={sendEmail}
            autocomplete="nope"
          >
            <div className="contact-page__content__form-input">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
              />
              <input type="text" name="email" placeholder="Email" required />
              <input
                type="text"
                name="date"
                placeholder="Event Date"
                required
              />
              <textarea
                type="textarea"
                name="message"
                placeholder="Message..."
                required
              />
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
