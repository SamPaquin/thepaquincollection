// Main Home Pictures
import HF from "../Images/Home/Home-Foreground.jpg";
import HB from "../Images/Home/Home-Background.jpg";

// Home Gallery Pictures
import HG1 from "../Images/Home/Gallery/HomeGallery1.jpg";
import HG2 from "../Images/Home/Gallery/HomeGallery2.jpg";
import HG3 from "../Images/Home/Gallery/HomeGallery3.jpg";
import HG4 from "../Images/Home/Gallery/HomeGallery4.jpg";
import HG5 from "../Images/Home/Gallery/HomeGallery5.jpg";
import HG6 from "../Images/Home/Gallery/HomeGallery6.jpg";
import HG7 from "../Images/Home/Gallery/HomeGallery7.jpg";
import HG8 from "../Images/Home/Gallery/HomeGallery8.jpg";

import "./Styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-section">
        <div className="home-section__content">
          <div className="home-section__content__image">
            <img
              src={HF}
              className="home-section__content__image__foreground"
              alt="The Paquin Collection - Home"
            />
            <div className="home-section__content__image__background">
              <img src={HB} alt="The Paquin Collection - Home Bakground" />
            </div>
            <div className="home-section__content__image__decor"></div>
          </div>
          <div className="home-section__content__text">
            <h2>Never forget the nights we felt alive.</h2>
            <p className="home-section__content__text-cursive">
              i want to capture it all
            </p>
            <p>every single laugh, smile, tear, and kiss!!</p>
          </div>
        </div>
      </div>
      <div className="home-section__gallery">
        <img src={HG1} alt="Home Gallery" />
        <img src={HG2} alt="Home Gallery" />
        <img src={HG3} alt="Home Gallery" />
        <img src={HG4} alt="Home Gallery" />
        <img src={HG5} alt="Home Gallery" />
        <img src={HG6} alt="Home Gallery" />
        <img src={HG7} alt="Home Gallery" />
        <img src={HG8} alt="Home Gallery" />
      </div>
    </div>
  );
};

export default Home;
