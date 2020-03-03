import styled, { css } from 'styled-components';

import * as SCREEN_SIZES from 'shared/constants/screenSizes';

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding-top: 72px;
  padding-bottom: 72px;
  @media (max-width: ${SCREEN_SIZES.MEDIUM}) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (min-width: ${SCREEN_SIZES.MEDIUM}) {
    max-width: 736px;
  }

  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    max-width: 960px;
  }

  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    max-width: 1110px;
  }
`

export const BGContainerCSS = css`
  max-width: 1440px;
  margin: 0 auto;
`