import React from 'react';
import styled from 'styled-components';

import { Container } from 'shared/layout/Container';
import Heading from 'shared/components/Heading';

import Card from './components/Card';

import cases from 'shared/constants/cases'
import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const Col = styled.div`
 
`
const Row = styled.div`
  margin: 0 auto;
`
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`
function Case() {
  return (
    <Container>
      <Row>
        <Col>
          <Heading theme={themes.DARK}>Case study of the BitTeam network application</Heading>
          <Cards>
            {cases.map(card => (
              <Card card={card} />
            ))}
          </Cards>
        </Col>
      </Row>
    </Container>
  );
}

export default Case;
