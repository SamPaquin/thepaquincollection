// Kirstin's Image
import PhotographerImage from "../Images/About/Kirstin.jpg";

// About Gallery Images
import AG1 from "../Images/About/Gallery/AboutGallery1.jpg";
import AG2 from "../Images/About/Gallery/AboutGallery2.jpg";
import AG3 from "../Images/About/Gallery/AboutGallery3.jpg";
import AG4 from "../Images/About/Gallery/AboutGallery4.jpg";

import "./Styles/About.css";

const About = () => {
  return (
    <div className="about-page" id="about">
      <div className="about-page__section">
        <div className="about-page__section__photographer-image">
          <img src={PhotographerImage} alt="First" />
          <div className="photographer-image-decor" />
        </div>
        <div className="about-page__content">
          <h2>
            I'm <span>Kirstin Paquin</span>
          </h2>
          <p className="about-page__content-cursive">
            your fun-loving, wedding photographer!
          </p>
          <p className="about-page__content-text">
            i absolutely love being a part of your wedding day and helping you
            capture memories that you'll cherish forever!
          </p>
        </div>
      </div>
      <div className="contact-section">
        <h4>Let's get in touch with each other</h4>
        <p>it's gonna be a party!</p>
        <a href="#contact">
          <button>contact</button>
        </a>
      </div>
      <div className="mini-gallery">
        <img src={AG1} alt="Eustice Family" />
        <img src={AG2} alt="Eustice Family" />
        <img src={AG3} alt="Eustice Family" />
        <img src={AG4} alt="Eustice Family" />
      </div>
    </div>
  );
};

export default About;
