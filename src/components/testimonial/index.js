import React, { useRef } from "react";
import Slider from "react-slick";
import RightArrow from "../right-arrow";
import LeftArrow from "../left-arrow";
import "./style.css";
import(
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Oswald:wght@200..700&display=swap"
);

export function Testimonial() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Testimonial">
      <div style={{ overflow: "hidden", width: "70%" }}>
        <Slider {...settings} ref={sliderRef}>
          <div>
            <div className="item">
              <img src="/img/user.png" alt="user" width={300} />
              <div className="item_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sodales turpis et lacinia fermentum. Curabitur vestibulum at
                arcu sed blandit. In consequat euismod purus nec imperdiet.
                <br />
                <br />
                Title
                <br />
                Name
                <br />
                <br />
                <div className="flex">
                  <RightArrow onClick={() => {}} />
                  Read my story
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="item">
              <img src="/img/user.png" alt="user" width={200} />
              <div className="item_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sodales turpis et lacinia fermentum. Curabitur vestibulum at
                arcu sed blandit. In consequat euismod purus nec imperdiet.
                <br />
                <br />
                Title
                <br />
                Name
                <br />
                <br />
                <div className="flex">
                  <RightArrow onClick={() => {}} />
                  Read my story
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="arrow-container">
        <LeftArrow onClick={() => sliderRef.current.slickPrev()} />
        <RightArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
}
