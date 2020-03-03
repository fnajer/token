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
          <TelegramIcon />
        </li>
        <li>
          <BitcoinIcon />
        </li>
        <li>
          <FacebookIcon />
        </li>
        <li>
         <GithubIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <YoutubeIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </SocialList>
    )
  }
}

export default Social