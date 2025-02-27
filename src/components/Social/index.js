import React from "react";
import { SocialContainer, SocialIcons, SocialIconLink } from "./SocialElements";

import TelegramIcon from "../../images/socials/telegram.png";
import TwitterIcon from "../../images/socials/twitter.png";

const Social = () => {
  return (
    <SocialContainer>
      <SocialIcons>
        <SocialIconLink href="/" target="_blank" aria-label="Telegram">
          <img src={TelegramIcon} alt="telegram" width="90%" />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
          <img src={TwitterIcon} alt="twitter" width="90%" />
        </SocialIconLink>
      </SocialIcons>
    </SocialContainer>
  );
};

export default Social;
