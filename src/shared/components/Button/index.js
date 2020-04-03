import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import * as themes from 'shared/constants/themes'

function mapThemeToClass(className, theme) {
  return ` ${className ? className : ''}` +
      ` ${theme === themes.LIGHT ? 'button_theme_light' : ''}` +
      ` ${theme === themes.BLUE ? 'button_theme_blue' : ''}`;
}

export default function Button(props) {
  const {children, className, theme, ...restProps} = props
  const classes = mapThemeToClass(className, theme)

  const Tag = props.href ? 'a' : 'button'
  return (
    <Tag {...restProps} className={`button ${classes}`}>
      {children}
    </Tag>
  )
}
Button.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  className: PropTypes.string,
}
