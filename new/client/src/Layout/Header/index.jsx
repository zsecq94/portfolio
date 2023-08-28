import React from "react";
import styled from "styled-components";

const Header = ({ menuOpen, toggleMenu, goToSlide, activeIndex }) => {
  return (
    <Container>
      <div className="Header-wrapper">
        <div className="Header-title">
          <h3 onClick={() => window.location.reload()} className="Title">
            JK-PORTFOLIO
          </h3>
        </div>
        <div className="Header-menu">
          <h3
            onClick={() => goToSlide(0)}
            className={activeIndex === 0 && "Menu-selected"}
          >
            About
          </h3>
          <h3
            onClick={() => goToSlide(1)}
            className={activeIndex === 1 && "Menu-selected"}
          >
            Skills
          </h3>
          <h3
            onClick={() => goToSlide(2)}
            className={activeIndex === 2 && "Menu-selected"}
          >
            Projects
          </h3>
          <h3
            onClick={() => goToSlide(3)}
            className={activeIndex === 3 && "Menu-selected"}
          >
            Contact
          </h3>
        </div>
      </div>
      <div className="mobile-wrapper">
        <Container2>
          <Button id="menu-button" onClick={toggleMenu}>
            <span className={`bar ${menuOpen ? "active" : ""}`}></span>
            <span className={`bar ${menuOpen ? "active" : ""}`}></span>
            <span className={`bar ${menuOpen ? "active" : ""}`}></span>
          </Button>

          <MenuContainer className={menuOpen ? "show" : ""}>
            <h2 onClick={() => window.location.reload()}>🧩 JK-PORTFOLIO</h2>
            <h2 onClick={() => toggleMenu("about")}>🎈 About</h2>
            <h2 onClick={() => toggleMenu("skills")}>🏆 Skills</h2>
            <h2 onClick={() => toggleMenu("projects")}>🔒 Projects</h2>
            <h2 onClick={() => toggleMenu("contact")}>🔔 Contact</h2>
          </MenuContainer>
        </Container2>
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
  .mobile-wrapper {
    display: none;
  }
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
      &:after {
        display: block;
        content: "";
        border-bottom: solid 3px white;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
      }
      &:hover:after {
        transform: scaleX(1);
      }
    }
    .Header-title {
      .Title {
        font-size: 2rem;
        &:hover {
          color: white;
          font-size: 2rem;
        }
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
  @media (max-width: 1680px) {
    .Header-wrapper {
      margin: 0 20%;
    }
  }
  @media (max-width: 1024px) {
    .Header-wrapper {
      margin: 0 12%;
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    .Header-wrapper {
      display: none;
    }
    .mobile-wrapper {
      display: flex;
      flex-direction: row;
      color: white;
      justify-content: end;
    }
  }
`;

const Container2 = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 1000;
  background: none;
  border: none;
  padding: 0;

  .bar {
    width: 30px;
    height: 4px;
    background-color: white;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .active {
    background-color: black;
    transform: rotate(45deg) translate(4px, 6px);
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  color: black;
  background-color: #fff;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.5s ease;
  z-index: 999;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  h2 {
    &:hover {
      cursor: pointer;
    }
  }
  &.show {
    right: 0;
  }

  ul {
    list-style: none;
    padding: 20px;
  }

  li {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;
