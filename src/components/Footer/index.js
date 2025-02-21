import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  //function that scrolls to top of page
  //   const toggleHome = () => {
  //     scroll.scrollToTop();
  //   };

  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/" onClick={toggleHome}>
                            Indigenous Iron Construction
                        </SocialLogo>
                        <WebsiteRights>Indigenous Iron © {new Date().getFullYear()} All rights reserved</WebsiteRights> */}
            <SocialIcons>
              <SocialIconLink
                href="//www.twitter.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
