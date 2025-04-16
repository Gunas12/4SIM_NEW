import React, { useEffect } from "react";
import "./videoOverlay.css";
import OverlayVideo from "../assets/videos/overlay_video.mp4";

function VideoOverlay({ onVideoEnd }) {
  useEffect(() => {
    const timer = setTimeout(onVideoEnd, 5000);
    return () => clearTimeout(timer);
  }, [onVideoEnd]);

  return (
    <div className="video-home2">
      <video autoPlay muted>
        <source src={OverlayVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoOverlay;
