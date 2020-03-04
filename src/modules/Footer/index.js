import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { Container } from 'shared/layout/Container';

import EmailForm from './components/EmailForm';
import Social from './components/Social';
import Menu from 'shared/components/Menu'

import LanguageSelectorBase from 'shared/components/LanguageSelector'

import * as positions from 'shared/constants/positions'
import * as SCREEN_SIZES from 'shared/constants/screenSizes';
import LANGS from 'shared/constants/langs';

const FooterContainer = styled(Container)`
  padding-bottom: 0;
`
const LogoName = styled.span`
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -1px;
  color: rgba(20, 16, 41, 0.8);
`

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (max-width: ${SCREEN_SIZES.beforeLARGE}) {
    flex-wrap: wrap;
  }
`
const LanguageSelector = styled(LanguageSelectorBase)`
  background-color: rgba(20, 16, 41, 0.02);
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: rgba(20, 16, 41, 0.6);
  padding: 25px 0 10px 0;
  @media (max-width: ${SCREEN_SIZES.beforeLARGE}) {
    flex-wrap: wrap;
  }
`
const Made = styled.span`
  span {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
    color: rgba(20, 16, 41, 0.8);
  }
`
class FooterComponent extends React.Component {
  state = {
    activeLang: LANGS[0],
  }

  changeLang = lang => {
    this.setState({ activeLang: lang })
  }

  render() {
    return (
      <FooterContainer>
        <FooterTop>
          <LogoName>BitTeam</LogoName>
          <LanguageSelector
            activeLang={this.state.activeLang} 
            changeLang={this.state.changeLang} 
          />
          <EmailForm />
          <Social />
        </FooterTop>
        <Menu 
          position={positions.FOOTER}
          items={[
            <FormattedMessage id="footer.menu.home" />, 
            <FormattedMessage id="footer.menu.marketplace" />, 
            <FormattedMessage id="footer.menu.solutions" />,
            <FormattedMessage id="footer.menu.howItWorks" />, 
            <FormattedMessage id="footer.menu.case" />, 
            <FormattedMessage id="footer.menu.p2p" />,
            <FormattedMessage id="footer.menu.platform" />, 
            <FormattedMessage id="footer.menu.team" />, 
            <FormattedMessage id="footer.menu.partners" />,
            <FormattedMessage id="footer.menu.faq" />, 
            <FormattedMessage id="footer.menu.contacts" />,
          ]}
        />
        <FooterBottom>
          <span>
            &copy; BitTeam, 2020. {' '}
            <FormattedMessage id="footer.copyright" />
          </span>
          <Menu 
            position={positions.FOOTER_EXTRA}
            items={[
              <FormattedMessage id="footer.menuExtra.terms" />, 
              <FormattedMessage id="footer.menuExtra.policy" />,
              <FormattedMessage id="footer.menuExtra.sales" />, 
              <FormattedMessage id="footer.menuExtra.legal" />,
            ]}
          />
          <Made>
            <FormattedMessage id="footer.madeBy" />
            <span> roobinium</span>
          </Made>
        </FooterBottom>
      </FooterContainer>
    )
  }
}

export default FooterComponent
