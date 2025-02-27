import React, { useState, useEffect, useRef } from "react";
import { PiecesIcon } from "./PiecesElements"; // Import styled component

const LazyImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <PiecesIcon
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      loading="lazy"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s ease-in" }}
    />
  );
};

export default LazyImage;
