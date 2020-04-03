import React, { useState } from 'react';
import { ScreenClassRender } from 'react-grid-system'

import { Container } from 'shared/layout/Container';
import { ControlsGroup, Control } from 'shared/components/Carousel/Controls';

import { CarouselList, CarouselItem } from './components/Carousel';
import { TabsList, TabsItem } from './components/Tabs';
import Tabs from 'shared/components/Tabs';
import Carousel from 'shared/components/Carousel';

import PERSONS from 'shared/constants/persons'

import leftIconPath from 'modules/Team/svg/left.svg';
import rightIconPath from 'modules/Team/svg/right.svg';

function Team() {
  const [activeTab, setTab] = useState(PERSONS[0])

  return (
    <Container id="team">
      <Tabs 
        activeTab={activeTab} 
        setTab={setTab} 
        listItems={PERSONS}
        TabsList={TabsList}
        TabsItem={TabsItem}
      />
      <ScreenClassRender
        render={screenClass => {
          if (screenClass === 'xs' || screenClass === 'sm' || screenClass === 'md') {
            return (
              <CarouselList mobile={true}> 
                {activeTab.list.map(item => (
                  <CarouselItem key={item.name} item={item} mobile={true} />
                ))}
              </CarouselList>
            )
          }

          return (
            <Carousel 
              length={activeTab.list.length}
              controls={(backCb, nextCb) => (
                <ControlsGroup>
                  <Control onClick={backCb} icon={leftIconPath}/>
                  <Control onClick={nextCb} icon={rightIconPath}/>
                </ControlsGroup>
              )}
            >
              {position => (
                <CarouselList mobile={false} style={{ marginLeft: position + 'px' }}> 
                  {activeTab.list.map(item => (
                    <CarouselItem key={item.name} item={item} mobile={false} />
                  ))}
                </CarouselList>
              )}
            </Carousel>
          )
        }}
      />
    </Container>
  );
}

export default Team;
