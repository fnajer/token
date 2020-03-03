import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: ${props => props.mobile ? '255px' : '350px'};
  height: ${props => props.mobile ? '128px' : '176px'};
  border-radius: 12px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
  background: url(${props => props.src}) center no-repeat;
  &:last-child {
    box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), inset 0 0 1px 0 rgba(20, 16, 41, 0.12);
  }
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  *:first-child {
    margin-bottom: 30px;
  }
  *:last-child {
    margin-bottom: 0;
  }
`

function Card({ item, mobile, ...restProps }) {
  // debugger
  if (mobile) return (
    <CardContainer 
      mobile={mobile} 
      src={mobile ? item.imageMobile : item.image} 
      {...restProps} 
    />
  );
  return (
    <Col>
      <CardContainer 
        mobile={mobile} 
        src={item[0].image} 
        {...restProps} 
      />
      <CardContainer 
        mobile={mobile} 
        src={item[1].image} 
        {...restProps} 
      />
    </Col>
  );
}

export default Card;
