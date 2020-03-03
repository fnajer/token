import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Container, BGContainerCSS } from 'shared/layout/Container';
import Heading from 'shared/components/Heading';
import Text from 'shared/components/Text';

import platform from './platform.jpg';

import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const BGWrapper = styled.div`
  @media (max-width: ${SCREEN_SIZES.beforeXLARGE}) {
    padding-top: 475px;
    background: url(${platform}) 65% 40% no-repeat;
  }

  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    background: url(${platform}) 92% 20% no-repeat;
    ${BGContainerCSS}
  }
`

const ColPlatform = styled.div`
  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    max-width: 402px;
    margin-left: right;
  }
`

const Row = styled.div`
  margin: 0 auto;
`

function Platform() {
  return (
    <BGWrapper>
      <Container>
        <Row>
          <ColPlatform>
            <Heading theme={themes.DARK}>
              <FormattedMessage id="platform.title" />
            </Heading>
            <Text theme={themes.DARK}>
              <FormattedMessage id="platform.description" />
            </Text>
          </ColPlatform>
        </Row>
      </Container>
    </BGWrapper>
  );
}

export default Platform;
