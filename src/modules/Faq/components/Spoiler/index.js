import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import * as SCREEN_SIZES from 'shared/constants/screenSizes';

import PlusIcon from 'shared/icons/plus.svg';
import MinusIcon from 'shared/icons/minus.svg';

const Spoiler = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
const SpoilerHeading = styled.h4`
  flex-basis: 90%;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.8);
`
const SpoilerParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.6);
  transition: max-height 3.0s, opacity 0.5s, margin-top 0.5s;
  ${props => props.opened ? openedCss : closedCss}
`
const openedCss = css`
  max-height: 1000px;
  opacity: 1;
  margin-top: 24px;
`
const closedCss = css`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.8s, opacity 0.5s, margin-top 0.5s;
`

function SpoilerComponent({ item }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Spoiler>
      <Head onClick={() => setOpen(!isOpen)}>
        <SpoilerHeading>{item.title}</SpoilerHeading>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </Head>
      <SpoilerParagraph opened={isOpen ? true : false}>
        {item.description}
      </SpoilerParagraph>
    </Spoiler>
  );
}

export default SpoilerComponent;
            