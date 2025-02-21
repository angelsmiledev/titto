import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import styled from "styled-components";
import VideoSection from "../components/VideoSection";
import Pieces from "../components/Pieces";
import logo from "../images/logo.png";

const Container = styled.div`
  background-image: url("/images/bg.webp"); /* Replace with your image URL */
  background-repeat: repeat; /* Ensure it repeats */
  background-size: auto; /* Keeps the original size of the image */
  min-height: 100vh; /* Makes sure it covers the full height of the page */
  background-position: center; /* Optional: center the background image */
  display: block;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-attachment: fixed;
`;

const TextH1 = styled.h1`
  font-family: Atop;
  font-weight: bold;
  font-size: 62px;
  color: white;
  line-height: 60px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const TextH2 = styled.h1`
  font-family: Party Vibes;
  font-weight: bold;
  font-size: 62px;
  color: white;
  line-height: 60px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }

  & > span {
    font-family: Party Vibes;
  }
`;

const Logo = styled.img`
  position: fixed;
  width: 150px;
  height: 70px;
  z-index: 1;
  top: 20px;
  left: 20px;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Sidebar $isOpen={isOpen} toggle={toggle} />
      {/* <Navbar toggle={toggle}/> */}
      <HeroSection />
      <Logo src={logo} alt="logo" />
      <VideoSection />
      <TextH1>EVERY MEME IN ONE...WITH TITS</TextH1>
      <TextH2>
        THE UNIVERSE WE ARE ALL <span style={{ color: "#fab3ed" }}>TITTO</span>.
      </TextH2>
      <Pieces />
      {/* <ContactForm {...contactForm} /> */}
      <Footer />
    </Container>
  );
};

export default Home;
