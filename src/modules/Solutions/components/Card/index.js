import React from 'react';
import styled, { css } from 'styled-components';
import { ScreenClassRender } from 'react-grid-system'

import Heading from 'shared/components/Heading';

import SolutionsMobile from './solutions-mobile.png';
import SolutionsDesktop from './solutions.svg';

import * as themes from 'shared/constants/themes'
import * as headingSizes from 'shared/constants/headingSizes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

import './styles.scss'

const CardWrapper = styled.div`
  border-radius: 12px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
  background-color: #ffffff;
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    display: flex;
  }
`

const CardHeader = styled.div`
  position: relative;
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    height: 100%;
    flex-basis: 324px;
    flex-shrink: 0;
  }
`
const CardBody = styled.div`
  padding: 24px;
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    padding: 24px 32px;
  }
  *:last-child {
    margin-bottom: 0;
  }
`

const CardParagraphStyles = css`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.6);
`
const ParagraphInBodyStart = styled.p`
  ${CardParagraphStyles};
  margin-bottom: 16px;
`
const ParagraphInBodyEnd = styled.p`
  ${CardParagraphStyles};
  margin-bottom: 24px;
`
const CardListItem = styled.li`
  ${CardParagraphStyles};
  position: relative;
  &:before {
    content: "";
    background-color: #4579f5;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    left: -24px;
    top: 9px;
  }
`
const CardList = styled.ul`
  padding-left: 40px; 
  margin-bottom: 16px;
`
const Solutions = styled.img.attrs(props => ({
    src: props.mobile ? SolutionsMobile : SolutionsDesktop,
    alt: 'solutions'
}))`
  width: 100%;
  border-radius: ${props => props.mobile ? '12px 12px 0 0' : '12px 0 0 12px'};
`

function Card({ activeTab }) {
  const RoleIcon = activeTab.img || '';

  return (
    <CardWrapper>
      <CardHeader>
        <ScreenClassRender
          render={screenClass => {
            if (screenClass === 'xs' || screenClass === 'sm' || screenClass === 'md')
              return <Solutions mobile={true} />
            return <Solutions mobile={false} />
          }}
        />
        <RoleIcon />
      </CardHeader>
      <CardBody>
        <Heading 
          size={headingSizes.MEDIUM} 
          theme={themes.DARK}
        >
            {activeTab.name}
        </Heading>
        {activeTab.descriptionsStart && activeTab.descriptionsStart.map(item => (
          <ParagraphInBodyStart>
            {item}
          </ParagraphInBodyStart>
        ))}
        <CardList>
          {activeTab.list && activeTab.list.map(item => (
            <CardListItem>
              {item}
            </CardListItem>
          ))}
        </CardList>
        {activeTab.descriptionsEnd && activeTab.descriptionsEnd.map(item => (
          <ParagraphInBodyEnd>
            {item}
          </ParagraphInBodyEnd>
        ))}
      </CardBody>
    </CardWrapper>
  );
}

export default Card;
