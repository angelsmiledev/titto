import React from "react";
import styled from "styled-components";
import VideoSrc from "../../videos/video.mp4";

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Video = styled.video`
  width: 70%;
  padding: 50px 100px;
  height: 100%;
`;

const VideoSection = () => {
  return (
    <VideoWrapper>
      <Video src={VideoSrc} autoPlay muted type="video/mp4" />
    </VideoWrapper>
  );
};

export default VideoSection;
