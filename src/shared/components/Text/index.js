import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import * as themes from 'shared/constants/themes'

function mapThemeToClass(className, theme) {
  return `${className ? className : ''}` +
      `${theme === themes.LIGHT ? 'text_theme_light' : ''}` +
      `${theme === themes.DARK ? 'text_theme_dark' : ''}`;
}

export default function Text(props) {
  const {children, className, theme, ...restProps} = props
  const classes = mapThemeToClass(className, theme)

  return (
    <p {...restProps} className={`text ${classes}`}>
      {children}
    </p>
  )
}
Text.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  className: PropTypes.string,
}
