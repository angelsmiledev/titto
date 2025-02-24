import styled from "styled-components";

export const LayerContainer = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
`;

export const PlanetContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Planet = styled.img`
  position: absolute;
  width: 60px;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  right: ${({ $right }) => `${$right}%`};
  bottom: ${({ $bottom }) => `${$bottom}%`};
  @media screen and (max-width: 768px) {
    width: 50px;
  }

  @media screen and (max-width: 480px) {
    width: 50px;
`;
