
import React, { Component } from "react";
import Slider from "react-slick";
import './SliderShow.css'




export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div>
        <Slider className="slider"  ref={slider => (this.slider = slider)} {...settings}>
          <div className="img1">
          </div>
          <div className="img2">
          </div>
          <div className="img3">
          </div>
          <div className="img4">
          </div>
          <div className="img5">
          </div>
          <div className="img6">
          </div>
        </Slider>
      </div>
    );
  }
}