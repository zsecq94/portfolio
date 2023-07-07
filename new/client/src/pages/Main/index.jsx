import React from "react";

import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <div>
        <h2>안녕하세요, Developer JK 입니다.</h2>
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8ecae6;
  width: 100%;
  height: 100%;
  color: white;
`;
