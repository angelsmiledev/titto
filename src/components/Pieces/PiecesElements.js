import styled from "styled-components";

export const PiecesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 985px) {
    height: 900px;
  }

  @media screen and (max-width: 885px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
  }
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
    height: 150px;
    width: 150px;
  }
  /* Randomize positions */
  &:nth-child(1) {
    transform: rotate(15deg);
  }

  &:nth-child(2) {
    transform: rotate(-10deg);
  }

  &:nth-child(3) {
    transform: rotate(30deg);
  }

  &:nth-child(4) {
    transform: rotate(-5deg);
  }

  &:nth-child(5) {
    transform: rotate(-25deg);
  }

  &:nth-child(6) {
    transform: rotate(-22deg);
  }

  &:nth-child(7) {
    transform: rotate(12deg);
  }

  &:nth-child(8) {
    transform: rotate(-20deg);
  }

  &:nth-child(9) {
    transform: rotate(18deg);
  }

  &:nth-child(10) {
    transform: rotate(-12deg);
  }
  &:hover {
    transform: scale(1.1) rotate(0deg);
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Video = styled.video`
  width: 250px;
  height: 250px;
  padding: 10px;
  transition: transform 0.3s ease-in-out;
  &:nth-child(1) {
    transform: rotate(15deg);
  }

  &:nth-child(2) {
    transform: rotate(-10deg);
  }
  &:hover {
    transform: scale(1.1) rotate(0deg);
  }
`;
