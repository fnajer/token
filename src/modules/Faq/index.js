import React from 'react';
import styled from 'styled-components';
import { ScreenClassRender } from 'react-grid-system'

import { Container } from 'shared/layout/Container';
import Heading from 'shared/components/Heading';
import Spoiler from './components/Spoiler';

import SPOILERS from 'shared/constants/spoilers'
import * as themes from 'shared/constants/themes'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';

const Row = styled.div`
  @media (min-width: ${SCREEN_SIZES.LARGE}) {
    display: flex;
    flex-wrap: wrap;
  }
`
const SpoilersPair = styled.div`
  display: flex;
  margin-bottom: 16px;
  *:first-child {
    margin-right: 30px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

function Faq() {
  return (
    <Container>
      <Heading theme={themes.DARK}>FAQ</Heading>
      <Row>
        <ScreenClassRender
            render={screenClass => {
              if (screenClass === 'xs' || screenClass === 'sm' || screenClass === 'md') {
                return (
                  <>
                    {SPOILERS.map(spoilersPair => (
                      spoilersPair.map(spoiler => (
                        <Spoiler key={spoiler.title} item={spoiler} />
                      ))
                    ))}
                  </>
                )
              }

              return (
                <>
                  {SPOILERS.map(spoilersPair => (
                    <SpoilersPair key={spoilersPair[0].title}>
                      {spoilersPair.map(spoiler => (
                        <Spoiler key={spoiler.title} item={spoiler} />
                      ))}
                    </SpoilersPair>
                  ))}
                </>
              )
            }}
          />
      </Row>
    </Container>
  );
}

export default Faq;
