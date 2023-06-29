import React from "react";
import styled from "styled-components";

const Header = ({ goToSlide, activeIndex }) => {
  return (
    <Container>
      <div className="Header-wrapper">
        <div className="Header-title">
          <h3
            onClick={() => goToSlide(0)}
            className={activeIndex === 0 ? "Title-selected" : "Title"}
          >
            JK-ZONE
          </h3>
        </div>
        <div className="Header-menu">
          <h3
            onClick={() => goToSlide(1)}
            className={activeIndex === 1 && "Menu-selected"}
          >
            About me
          </h3>
          <h3
            onClick={() => goToSlide(2)}
            className={activeIndex === 2 && "Menu-selected"}
          >
            Skills
          </h3>
          <h3
            onClick={() => goToSlide(3)}
            className={activeIndex === 3 && "Menu-selected"}
          >
            Project
          </h3>
          <h3
            onClick={() => goToSlide(4)}
            className={activeIndex === 4 && "Menu-selected"}
          >
            Contact
          </h3>
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 25px;
  z-index: 999;
  .Header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25%;
    h3 {
      color: #696969;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: white;
      }
    }
    .Header-title {
      .Title {
        font-size: 2rem;
      }
      .Title-selected {
        color: white;
        font-size: 2rem;
      }
    }
    .Header-menu {
      font-size: 0.8rem;
      display: flex;
      gap: 2rem;
      .Menu-selected {
        color: white;
      }
    }
  }
`;
