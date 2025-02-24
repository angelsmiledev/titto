import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import InstagramIcon from "../../images/socials/instagram.png";
import TelegramIcon from "../../images/socials/telegram.png";
import TwitterIcon from "../../images/socials/twitter.png";

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
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <img src={InstagramIcon} alt="instagram" width={70} />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                <img src={TelegramIcon} alt="telegram" width={70} />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <img src={TwitterIcon} alt="twitter" width={70} />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
