import React, { Component } from 'react';

import Logo from '../Logo';
import MobileMenu from './components/MobileMenu';
import BurgerBtn from '../Burger';

class Header extends Component {
  state = {
    menuIsOpen: false
  }

  handleClick = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
  }

  render() {
    const { menuIsOpen } = this.state
    return (
      <>
        <Logo mobile={true} light={true} />
        <MobileMenu 
          opened={menuIsOpen}
          activeLang={this.props.activeLang} 
          changeLang={this.props.changeLang} 
        />
        <BurgerBtn 
          opened={menuIsOpen}
          onClick={this.handleClick} 
        />
      </>
    )
  }
}

export default Header


