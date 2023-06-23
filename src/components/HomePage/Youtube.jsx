import React from "react";
import YouTube from "react-youtube";
import CarouselWrapper from "./CarouselWrapper";

const HeroSection = ({ videoId }) => {
  const videoOpts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      // loop: 100,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      iv_load_policy: 3,
      fs: 0,
      disablekb: 1,
      playsinline: 1,
      mute: 1,
    },
  };

  return (
    <div className="hero-section">
      <YouTube videoId={videoId} opts={videoOpts} className="video-iframe" />
    </div>
  );
};

export default HeroSection;
