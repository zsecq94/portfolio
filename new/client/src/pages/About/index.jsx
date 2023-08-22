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
        <img src="images/profile.jpg" alt="" style={{ width: "80%" }} />
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
  width: 100%;
  height: 100%;
  gap: 2rem;
  color: white;
  .about-wrapper {
  }
`;
