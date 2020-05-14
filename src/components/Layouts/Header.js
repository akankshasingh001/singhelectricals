import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import ImageSlider from './ImageSlider';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <ImageSlider />
      </Fragment>
    );
  }
}

export default Header;
