import React, { useRef } from "react";
import Slider from "react-slick";
import RightArrow from "../right-arrow";
import LeftArrow from "../left-arrow";
import "./style.css";
import(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
);

export default function CarouselBlock() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="fonts">
      <div className="CarouselBlock">
        <div style={{ overflow: "hidden" }}>
          <Slider {...settings} ref={sliderRef}>
            <div>
              <div>Home / Why work with us</div>
              <h2>Headline #1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <div>Home / Why work with us</div>
              <h2>Headline #2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <div>Home / Why work with us</div>
              <h2>Headline #3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Slider>
        </div>
        <div className="arrow-container">
          <LeftArrow onClick={() => sliderRef.current.slickPrev()} />
          <RightArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </div>
  );
}
