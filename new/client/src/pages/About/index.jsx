import React from "react";
import styled from "styled-components";

import "./About.scss";

const About = () => {
  return (
    <Container>
      <div
        style={{
          marginTop: "70px",
          textAlign: "center",
          textDecoration: "underline",
          textUnderlineOffset: "10px",
        }}
      >
        <h2>✔ ABOUT ME</h2>
      </div>
      <img src="" alt="" />
      <div className="about-wrapper">
        <div className="name">
          <h4>이름</h4>
        </div>
        <div className="age">
          <h4>나이</h4>
        </div>
        <div className="address">
          <h4>주소지</h4>
        </div>
        <div className="contact">
          <h4>연락처</h4>
        </div>
        <div className="email">
          <h4>이메일</h4>
        </div>
        <div className="Education">
          <h4>학력</h4>
        </div>
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
  gap: 1rem;
  color: white;
  .about-wrapper {
    display: flex;
    gap: 7rem;
  }
`;
