import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Gallery extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="course-card mx-3 my-3 col-md-6">
          <img src="../images/modernfamily.jpg" alt="something"></img>
          <div height="32" className="Space-sc-3a2yol-0 haPqCW"></div>
          <div className="course-card-title">Full Stack Web Development</div>
          <div height="8" className="Space-sc-3a2yol-0 fhjwoO"></div>
          <div className="course-card-subtitle">Monday, November 25th</div>
          <div height="24" className="Space-sc-3a2yol-0 bARZXI"></div>
          <div className="course-card-description">
            HTML/CSS, Javascript, React, Python, Flask
          </div>
          <div className="flex-grow-1 h-100"></div>
          <a href="https://bootcamp.coderschool.vn/ftw">
            <div>
              <button className="Button__StyledButton-sc-1ihnoa6-0 jZpTJE">
                Learn more
              </button>
            </div>
          </a>
        </div>

        <div className="course-card mx-3 my-3 col-md-6">
          <img src="./images/modernfamily.jpg" alt="something"></img>
          <div height="32" className="Space-sc-3a2yol-0 haPqCW"></div>
          <div className="course-card-title">Full Stack Web Development</div>
          <div height="8" className="Space-sc-3a2yol-0 fhjwoO"></div>
          <div className="course-card-subtitle">Monday, November 25th</div>
          <div height="24" className="Space-sc-3a2yol-0 bARZXI"></div>
          <div className="course-card-description">
            HTML/CSS, Javascript, React, Python, Flask
          </div>
          <div className="flex-grow-1 h-100"></div>
          <a href="https://bootcamp.coderschool.vn/ftw">
            <div>
              <button className="Button__StyledButton-sc-1ihnoa6-0 jZpTJE">
                Learn more
              </button>
            </div>
          </a>
        </div>

        <div class="course-card mx-3 my-3 col-md-6">
          <img src="./images/modernfamily.jpg" />
          <div height="32" class="Space-sc-3a2yol-0 haPqCW"></div>
          <div class="course-card-title">Full Stack Web Development</div>
          <div height="8" class="Space-sc-3a2yol-0 fhjwoO"></div>
          <div class="course-card-subtitle">Monday, November 25th</div>
          <div height="24" class="Space-sc-3a2yol-0 bARZXI"></div>
          <div class="course-card-description">
            HTML/CSS, Javascript, React, Python, Flask
          </div>
          <div class="flex-grow-1 h-100"></div>
          <a href="https://bootcamp.coderschool.vn/ftw">
            <div>
              <button class="Button__StyledButton-sc-1ihnoa6-0 jZpTJE">
                Learn more
              </button>
            </div>
          </a>
        </div>
      </Slider>
    );
  }
}

export default Gallery;
