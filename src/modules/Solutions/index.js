import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Container } from 'shared/layout/Container';
import HeadingBase from 'shared/components/Heading';

import { TabsList, TabsItem } from './components/Tabs';
import Tabs from 'shared/components/Tabs';
import Card from './components/Card';

import ROLES from 'shared/constants/roles'
import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes'

const ColSolutions = styled.div`
  width: 100%;
`
const Row = styled.div`
  
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Heading = styled(HeadingBase)`
  
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    width: 266px;
    flex-shrink: 0;
    margin-right: 23px;
  }
`

function Solutions() {
  const [activeTab, setTab] = useState(ROLES[0])

  return (
    <Container>
      <Row>
        <Heading theme={themes.DARK}>
          <FormattedMessage id="solutions.title" />
        </Heading>
        <Tabs 
          activeTab={activeTab} 
          setTab={setTab} 
          listItems={ROLES}
          TabsList={TabsList}
          TabsItem={TabsItem}
        />
      </Row>
      <Row>
        <ColSolutions>
          <Card activeTab={activeTab} />
        </ColSolutions>
      </Row>
    </Container>
  );
}

export default Solutions;
