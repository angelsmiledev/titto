import React from "react";
import HeroSection from "../components/HeroSection";
// import Footer from "../components/Footer";
import styled from "styled-components";
import VideoSection from "../components/VideoSection";
import Pieces from "../components/Pieces";
import logo from "../images/logo.png";
import Planets from "../components/Layers";

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
  // background-attachment: fixed;
  position: relative;
  overflow: hidden;
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
    height: 48px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
    height: 29px;
  }
`;
const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Planets />
      {/* <Footer /> */}
      <Logo src={logo} alt="logo" />
      <VideoSection />
      <Pieces />
    </Container>
  );
};

export default Home;
