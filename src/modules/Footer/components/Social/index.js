import React, { Component } from 'react'
import styled from 'styled-components';

import TelegramIcon from 'shared/icons/social/telegram.svg';
import BitcoinIcon from 'shared/icons/social/bit.svg';
import FacebookIcon from 'shared/icons/social/facebook.svg';
import GithubIcon from 'shared/icons/social/github.svg';
import InstagramIcon from 'shared/icons/social/instagram.svg';
import YoutubeIcon from 'shared/icons/social/youtube.svg';
import TwitterIcon from 'shared/icons/social/twitter.svg';

import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const SocialList = styled.ul`
  display: flex;
  width: 600px;
  justify-content: space-between;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: rgba(20, 16, 41, 0.02);
    cursor: pointer;
    &:hover svg {
      opacity: 1;
    }
    svg {
      opacity: 0.6;
    }
  }
  @media (max-width: ${SCREEN_SIZES.beforeLARGE}) {
    margin-top: 25px;
    width: 100%;
  }
  @media (max-width: ${SCREEN_SIZES.SMALL}) {
    flex-wrap: wrap;
    justify-content: center;
    li {
      flex-shrink: 0;
      margin-right: 30px;
    }
  }
`
class Social extends Component {
  render() {
    return (
      <SocialList>
        <li>
          <a href="https://t-do.ru/bitteaminfo">
            <TelegramIcon />
          </a>
        </li>
        <li>
          <a href="https://forum.bits.media/index.php?/topic/86594-annitobitteam-market-place-%D1%81%D1%82%D0%B0%D0%BD%D1%8C-%D1%87%D0%B0%D1%81%D1%82%D1%8C%D1%8E-%D0%B1%D1%83%D0%B4%D1%83%D1%89%D0%B5%D0%B3%D0%BE/">
            <BitcoinIcon />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/token.bit.team/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/bit-team-marketplace/">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC2cHTnl8OhsKGXIiZngn6gA">
            <YoutubeIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Bitteam_ico">
            <TwitterIcon />
          </a>
        </li>
      </SocialList>
    )
  }
}

export default Social