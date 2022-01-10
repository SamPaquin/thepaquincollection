import { ExternalLink } from "react-external-link";
import YouTubeVideo from "../Components/Video/YouTubeVideo";
import "./Styles/Videography.css";

const Videography = () => {
  return (
    <div className="videography-page" id="videography">
      <div className="videography-content">
        <h2>Videography</h2>
        <p className="videography-cursive">yep, i do videography, too!</p>
        <p>
          Photography is awesome and videography is amazing too! My wedding
          videos capture so much and let you relive special moments for the rest
          of your lives. They are so cool! Check out more of my videos on
          YouTube!
        </p>
        <ExternalLink href="https://www.youtube.com/channel/UC1n-ltB8SM5z37DQacFYZ1Q">
          <button>more videos</button>
        </ExternalLink>
      </div>
      <div className="videography-video-decor" />
      <div className="videography-video">
        <YouTubeVideo className="video" videoId="BFf86_RtXk4" />
      </div>
    </div>
  );
};

export default Videography;
