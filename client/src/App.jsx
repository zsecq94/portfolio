import React, { useRef } from "react";
import Header from "./Layout/Header";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Modal from "./Components/Modal";

import "./App.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useStateStore } from "./Store/useStateStore";

export const goToScroll = (name) => {
  var location = document.querySelector("." + name).offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
};

function App() {
  const swiperRef = useRef(null);
  const { handleActiveIndex } = useStateStore();

  const handleHeaderChange = (swiper) => {
    handleActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (slideIndex) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  return (
    <div className="app-wrapper">
      <Modal />
      <div className="main-wrapper">
        <Header goToSlide={goToSlide} />
        <Swiper
          ref={swiperRef}
          speed={1500}
          direction={"vertical"}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Mousewheel]}
          slidesPerView={1}
          style={{ height: "100vh" }}
          onSlideChange={handleHeaderChange}
          mousewheel={{
            invert: false,
            forceToAxis: true,
            sensitivity: 1,
          }}
        >
          <SwiperSlide>
            <About goToSlide={goToSlide} />
          </SwiperSlide>
          <SwiperSlide>
            <Skills />
          </SwiperSlide>
          <SwiperSlide>
            <Project swiperRef={swiperRef} />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mobile-wrapper">
        <Header goToSlide={goToSlide} />
        <div className="about">
          <About />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="projects">
          <Project swiperRef={swiperRef} />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
