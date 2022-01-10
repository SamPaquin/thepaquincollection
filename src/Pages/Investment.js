import InvestmentImage from "../Images/Investment/InvestmentImage.jpg";
import "./Styles/Investment.css";

const Investment = () => {
  return (
    <div className="investment-page" id="investment">
      <div className="investment-page-decor" />
      <div className="investment-page__section">
        <div className="investment-page__content">
          <h2>Your Investment</h2>
          <p className="inestment-page__content-cursive">
            i promise you it's worth it!
          </p>
          <p className="investment-page__content-text">
            Okay, let's get down to the details. I provide a bunch of services
            and every couple can tailor any of my packages to fit their specific
            needs - it's your day after all!
          </p>
          <button>pricing guide</button>
        </div>
        <div className="investment-page__image">
          <img src={InvestmentImage} alt="Investment Page" />
          <div className="investment-page__content__decor" />
        </div>
      </div>
    </div>
  );
};

export default Investment;
