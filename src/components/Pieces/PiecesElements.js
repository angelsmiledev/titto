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
  width: 75%;
  padding: 30px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  @media screen and (max-width: 985px) {
    padding: 10px 0px;
    width: 90%;
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
  width: 75%;
  padding: 10px;
  transition: transform 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
