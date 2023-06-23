import React, { useState, useRef } from "react";
import Header from "./Layout/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Canvas from "./Layout/Canvas";

import "./App.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Mousewheel } from "swiper";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (slideIndex) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  return (
    <div className="App-wrapper" onWheel={(e) => e.preventDefault()}>
      <Header goToSlide={goToSlide} activeIndex={activeIndex} />
      <Swiper
        ref={swiperRef}
        speed={1500}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        slidesPerView={1}
        style={{ height: "100vh" }}
        onSlideChange={handleSlideChange}
        mousewheel={{
          invert: false,
          forceToAxis: true,
          sensitivity: 1,
        }}
      >
        <SwiperSlide>
          <Main />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
      <Canvas />
    </div>
  );
}

export default App;
