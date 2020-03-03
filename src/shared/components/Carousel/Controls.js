import styled from 'styled-components';

export const ControlsGroup = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: -105px;
`
export const Control = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  box-shadow: 0 8px 8px -4px rgba(20, 16, 41, 0.06), 0 2px 4px -1px rgba(20, 16, 41, 0.06), 0 0 1px 0 rgba(20, 16, 41, 0.12);
  background-color: #ffffff;
  cursor: pointer;
  margin-right: 24px;
  background: ${props => `url(${props.icon}) 50% 60% no-repeat`};
  &:last-child {
    margin-right: 0;
  }
`