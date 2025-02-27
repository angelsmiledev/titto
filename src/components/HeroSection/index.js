import React from "react";
import { HeroContainer, HeroBg, ImageBg, SocialSection } from "./HeroElements";
import imageSrc from "../../images/banner.jpg";
import Social from "../Social";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg id="heroImage" src={imageSrc} alt="image banner" />
        <SocialSection>
          <Social />
        </SocialSection>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
