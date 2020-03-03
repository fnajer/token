import React from 'react';
import styled from 'styled-components';

import { Container, BGContainerCSS } from 'shared/layout/Container';
import Heading from 'shared/components/Heading';
import Text from 'shared/components/Text';
import FacebookIcon from 'shared/icons/social/facebook';
import TelegramIcon from 'shared/icons/social/telegram';

import whatMobile from './what-mobile.jpg';
import what from './what.jpg';

import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const BGWrapper = styled.div`
  @media (max-width: ${SCREEN_SIZES.beforeXLARGE}) {
    padding-top: 407px;
    background: url(${whatMobile}) 65% 8% no-repeat;
  }

  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    background: url(${what}) 15% 27% no-repeat;
    ${BGContainerCSS}
  }
`
const ColPeer = styled.div`
  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    max-width: 445px;
    margin-left: auto;
  }
`
const Row = styled.div`
  margin: 0 auto;
`
const LinkBlock = styled.div`
  margin-bottom: 72px;
`
const Link = styled.a`
  display: flex;
  align-items: center;
  width: max-content;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.6);
  &:last-child {
    margin-bottom: 0;
  }
`
const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
  background: rgba(44, 165, 224, 0.03);
`

const Note = styled.div`
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
`
function What() {
  return (
    <BGWrapper>
      <Container>
        <Row>
          <ColPeer>
            <Heading theme={themes.DARK}>What is BitTeam?</Heading>
            <Text theme={themes.DARK}>BitTeam implements the concept of the Internet of Money (IoM), which is being developed by</Text>
            <LinkBlock>
              <Link><FacebookIcon withParent={IconCircle} bgColor="#1877f2" />Facebook (Project Libra)</Link>
              <Link><TelegramIcon withParent={IconCircle} bgColor="#2ca5e0" />Telegram (TON)</Link>
            </LinkBlock>
            <Note>
              <Text theme={themes.DARK} style={{ marginBottom: 0 }}>The main network token is BIP (Blockchain Instant Payment).</Text>
            </Note>
          </ColPeer>
        </Row>
      </Container>
    </BGWrapper>
  );
}

export default What;
