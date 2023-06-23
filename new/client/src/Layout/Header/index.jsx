import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h2>Header입니다</h2>
      <h2>contact us</h2>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
`;
