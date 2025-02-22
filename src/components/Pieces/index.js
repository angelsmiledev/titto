import React, { useEffect, useState } from "react";
import Icon1 from "../../images/1.png";
import Icon3 from "../../images/3.png";
import Icon5 from "../../images/5.png";
import Icon6 from "../../images/6.png";
import Icon7 from "../../images/7.png";
import Icon8 from "../../images/8.png";
import Icon9 from "../../images/9.png";
import Icon10 from "../../images/10.png";
import Video1 from "../../videos/video1.MP4";
import Video2 from "../../videos/video2.MP4";
import {
  PiecesContainer,
  PiecesWrapper,
  PiecesIcon,
  VideoWrapper,
  Video,
} from "./PiecesElements";

const Pieces = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setImages([Icon1, Icon3, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10]);
    setVideos([Video1, Video2]);
  }, []);
  return (
    <PiecesContainer id="Pieces">
      <VideoWrapper>
        {videos.map((video, _id) => (
          <Video
            key={`video-meme-${_id}`}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls
          />
        ))}
      </VideoWrapper>
      <PiecesWrapper>
        {images.map((img, _id) => (
          <PiecesIcon key={`image-meme-${_id}`} src={img} alt="Meme" />
        ))}
      </PiecesWrapper>
    </PiecesContainer>
  );
};

export default Pieces;
