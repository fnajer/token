import React from 'react';
import styled from 'styled-components';
import { ScreenClassRender } from 'react-grid-system'
import { FormattedMessage } from 'react-intl';
import MediaQuery from 'react-responsive'

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
  console.log(12323425);
  return (
    <Container>
      <Heading theme={themes.DARK} id="faq">
        <FormattedMessage id="faq.title" />
      </Heading>
      <Row>
        <MediaQuery maxWidth={1024}>
          {SPOILERS.map(spoilersPair => (
            spoilersPair.map(spoiler => (
              <Spoiler key={spoiler.title} item={spoiler} />
            ))
          ))}
        </MediaQuery>
        <MediaQuery minWidth={1024}>
          {SPOILERS.map((spoilersPair, index) => (
            <SpoilersPair key={index}>
              {spoilersPair.map(spoiler => (
                <Spoiler key={spoiler.title} item={spoiler} />
              ))}
            </SpoilersPair>
          ))}
        </MediaQuery>
        {/* <ScreenClassRender
            render={screenClass => {
              if (['xs', 'sm', 'md'].includes(screenClass)) {
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
                  {SPOILERS.map((spoilersPair, index) => (
                    <SpoilersPair key={index}>
                      {spoilersPair.map(spoiler => (
                        <Spoiler key={spoiler.title} item={spoiler} />
                      ))}
                    </SpoilersPair>
                  ))}
                </>
              )
            }}
          /> */}
      </Row>
    </Container>
  );
}

export default Faq;
