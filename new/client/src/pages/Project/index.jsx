import React from "react";
import styled from "styled-components";

import "./Project.scss";

const Project = () => {
  return (
    <Container>
      <div
        style={{
          marginTop: "70px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            textDecoration: "underline",
            textUnderlineOffset: "10px",
          }}
        >
          ✔ PROJECT
        </h2>
      </div>
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
`;
