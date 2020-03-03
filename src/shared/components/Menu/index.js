import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import * as positions from 'shared/constants/positions'

function mapThemeToClass(className, position) {
  return ` ${className ? className : ''}` +
      ` ${position === positions.HEADER ? 'menu_position_header' : ''}` +
      ` ${position === positions.FOOTER ? 'menu_position_footer' : ''}` +
      ` ${position === positions.FOOTER_EXTRA ? 'menu_position_footer_extra' : ''}`;
}

export default function Menu(props) {
  const {items, className, position, ...restProps} = props
  const classes = mapThemeToClass(className, position)

  return (
    <ul {...restProps} className={`menu ${classes}`}>
      {items.map(item => (
        <li><a>{item}</a></li>
      ))}
    </ul>
  )
}
Menu.propTypes = {
  items: PropTypes.array,
  position: PropTypes.string,
  className: PropTypes.string,
}
