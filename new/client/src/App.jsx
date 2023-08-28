import React, { useState, useRef } from "react";
import Header from "./Layout/Header";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import styled from "styled-components";

import "./App.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [mainCheck, setMainCheck] = useState(true);

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
    <Container>
      {!mainCheck ? (
        <div className="main-wrapper">
          <Main setMainCheck={setMainCheck} />
        </div>
      ) : (
        <div className="main-wrapper2">
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
      )}
      <div className="mobile-wrapper">
        <Header
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          goToSlide={goToSlide}
          activeIndex={activeIndex}
        />
        <div className="about">
          <About goToSlide={goToSlide} />
        </div>
        <div className="skills">
          <Skills className="skills" />
        </div>
        <div className="projects">
          <Project className="projects" swiperRef={swiperRef} />
        </div>
        <div className="contact">
          <Contact className="contact" />
        </div>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  .main-wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 769px) {
    .mobile-wrapper {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .main-wrapper2 {
      display: none;
    }
  }
`;
