import styled from "styled-components";

export const SocialContainer = styled.div`
  // background-color: #101522;
  position: relative;
  display: flex;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }

  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;

export const SocialIconLink = styled.a`
  background-size: cover;
  background-position: center;
  boder-radius: 50%;
  z-index: 1;
`;
