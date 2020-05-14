import React, { Component, Fragment } from 'react';
import Navigation from './Navigation';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <ImageSlider />
        <Footer />
      </Fragment>
    );
  }
}

export default Header;
