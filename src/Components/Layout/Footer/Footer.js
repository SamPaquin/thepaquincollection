import { ExternalLink } from "react-external-link";

import Logo from "../../../Images/Logo.png";
import YouTube from "../../../Images/SocialMediaIcons/YouTube.svg";
import Facebook from "../../../Images/SocialMediaIcons/Facebook.svg";
import Instagram from "../../../Images/SocialMediaIcons/Instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <p>&copy; 2021 The Paquin Collection</p>
      </div>
      <div className="footer-image">
        <a href="#home">
          <img src={Logo} alt="The Paquin Collection Logo" />
        </a>
      </div>
      <div className="social-media">
        <ExternalLink href="https://www.facebook.com/thepaquincollection">
          <img src={Facebook} alt="Facebook" />
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com/thepaquincollection/">
          <img src={Instagram} alt="Instagram" />
        </ExternalLink>
        <ExternalLink href="https://www.youtube.com/channel/UC1n-ltB8SM5z37DQacFYZ1Q">
          <img src={YouTube} alt="Youtube" />
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
