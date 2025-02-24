import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import styled from "styled-components";
import VideoSection from "../components/VideoSection";
import Pieces from "../components/Pieces";
import logo from "../images/logo.png";

const Container = styled.div`
  background-image: url("/images/background.png"); /* Replace with your image URL */
  background-repeat: repeat; /* Ensure it repeats */
  background-size: cover; /* Keeps the original size of the image */
  min-height: 100vh; /* Makes sure it covers the full height of the page */
  background-position: center; /* Optional: center the background image */
  display: block;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
`;

const ImageLayer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: -10%;
  width: 50vw; /* Adjust size as needed */
  height: 125vh; /* Adjust size as needed */
  transform: ${({ translateY, side }) => `translate(-50%, ${translateY}%)`};
  transition: transform 0.2s ease-out;
  z-index: 1;
  pointer-events: none;
  left: ${({ side }) =>
    side === "left" ? "5%" : "95%"}; /* Align left or right */

  @media screen and (max-width: 768px) {
    height: 120vh;
    left: ${({ side }) =>
      side === "left" ? "8%" : "92%"}; /* Align left or right */
  }

  @media screen and (max-width: 480px) {
    height: 120vh;
    left: ${({ side }) =>
      side === "left" ? "8%" : "92%"}; /* Align left or right */
  }
`;
// const TextH1 = styled.h1`
//   font-family: Atop;
//   font-weight: bold;
//   font-size: 62px;
//   color: white;
//   line-height: 60px;
//   @media screen and (max-width: 768px) {
//     font-size: 32px;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 24px;
//   }
// `;

// const TextH2 = styled.h1`
//   font-family: Party Vibes;
//   font-weight: bold;
//   font-size: 62px;
//   color: white;
//   line-height: 60px;
//   @media screen and (max-width: 768px) {
//     font-size: 32px;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 24px;
//   }

//   & > span {
//     font-family: Party Vibes;
//   }
// `;

const Logo = styled.img`
  position: fixed;
  width: 150px;
  height: 70px;
  z-index: 1;
  top: 20px;
  left: 20px;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 48px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
    height: 29px;
  }
`;
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const movementSpeed = 0.1;
    const movementRange = 5;
    setTranslateY((prevTranslateY) => {
      let newTranslateY = prevTranslateY;

      if (window.scrollY > 0) {
        newTranslateY = Math.min(newTranslateY + movementSpeed, movementRange);
      } else {
        newTranslateY = Math.max(newTranslateY - movementSpeed, -movementRange);
      }

      return newTranslateY;
    });

    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setTranslateY(0);
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <ImageLayer
        side="left"
        imageUrl="/images/planet1.png"
        translateY={translateY}
      />
      <ImageLayer
        side="right"
        imageUrl="/images/planet2.png"
        translateY={translateY}
      />

      <Sidebar $isOpen={isOpen} toggle={toggle} />
      {/* <Navbar toggle={toggle}/> */}
      <HeroSection />
      <Logo src={logo} alt="logo" />
      <VideoSection />
      {/* <TextH1>EVERY MEME IN ONE...WITH TITS</TextH1>
      <TextH2>
        THE UNIVERSE WE ARE ALL <span style={{ color: "#fab3ed" }}>TITTO</span>.
      </TextH2> */}
      <Pieces />
      {/* <ContactForm {...contactForm} /> */}
      <Footer />
    </Container>
  );
};

export default Home;
