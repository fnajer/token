import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import * as themes from 'shared/constants/themes'
import * as headingSizes from 'shared/constants/headingSizes'

function mapThemeToClass(className, theme) {
  return `${className ? `${className} ` : ''}` +
      `${theme === themes.LIGHT ? 'heading_theme_light' : ''}` +
      `${theme === themes.DARK ? 'heading_theme_dark' : ''}` +
      `${theme === themes.DISABLED ? 'heading_theme_disabled' : ''}`;
}

function mapSizeToClass(size = headingSizes.LARGE) {
   if (size === headingSizes.LARGE) return ['h2', 'heading']
   if (size === headingSizes.MEDIUM) return ['h3', 'heading-medium']
   if (size === headingSizes.SMALL) return ['h4', 'heading-small']
}

export default function Heading(props) {
  const {children, className, theme, size, ...restProps} = props
  const classes = mapThemeToClass(className, theme)
  const [Tag, classOfSize] = mapSizeToClass(size)
  return (
    <Tag {...restProps} className={`${classOfSize} ${classes}`}>
      {children}
    </Tag>
  )
}
Heading.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
}
