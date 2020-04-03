import React, { Component } from 'react'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Button from 'shared/components/Button';
import MobileMenu from 'shared/components/Menu/mobile';
import LanguageView from '../LanguageView';
import LanguageSelectorMobile from 'shared/components/LanguageSelector/mobile'

import * as themes from 'shared/constants/themes'
import headerMenuItems from 'shared/constants/headerMenu'
import './styles.scss'

const TopButton = styled(Button)`
  margin-bottom: 4px;
`

class Header extends Component {
  state = {
    langIsOpen: false
  }

  openLangMenu = () => {
    this.setState({ langIsOpen: !this.state.langIsOpen })
  }

  render() {
    
    return (
      <div className="mobile-header">
        <div className={`mobile-header__body ${this.props.opened && !this.state.langIsOpen ? 'menu-open' : 'menu-close'}`}>
          <MobileMenu items={headerMenuItems} />
          <LanguageView 
            activeLang={this.props.activeLang}
            toggleMenu={this.openLangMenu}
          />
          <TopButton theme={themes.LIGHT}>
            <FormattedMessage id="shared.buttons.join" />
          </TopButton>
          <Button theme={themes.LIGHT}>
            <FormattedMessage id="shared.buttons.read" />
          </Button>
        </div>
        <LanguageSelectorMobile 
          opened={this.state.langIsOpen} 
          activeLang={this.props.activeLang} 
          changeLang={this.props.changeLang}
          toggleMenu={this.openLangMenu}
        />
      </div>
    )
  }
}

export default Header
