import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Container } from 'shared/layout/Container';
import Heading from 'shared/components/Heading';
import Text from 'shared/components/Text';
import Button from 'shared/components/Button';
import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const Wrapper = styled.div`
`
const PromoContainer = styled(Container)`

`
const ColPromoPart = styled.div`
  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    max-width: 350px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Col = styled.div`
  width: 100%;
  @media (max-width: ${SCREEN_SIZES.SMALL}) {
    height: 250px;
    iframe {
      height: inherit;
    }
  }
  @media (min-width: ${SCREEN_SIZES.LARGE}) and (max-width: ${SCREEN_SIZES.beforeXLARGE}) {
    iframe {
      height: 450px;
    }
  }
  @media (max-width: ${SCREEN_SIZES.beforeXLARGE}) {
    margin-bottom: 49px;
  }
  @media (min-width: ${SCREEN_SIZES.XLARGE}) {
    flex-basis: 55%;
  }  
`

function Marketplace() {
  return (
    <Wrapper>
      <PromoContainer>
        <Row>
          <Col>
            <iframe title="marketplace" width="635" height="357" src="https://www.youtube.com/embed/PpNIu8-2bjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          <ColPromoPart>
            <Heading theme={themes.DARK}>
              <FormattedMessage id="marketplace.title" />
            </Heading>
            <Text theme={themes.DARK}>
              <FormattedMessage id="marketplace.description" />
            </Text>
            <Button theme={themes.BLUE}>
              <FormattedMessage id="marketplace.buttons.invest" />
            </Button>
          </ColPromoPart>
        </Row>
      </PromoContainer>
    </Wrapper>
  );
}

export default Marketplace;
