import React, { useEffect, useState, lazy, Suspense } from "react";
// import Icon1 from "../../images/1.png";

import Icon3 from "../../images/3.webp";
import Icon5 from "../../images/5.webp";
import Icon6 from "../../images/6.webp";
import Icon7 from "../../images/7.webp";
import Icon8 from "../../images/8.webp";
import Icon10 from "../../images/10.webp";
import Video1 from "../../videos/video1.MP4";
import Video2 from "../../videos/video2.MP4";
import textImg from "../../images/text.png";
import {
  PiecesContainer,
  PiecesWrapper,
  // PiecesIcon,
  VideoWrapper,
  // Video,
} from "./PiecesElements";
const LazyVideo = lazy(() => import("./LazyVideo"));
const LazyImage = lazy(() => import("./LazyImage"));

const Pieces = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setImages([Icon3, Icon5, Icon6, Icon7, Icon8, Icon10]);
    setVideos([Video1, Video2]);
  }, []);
  return (
    <PiecesContainer id="Pieces">
      <PiecesWrapper>
        {/* <PiecesIcon src={textImg} alt="textImage" /> */}
        <Suspense fallback={<div>Loading ...</div>}>
          <LazyImage src={textImg} alt="textImage" />
        </Suspense>
      </PiecesWrapper>
      <VideoWrapper>
        <Suspense fallback={<div>Loading ... </div>}>
          {videos.map((video, _id) => (
            // <Video
            //   key={`video-meme-${_id}`}
            //   src={video}
            //   autoPlay
            //   muted
            //   loop
            //   playsInline
            //   preload="auto"
            //   controls
            // />
            <LazyVideo key={`video-meme-${_id}`} src={video} />
          ))}
        </Suspense>
      </VideoWrapper>
      <PiecesWrapper>
        <Suspense fallback={<div>Loading ... </div>}>
          {images.map((img, _id) => (
            // <PiecesIcon key={`image-meme-${_id}`} src={img} alt="Meme" />
            <LazyImage key={`image-meme-${_id}`} src={img} alt="Meme" />
          ))}
        </Suspense>
      </PiecesWrapper>
    </PiecesContainer>
  );
};

export default Pieces;
