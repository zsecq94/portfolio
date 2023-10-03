import React, { useState, useRef } from "react";
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
import { useRecoilState } from "recoil";
import {
  activeIndexState,
  checkModalNumState,
  menuOpenState,
  modalOpenState,
} from "./Recoil/Store";

function App() {
  const [activeIndex, setActiveIndex] = useRecoilState(activeIndexState);
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const [checkModalNum, setCheckModalNum] = useRecoilState(checkModalNumState);
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

  const toggleModal = (num) => {
    setModalOpen(!modalOpen);
    setCheckModalNum(num);
  };

  const toggleMenu = (name) => {
    setMenuOpen(!menuOpen);
    if (name?.length >= 1) {
      goToScroll(name);
    }
  };

  return (
    <div className="app-wrapper">
      <Modal toggleModal={toggleModal} />
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
            <Project swiperRef={swiperRef} toggleModal={toggleModal} />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mobile-wrapper">
        <Header toggleMenu={toggleMenu} goToSlide={goToSlide} />
        <div className="about">
          <About />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="projects">
          <Project swiperRef={swiperRef} toggleModal={toggleModal} />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
