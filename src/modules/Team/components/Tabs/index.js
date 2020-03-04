import styled from 'styled-components';

import Heading from 'shared/components/Heading';

import * as SCREEN_SIZES from 'shared/constants/screenSizes';
import * as themes from 'shared/constants/themes'

export const TabsList = styled.ul`
  
`
export const TabsItem = styled(Heading).attrs(props => ({
  theme: props.active ? themes.DARK : themes.DISABLED,
}))`
  :hover {
    color: ${props => props.active ? 'rgba(20, 16, 41, 0.6)' : 'rgba(20, 16, 41, 0.4);'};
  }
  @media (min-width: ${SCREEN_SIZES.SMALL}) {
    display: inline-block;
    cursor: pointer;
    margin-right: 72px;
    &:last-child {
      margin-right: 0;
    }
  }
`
