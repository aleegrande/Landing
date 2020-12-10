import React from "react";
import YouTube from "react-youtube";

const Video = () => {
  const VideoOnReady = (event) => event.target.playVideoAt(0);
  const handleEndVideo = () => {
    localStorage.setItem("hidden", true);
  };

  const opts = {
    height: "400",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId="BGhJaEmmFxE"
      opts={opts}
      onReady={VideoOnReady}
      onEnd={handleEndVideo}
    />
  );
};

export default Video;
