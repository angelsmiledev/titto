import styled from "styled-components";

export const PiecesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PiecesWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  align-items: center;
  padding: 50px;
`;

export const PiecesIcon = styled.img`
  height: 250px;
  width: 250px;
  padding: 30px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  @media screen and (max-width: 985px) {
    height: 200px;
    width: 200px;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  align-items: center;
  padding: 50px;

  justify-content: center;
`;

export const Video = styled.video`
  width: 250px;
  height: 250px;
  padding: 10px;
  transition: transform 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
    width: 200px;
  }
`;
