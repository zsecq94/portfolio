import React from "react";
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

const Project = ({ swiperRef }) => {
  return (
    <>
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
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          speed={1000}
          className="mySwiper"
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Project1 swiperRef={swiperRef} />
          </SwiperSlide>
          <SwiperSlide>
            <Project2 swiperRef={swiperRef} />
          </SwiperSlide>
          <SwiperSlide>
            <Project3 swiperRef={swiperRef} />
          </SwiperSlide>
          <SwiperSlide>
            <Project4 swiperRef={swiperRef} />
          </SwiperSlide>
          <SwiperSlide>
            <Project5 swiperRef={swiperRef} />
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </Container>
    </>
  );
};

export default Project;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
  width: 100%;
  height: 100%;
  gap: 2rem;
  color: white;
  .mySwiper {
    width: 55%;
    height: 80%;
    border-radius: 10px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    font-weight: bold;
    color: gray;
    transition: 0.3s ease-in-out;
    &:hover {
      color: black;
    }
  }
  @media (max-width: 1680px) {
    .mySwiper {
      width: 70%;
    }
  }
  @media (max-width: 1024px) {
    .mySwiper {
      width: 90%;
    }
  }
  @media (max-width: 768px) {
    .mySwiper {
      width: 80%;
      margin-bottom: 10%;
      border-radius: 10px;
      .swiper-button-next,
      .swiper-button-prev {
        color: black;
      }
    }
  }
`;
