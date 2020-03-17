import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 1px;
  color: rgba(20, 16, 41, 0.6);
  text-transform: uppercase;

  align-self: self-start;
  background: none;
  color: dodgerblue;
  padding: 0;
`

function ReadMore({ children, opened, closeText, ...restProps }) {
  return (
    <Button {...restProps} >
      {opened ? closeText : children}
    </Button>
  );
}

export default ReadMore;
