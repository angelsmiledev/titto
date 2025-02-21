import styled from "styled-components";

export const PiecesContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 985px) {
    height: 300px;
  }

  @media screen and (max-width: 885px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;

export const PiecesWrapper = styled.div`
  width: 60%;
  height: 200px;
  position: relative;
  margin: 0 auto;
  display: block;
  align-items: center;
  padding: 0 50px;
`;

export const PiecesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PiecesIcon = styled.img`
  height: 180px;
  width: 180px;
  margin: 30px;
  position: absolute;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  /* Randomize positions */
  &:nth-child(1) {
    top: 10%;
    left: 20%;
    transform: rotate(15deg);
  }

  &:nth-child(2) {
    top: 40%;
    left: 70%;
    transform: rotate(-10deg);
  }

  &:nth-child(3) {
    top: 20%;
    left: 40%;
    transform: rotate(30deg);
  }

  &:nth-child(4) {
    top: 60%;
    left: 10%;
    transform: rotate(5deg);
  }

  &:nth-child(5) {
    top: 80%;
    left: 80%;
    transform: rotate(-25deg);
  }

  &:nth-child(6) {
    top: 30%;
    left: 50%;
    transform: rotate(12deg);
  }
  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

export const PiecesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PiecesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PiecesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
