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
  top: 50%;
  width: 40vw; /* Adjust size as needed */
  height: 120vh; /* Adjust size as needed */
  transform: ${({ scale, side }) => `translate(-50%, -50%) scale(${scale})`};
  transition: transform 0.2s ease-out;
  z-index: 0;
  pointer-events: none;
  left: ${({ side }) =>
    side === "left" ? "5%" : "95%"}; /* Align left or right */

  @media screen and (max-width: 768px) {
    height: 90vh;
    left: ${({ side }) => (side === "left" ? "7%" : "93%")};
  }

  @media screen and (max-width: 480px) {
    height: 90vh;
    left: ${({ side }) => (side === "left" ? "7%" : "93%")};
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
  const [scale, setScale] = useState(1); // Original size

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Zoom out effect on scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const zoomOut = 1 - scrollPosition * 0.0001; // Faster zoom-out
    setScale(Math.max(0.8, zoomOut)); // Zoom out to 70% of original size

    clearTimeout(window.scrollTimeout);
    // Reset when scrolling stops
    window.scrollTimeout = setTimeout(() => {
      setScale(1);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <ImageLayer side="left" imageUrl="/images/planet1.png" scale={scale} />
      {/* Fixed image on the right */}
      <ImageLayer side="right" imageUrl="/images/planet2.png" scale={scale} />
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
