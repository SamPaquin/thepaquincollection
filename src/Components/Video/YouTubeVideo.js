import React from "react";
import YouTube from "react-youtube";

import "./Video.css";

class YouTubeVideo extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "500",
      width: "800",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const { videoId } = this.props;

    return (
      <YouTube
        className="video"
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
      />
    );
  }
}

export default YouTubeVideo;
