/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';

import IntlProvider from 'locales/IntlProvider';

import LANGS from 'shared/constants/langs';

setConfiguration({ 
  gutterWidth: 0, 
  containerWidths:	[540, 750, 960, 1110],
  breakpoints: [576, 768, 1024, 1200]
});

const Layout = ({ children }) => {
  const [lang, setLang] = useState(LANGS[0])
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <IntlProvider lang={lang}>
      <ScreenClassProvider>
        {children(lang, setLang)}
      </ScreenClassProvider>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
