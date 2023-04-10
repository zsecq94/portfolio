import React from "react";
import Slide1 from "Components/Main-components/Slide1";
import Slide2 from "Components/Main-components/Slide2";
import Slide3 from "Components/Main-components/Slide3";
import Slide4 from "Components/Main-components/Slide4";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Main.scss";

SwiperCore.use([Pagination, Scrollbar, A11y, Mousewheel]);

const Main = () => {
  return (
    <Swiper
      className="swiper-container"
      direction="vertical"
      spaceBetween={50}
      slidesPerView={1}
      //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      mousewheel={{ sensitivity: 1 }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="swiper-slide1">
        <Slide1 />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide2">
        <Slide2 />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide3">
        <Slide3 />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide4">
        <Slide4 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Main;
