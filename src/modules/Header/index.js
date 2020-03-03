import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { ScreenClassRender } from 'react-grid-system';

import { Container } from 'shared/layout/Container';

import DesktopHeaderSide from './components/DesktopHeaderSide';
import MobileHeaderSide from './components/MobileHeaderSide';

import * as SCREEN_SIZES from 'shared/constants/screenSizes';
import LANGS from 'shared/constants/langs';

const Header = styled.header`
  height: 40px;
  padding-top: 8px;
  @media (min-width: ${SCREEN_SIZES.MEDIUM}) {
    height: 72px;
    padding-top: 0;
  }
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding-top: 0;
  padding-bottom: 0;
  @media (min-width: ${SCREEN_SIZES.MEDIUM}) {
    height: 72px;
  }
`

class HeaderComponent extends React.Component {
  // state = {
  //   activeLang: LANGS[0],
  // }

  // changeLang = lang => {
  //   this.setState({ activeLang: lang })
  // }

  render() {
    return (
      <Header>
      <HeaderContainer>
        <ScreenClassRender
          render={screenClass => {
            console.log(screenClass)
            if (screenClass === 'xs' || screenClass === 'sm' || screenClass === 'md') {
              return (
                <MobileHeaderSide 
                  activeLang={this.props.activeLang} 
                  changeLang={this.props.changeLang} 
                />
              )
            }

            return (
              <DesktopHeaderSide 
                activeLang={this.props.activeLang} 
                changeLang={this.props.changeLang} 
              />
            )
          }}
        />
      </HeaderContainer>
    </Header>
    )
  }
}

// function HeaderComponent(props) {
//   const [activeLang, setActiveLang] = useState(LANGS[0]);

//   return (
//     <Header>
//       <HeaderContainer>
//         <ScreenClassRender
//           render={screenClass => {
//             console.log(screenClass)
//             if (screenClass === 'sm' || screenClass === 'md') {
//               return (
//                 <MobileHeaderSide 
//                   activeLang={activeLang} 
//                   changeLang={setActiveLang} 
//                 />
//               )
//             }

//             return (
//               <DesktopHeaderSide 
//                 activeLang={activeLang} 
//                 changeLang={setActiveLang} 
//               />
//             )
//           }}
//         />
//       </HeaderContainer>
//     </Header>
//   )
// }

export default HeaderComponent
