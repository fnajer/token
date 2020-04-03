import React, { useState } from 'react'

import './styles.scss'

export default function MobileMenu(props) {
  const {items, className, ...restProps} = props

  return (
    <ul {...restProps} className={`mobile-menu ${className}`}>
      {items.map(item => (
        <li><a href={item.url}>{item.name}</a></li>
      ))}
    </ul>
  )
}
