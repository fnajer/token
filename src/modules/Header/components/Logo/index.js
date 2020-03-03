import React, { Component } from 'react'
import LogoSvg from './logo';

class Logo extends Component {
  render() {
    return (
      <LogoSvg mobile={this.props.mobile} light={this.props.light} />
    )
  }
}

export default Logo