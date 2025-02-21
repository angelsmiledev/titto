import React from "react";
import styled from "styled-components";
import VideoSrc from "../../videos/video.mp4";

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Video = styled.video`
  width: 70%;
  padding: 50px 0px;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px 50px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px 30px;
  }
`;

const VideoSection = () => {
  return (
    <VideoWrapper>
      <Video src={VideoSrc} autoPlay muted type="video/mp4" />
    </VideoWrapper>
  );
};

export default VideoSection;
