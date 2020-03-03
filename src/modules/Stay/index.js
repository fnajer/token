import React from 'react';
import styled from 'styled-components';

import { Container } from 'shared/layout/Container';
import Heading from 'shared/components/Heading';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button';

import stay from './stay.svg';
import stayMobile from './stay-mobile.svg';

import czechSvgPath from './czech-lang.svg';
import singaporeSvgPath from './singapore-lang.svg';

import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const BGWrapper = styled.div`
  @media (max-width: ${SCREEN_SIZES.beforeLARGE}) {
    padding: 24px;
    background: url(${stayMobile}) 50% 100% no-repeat;
    background-size: cover;
    border-radius: 24px;
  }
`
const StayContainer = styled(Container)`
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    padding: 95px;
    background: url(${stay}) 50% 100% no-repeat;
    background-size: cover;
    border-radius: 40px;
  }
`

const LeftButton = styled(Button)`
  margin-right: 24px;
  @media (min-width: ${SCREEN_SIZES.LARGE}) and (max-width: ${SCREEN_SIZES.beforeXLARGE}), (max-width: ${SCREEN_SIZES.MEDIUM}) {
    margin-bottom: 16px;
  }
`

const Row = styled.div`
  margin: 0 auto;

  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    display: flex;
    justify-content: space-between;
  }
`
const Col = styled.div`
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    max-width: 350px;
    *:last-child {
      margin-bottom: 0;
    }
  }
`
const ColAdresses = styled.div`
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
  background-color: #ffffff;
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    max-width: 445px;
    padding: 40px;
  }
`
const Address = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 4px;
  background-color: rgba(20, 16, 41, 0.02);
  margin-bottom: 24px;
  padding-left: 104px;
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
`
const AddressCircle = styled.div`
  position: absolute;
  left: 16px;
  top: 16px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #ffffff url(${props => props.icon}) no-repeat center;
`
const AddressTitle = styled.h5`
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 1px;
  color: rgba(20, 16, 41, 0.6);
`
const AddressParagraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.8);
`

const SubHeading = styled.h4`
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
`
function Stay() {
  return (
    <BGWrapper>
      <StayContainer>
        <Row>
          <Col>
            <SubHeading>Stay up-to-date</SubHeading>
            <Heading theme={themes.LIGHT}>Bit.Team Marketplace</Heading>
            <Text theme={themes.LIGHT}>Bit.Team aims to offer services that provide convenience and simplicity for the growing electronic currency exchange marketplace.</Text>
          </Col>
          <ColAdresses>
            <Address>
              <AddressCircle icon={czechSvgPath} />
              <AddressTitle>Czech Republic</AddressTitle>
              <AddressParagraph>Lublaňská 267/12 Vinohrady, 120 00 Praha 2</AddressParagraph>
            </Address>
            <Address>
              <AddressCircle icon={singaporeSvgPath} />
              <AddressTitle>Singapore</AddressTitle>
              <AddressParagraph>High Street Plaza 77, #09-11, 069533</AddressParagraph>
            </Address>
            <LeftButton theme={themes.BLUE}>Join Us</LeftButton>
            <Button theme={themes.LIGHT}>Read the WhitePaper</Button>
          </ColAdresses>
        </Row>
      </StayContainer>
    </BGWrapper>
  );
}

export default Stay;
