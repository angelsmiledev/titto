import React from "react";
import { HeroContainer, HeroBg, ImageBg, HeroContent } from "./HeroElements";
// import { Button } from "../ButtonElement";
// import { animateScroll as scroll } from "react-scroll";
import imageSrc from "../../images/banner.png";

const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  // const toggleBottom = () => {
  //   scroll.scrollToBottom();
  // };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg id="heroImage" src={imageSrc} alt="image banner" />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1>Introduction of TiTTO</HeroH1> */}
        {/* <HeroP>The Universe we are all TITTO</HeroP> */}
        {/* <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleBottom}
          >
            Lorem Lorem {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
