import React, { useState, useRef } from "react";
import Header from "./Layout/Header";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

import "./App.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleHeaderChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (slideIndex) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  const goToScroll = (name) => {
    var location = document.querySelector("." + name).offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (name) => {
    setMenuOpen(!menuOpen);
    if (name?.length >= 1) {
      goToScroll(name);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="main-wrapper">
        <Header goToSlide={goToSlide} activeIndex={activeIndex} />
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
        <Header
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          goToSlide={goToSlide}
          activeIndex={activeIndex}
        />
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
