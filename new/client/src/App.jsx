import React, { useState, useRef, useEffect } from "react";
import Header from "./Layout/Header";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import TypingEffect from "./Components/TypingEffect";
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

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (slideIndex) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMainCheck(true);
  //   }, 4000);
  // }, []);

  return (
    <div>
      {!mainCheck && (
        <Container>
          <TypingEffect />
        </Container>
      )}
      {mainCheck && (
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
        </div>
      )}
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
`;
