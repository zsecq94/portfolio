import React, { useRef, useState } from "react";
import styled from "styled-components";
import Project1 from "../../Components/ProjectComponents/Project1";
import Project2 from "../../Components/ProjectComponents/Project2";
import Project3 from "../../Components/ProjectComponents/Project3";
import Project4 from "../../Components/ProjectComponents/Project4";
import Project5 from "../../Components/ProjectComponents/Project5";

import "./Project.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Project = () => {
  return (
    <Container>
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
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{
          width: "70%",
          height: "80%",
          borderRadius: "20px",
        }}
      >
        <SwiperSlide>
          <Project1 />
        </SwiperSlide>
        <SwiperSlide>
          <Project2 />
        </SwiperSlide>
        <SwiperSlide>
          <Project3 />
        </SwiperSlide>
        <SwiperSlide>
          <Project4 />
        </SwiperSlide>
        <SwiperSlide>
          <Project5 />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffb703;
  width: 100%;
  height: 100%;
  gap: 1rem;
  color: white;
`;
