import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%" }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
