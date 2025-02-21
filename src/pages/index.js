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
  font-weight: bold;
  color: white;
  line-height: 60px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

const Logo = styled.img`
  position: fixed;
  width: 150px;
  height: 150px;
  z-index: 1;
  top: 20px;
  left: 20px;
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
      <TextH1>THE UNIVERSE WE ARE ALL TITTO.</TextH1>
      <Pieces />
      {/* <ContactForm {...contactForm} /> */}
      <Footer />
    </Container>
  );
};

export default Home;
