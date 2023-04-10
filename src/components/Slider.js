import React from "react";
import "../assets/js/main.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slider() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <div className="container">
        <div className="home-demo">
          <h3>Carousel</h3>
          <OwlCarousel
            {...options}
            className="owl-carousel owl-theme owl-slider"

            // items="4"
            // autoplay ={true}
            // nav
            // dots
            // loop
            // margin={20}
          >
            <div className="item">
              <h2>Swipe</h2>
            </div>
            <div className="item">
              <h2>Drag</h2>
            </div>
            <div className="item">
              <h2>Responsive</h2>
            </div>
            <div className="item">
              <h2>CSS3</h2>
            </div>
            <div className="item">
              <h2>Fast</h2>
            </div>
            <div className="item">
              <h2>Easy</h2>
            </div>
            <div className="item">
              <h2>Free</h2>
            </div>
            <div className="item">
              <h2>Upgradable</h2>
            </div>
            <div className="item">
              <h2>Tons of options</h2>
            </div>
            <div className="item">
              <h2>Infinity</h2>
            </div>
            <div className="item">
              <h2>Auto Widths</h2>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Slider;
