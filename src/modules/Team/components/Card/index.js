import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from 'shared/components/Heading';
import InstagramIcon from 'shared/icons/social/instagram';

import * as themes from 'shared/constants/themes'
import * as headingSizes from 'shared/constants/headingSizes'

import ReadMore from '../ReadMore'
//height: ${props => props.mobile ? ' 336px' : '372px'};
const CardContainer = styled.div`
  width: ${props => props.mobile ? '255px' : '350px'};
  padding: ${props => props.mobile ? ' 16px' : '24px'};
  border-radius: 12px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
  &:last-child {
    box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), inset 0 0 1px 0 rgba(20, 16, 41, 0.12);
  }
  align-self: flex-start;
`
const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${props => props.margin 
    ? (props.mobile ? 'margin-bottom: 4px' : 'margin-bottom: 8px')
    : ''};
  ${props => props.flexColumn ? 'flex-direction: column' : ''};
`
const PersonPosition = styled.span`
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 1px;
  color: rgba(20, 16, 41, 0.6);
`
const Paragraph = styled.p`
  font-size:  ${props => props.mobile ? ' 14px' : '16px'};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.6);

  min-height: 115px;
  overflow: hidden;
  max-height: ${props => props.opened ? '165px' : '115px'};
  transition: max-height 0.3s;
`

const Photo = styled.img.attrs(props => ({
  src: props.src
}))`
  width: ${props => props.mobile ? ' 96px' : '128px'};
  height: ${props => props.mobile ? ' 96px' : '128px'};
  margin-bottom: ${props => props.mobile ? ' 16px' : '24px'};
  border-radius: 50%;
`

function Card({ item, mobile, ...restProps }) {
  // debugger
  const [opened, setOpen] = useState(false);

  return (
    <CardContainer mobile={mobile} {...restProps} >
      <Photo mobile={mobile} src={mobile ? item.imageMobile : item.image} />
      <Row mobile={mobile} margin={true}>
        <PersonPosition>{item.position}</PersonPosition>
        {item.instagram && <InstagramIcon withParent="a" href={item.instagram} bgColor="#0c66c2" />}
      </Row>
      <Heading theme={themes.DARK} size={mobile ? headingSizes.SMALL : headingSizes.MEDIUM}>{item.name}</Heading>
      <Row flexColumn={true}>
        <Paragraph 
          mobile={mobile}
          opened={opened}
        >
          {item.description}
        </Paragraph>
        <ReadMore 
          opened={opened} 
          closeText={"Hide"} 
          onClick={() => setOpen(!opened)}
        >
          Read more
        </ReadMore>
      </Row>
    </CardContainer>
  );
}

export default Card;
