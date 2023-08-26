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
import { Navigation, Pagination } from "swiper";

const Project = ({ swiperRef }) => {
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
        speed={1500}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        style={{
          width: "55%",
          height: "80%",
          borderRadius: "20px",
        }}
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
      </Swiper>
    </Container>
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
  gap: 1rem;
  color: white;
`;
