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
      <div className="about-wrapper"></div>
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
`;
