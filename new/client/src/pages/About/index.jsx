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
        }}
      >
        <h2 style={{ color: "white" }}>✔ ABOUT ME</h2>
        <hr />
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #219ebc;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;
