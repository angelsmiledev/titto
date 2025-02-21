import React, { useRef, useState } from "react";
import styled from "styled-components";
import VideoSrc from "../../videos/video.mp4";
import { GoUnmute, GoMute } from "react-icons/go";

const VideoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const MuteBtn = styled(GoMute)`
  position: absolute;
  right: 5px;
  top: 5px;
  color: red;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
const UnMuteBtn = styled(GoUnmute)`
  position: absolute;
  right: 5px;
  top: 5px;
  color: blue;
  font-weight: bold;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const VideoLayout = styled.div`
  position: relative;
  width: 70%;
  margin: 50px 0px;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 30px 50px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 20px 30px;
  }
`;

export const Video = styled.video`
  width: 100%;
`;

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };
  return (
    <VideoWrapper>
      <VideoLayout>
        <Video
          src={VideoSrc}
          autoPlay
          muted
          loop
          type="video/mp4"
          ref={videoRef}
        />
        {isMuted && <MuteBtn onClick={toggleMute} />}
        {!isMuted && <UnMuteBtn onClick={toggleMute} />}
      </VideoLayout>
    </VideoWrapper>
  );
};

export default VideoSection;
