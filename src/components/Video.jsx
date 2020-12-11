import React from "react";
import YouTube from "react-youtube";

const Video = () => {
  const VideoOnReady = (event) => event.target.playVideoAt(0);

  const opts = {
    height: "320px",
    width: "70%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="desVideo"><label className="desVideo">Sorteo exclusivo para clientes, conoce las bases del concurso en el siguiente video:
        </label></div>
      <YouTube
        videoId="BGhJaEmmFxE"
        opts={opts}
        onReady={VideoOnReady}
      />
    </>
  );
};

export default Video;
