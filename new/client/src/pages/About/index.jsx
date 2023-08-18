import React from "react";
import styled from "styled-components";

import "./About.scss";

const About = () => {
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
        <h2>✔ ABOUT ME</h2>
      </div>
      <div className="about-wrapper">
        <div className="about-title">
          <h2>About Me</h2>
          <h4>https://jk-zone.firebaseapp.com/</h4>
        </div>
        <div className="about-main">
          <h4>신입 프론트엔드 개발자</h4>
          <h3>배 중 권 / 94.10.03</h3>
          <h4>zsecq94@gmail.com / 010-2556-8761 / 전라남도 나주시</h4>
          <h4>삼성 청년 SW 아카데미 8기 수료</h4>
        </div>
      </div>
      <div className="about-wrapper2">
        <h2>JK-ZONE</h2>
        <h3>사용자 친화적 / 디테일 / 열정 / 소통</h3>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aee2ff;
  width: 100%;
  height: 100%;
  gap: 2rem;
  color: white;
  .about-wrapper {
    display: flex;
    flex-direction: column;
    color: black;
    background-color: white;
    background-image: url("images/Business.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 30%;
    height: 30%;
    box-shadow: 3px 3px 10px;
    padding: 20px 40px;
    justify-content: space-between;
    h4 {
      font-size: 1rem;
    }
    .about-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .about-main {
      display: flex;
      flex-direction: column;
      text-align: end;
    }
  }
  .about-wrapper2 {
    display: flex;
    flex-direction: column;
    color: black;
    background-color: white;
    width: 30%;
    height: 30%;
    box-shadow: 3px 3px 10px;
    padding: 20px 40px;
    justify-content: center;
    align-items: center;
  }
`;
