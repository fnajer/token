import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import flatten from 'flat'
// import { withCookies } from 'react-cookie'
import ruMessages from './ru.json'
import enMessages from './en.json'

//import { LANG_KEY } from 'shared/constants/cookie'

class IntlProviderWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    //    cookies: PropTypes.object,
  }
  state={
    lang: 'en'
  }

  render() {
    //    const { cookies } = this.props
    //    const locale = cookies.get(LANG_KEY) || 'en'
    const locale =  this.state.lang
    const messages = locale === 'ru' ? ruMessages : enMessages

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={flatten(messages)}
        textComponent={React.Fragment}
      >
        {this.props.children}
      </IntlProvider>
    )
  }
}
//withCookies
export default (IntlProviderWrapper)
