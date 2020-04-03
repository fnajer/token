import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Header from 'modules/Header';
import { Container } from 'shared/layout/Container';
import Heading from 'shared/components/Heading';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button';

import promo from './promo.jpg';
import promoMobileMedium from './promo-mobile-medium.jpg';
import promoMobile from './promo-mobile.jpg';

import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const BGWrapper = styled.div`
  @media (max-width: ${SCREEN_SIZES.SMALL}) {
    background: url(${promoMobile}) 50% 100% no-repeat;
    background-size: cover;
  }

  @media (min-width: ${SCREEN_SIZES.SMALL}) and (max-width: ${SCREEN_SIZES.MEDIUM}) {
    background: url(${promoMobileMedium}) 50% 70% no-repeat;
    background-size: cover;
  }

  @media (min-width: ${SCREEN_SIZES.MEDIUM}) {
    background: url(${promo}) 50% 100% no-repeat;
    background-size: cover;
  }
`
const PromoContainer = styled(Container)`
  @media (max-width: ${SCREEN_SIZES.MEDIUM}) {
    padding-top: 32px;
    padding-bottom: 16px;
  }
  @media (min-width: ${SCREEN_SIZES.MEDIUM}) {
    padding-top: 124px;
    padding-bottom: 124px;
  }
`
const ColPromo = styled.div`
  @media (min-width: ${SCREEN_SIZES.MEDIUM}) {
    max-width: 445px;
  }
`
const LeftButton = styled(Button)`
  @media (min-width: ${SCREEN_SIZES.MEDIUM}) {
    margin-right: 24px;
  }
  @media (max-width: ${SCREEN_SIZES.MEDIUM}) {
    margin-bottom: 16px;
  }
`

const Row = styled.div`
  margin: 0 auto;
`

function Promo({ activeLang, changeLang }) {
  return (
    <BGWrapper>
      <Header activeLang={activeLang} changeLang={changeLang} />
      <PromoContainer>
        <Row>
          <ColPromo>
            <Heading theme={themes.LIGHT} id="home">
              <FormattedMessage id="main.title" />
            </Heading>
            <Text theme={themes.LIGHT}>
              <FormattedMessage id="main.description" />
            </Text>
            <LeftButton theme={themes.LIGHT} href="https://bit.team/">
              <FormattedMessage id="shared.buttons.join" />
            </LeftButton>
            <Button theme={themes.BLUE} href="https://drive.google.com/open?id=1U_BhoINY7-rLJVzQb5tggrR8acN2BO9r">
              <FormattedMessage id="shared.buttons.read" />
            </Button>
          </ColPromo>
        </Row>
      </PromoContainer>
    </BGWrapper>
  );
}

export default Promo;
