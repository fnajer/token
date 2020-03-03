import React, { Component } from 'react'
import './styles.scss'

class Burger extends Component {
  render() {
    const { opened, ...restProps } = this.props
    return (
      <button {...restProps} className={`burger-btn ${opened ? 'burger-open' :''}`}></button>
    )
  }
}

export default Burger