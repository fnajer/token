import React from 'react';
import styled from 'styled-components';

import Heading from 'shared/components/Heading';

import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';
import * as headingSizes from 'shared/constants/headingSizes'

const CardContainer = styled.div`
  width: 100%;
  max-width: 350px;
  height: auto;
  min-height: 380px;
  margin-bottom 16px;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    margin-bottom: 0;
  }
`
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.6);
`

const IconCircle = styled.div`
  width: 128px;
  height: 128px;
  margin-bottom: 32px;
  border-radius: 50%;
  background: rgba(69, 121, 245, 0.03) url(${props => props.svgPath}) 50% 50% no-repeat;
`

function Card({ card }) {
  return (
    <CardContainer>
      <IconCircle svgPath={card.img} />
      <Heading theme={themes.DARK} size={headingSizes.MEDIUM}>{card.heading}</Heading>
      <Paragraph>{card.description}</Paragraph>
    </CardContainer>
  );
}

export default Card;
