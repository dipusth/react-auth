import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { Children } from "react";
import styled from "styled-components";

const Carousel = ({ children }) => {
  const sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const SliderWrapper = styled.div`
    .slick-slide {
      min-width: 300px;
    }
  `;
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <SliderWrapper>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </SliderWrapper>
  );
};

export default Carousel;
