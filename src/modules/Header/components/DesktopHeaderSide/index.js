import React, { Component } from 'react'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl'

import Logo from '../Logo';
import Menu from 'shared/components/Menu'
import Button from 'shared/components/Button'
import LanguageSelectorBase from 'shared/components/LanguageSelector'

import * as positions from 'shared/constants/positions'
import * as themes from 'shared/constants/themes'

const RightSide = styled.div`
  display: flex;
`
const LanguageSelector = styled(LanguageSelectorBase)`
  width: 90px;
  margin-right: 12px;
`
const LeftButton = styled(Button)`
  margin-right: 12px;
`

class Header extends Component {
  render() {
    return (
      <>
        <Logo light={true}/>
        <RightSide>
          <Menu 
            position={positions.HEADER}
            items={[
              <FormattedMessage id="header.menu.telegram" />, 
              <FormattedMessage id="header.menu.howItWorks" />, 
              <FormattedMessage id="header.menu.signIn" />
            ]}
          />
          <LanguageSelector 
            withNames={true}
            activeLang={this.props.activeLang} 
            changeLang={this.props.changeLang} 
          />
          <LeftButton theme={themes.LIGHT}>
            <FormattedMessage id="header.buttons.market" />
          </LeftButton>
          <Button theme={themes.LIGHT}>
            <FormattedMessage id="header.buttons.exchange" />
          </Button>
        </RightSide>
      </>
    )
  }
}

export default Header
