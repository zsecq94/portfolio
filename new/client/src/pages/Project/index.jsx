import React, { useState } from "react";
import data from "./data.json";
import ProjectComponents from "../../Components/ProjectComponents";

import "./Project.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Project = ({ swiperRef }) => {
  return (
    <div className="project-wrapper">
      <div
        style={{
          marginTop: "55px",
          textAlign: "center",
          textDecoration: "underline",
          textUnderlineOffset: "10px",
        }}
      >
        <h2>✔ PROJECTS</h2>
      </div>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={1000}
        className="mySwiper"
        modules={[Navigation]}
      >
        {data.map((V, index) => (
          <SwiperSlide>
            <ProjectComponents key={index} V={V} swiperRef={swiperRef} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default Project;
