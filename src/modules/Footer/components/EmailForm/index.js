import React, { Component } from 'react';
import styled from 'styled-components';

import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const Form = styled.form`
  position: relative;
  input {
    width: 264px;
    padding: 12px 52px 12px 16px;
    border-radius: 15px;
    background-color: rgba(20, 16, 41, 0.02);
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: rgba(20, 16, 41, 0.6);
  }
  submit {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    box-shadow: 0 8px 8px -4px rgba(69, 121, 245, 0.12), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(69, 121, 245, 0.24);
    background-color: #4579f5;
  }
  @media (max-width: ${SCREEN_SIZES.SMALL}) {
    flex-grow: 1;
    margin-top: 25px;
    width: 100%;
    input {
      width: 100%;
    }
  }
`

class EmailForm extends Component {
  render() {
    return (
      <Form>
        <input type="text" placeholder="Email"/>
        <submit>
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12">
            <g fill="none" fill-rule="evenodd">
                <path d="M-9 18V-6h24v24z"/>
                <path fill="#E0E0FF" fill-rule="nonzero" d="M.29 9.88L4.17 6 .29 2.12A.996.996 0 1 1 1.7.71L6.29 5.3c.39.39.39 1.02 0 1.41L1.7 11.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"/>
            </g>
          </svg>
        </submit>
      </Form>
    )
  }
}

export default EmailForm