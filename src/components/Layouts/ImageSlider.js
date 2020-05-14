import React, { Component } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

class ImageSlider extends Component {
  state = {
    useGPURender: true,
    showNavs: true,
    showBullets: true,
    navStyle: 1,
    slideDuration: 0.5,
    bgColor: '#000000'
  };
  render() {
    const images = [
      {
        url:
          'https://image.lampsplus.com/is/image/cropped/43J17cropped.fpx?qlt=65&wid=780&hei=780&op_sharpen=1&fmt=jpeg'
      },
      {
        url:
          'https://image.lampsplus.com/is/image/cropped/9J647cropped.fpx?qlt=65&wid=780&hei=780&op_sharpen=1&fmt=jpeg'
      },
      {
        url:
          'https://image.lampsplus.com/is/image/cropped/41M02cropped.fpx?qlt=65&wid=780&hei=780&op_sharpen=1&fmt=jpeg'
      },
      {
        url:
          'https://image.lampsplus.com/is/image/cropped/7C391cropped.fpx?qlt=65&wid=780&hei=780&op_sharpen=1&fmt=jpeg'
      },
      { url: 'images/5.jpg' },
      { url: 'images/6.jpg' },
      { url: 'images/7.jpg' }
    ];
    return (
      <div>
        <SimpleImageSlider
          width={window.innerWidth}
          height={504}
          images={images}
          useGPURender={this.state.useGPURender}
          showNavs={this.state.showNavs}
          showBullets={this.state.showBullets}
          navStyle={this.state.navStyle}
          slideDuration={this.state.slideDuration}
        />
      </div>
    );
  }
}

export default ImageSlider;
