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
import { footerMenuLinks, footerMenuLinksExtra } from 'shared/constants/menu'

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
  // state = {
  //   activeLang: LANGS[0],
  // }

  // changeLang = lang => {
  //   this.setState({ activeLang: lang })
  // }

  render() {
    const { activeLang, changeLang } = this.props
    return (
      <FooterContainer>
        <FooterTop>
          <LogoName>BitTeam</LogoName>
          <LanguageSelector
            activeLang={activeLang} 
            changeLang={changeLang} 
          />
          <EmailForm />
          <Social />
        </FooterTop>
        <Menu 
          position={positions.FOOTER}
          items={footerMenuLinks}
        />
        <FooterBottom>
          <span>
            &copy; BitTeam, 2020. {' '}
            <FormattedMessage id="footer.copyright" />
          </span>
          <Menu 
            position={positions.FOOTER_EXTRA}
            items={footerMenuLinksExtra}
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
