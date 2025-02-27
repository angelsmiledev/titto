import React, { useRef, useState, useEffect } from "react";
import { Video } from "./PiecesElements"; // Import styled component

const LazyVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Video
      ref={videoRef}
      controls
      muted
      loop
      playsInline
      autoPlay={isVisible} // Only auto-play when visible
      preload="none" // Prevents unnecessary loading
    >
      {isVisible && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </Video>
  );
};

export default LazyVideo;
