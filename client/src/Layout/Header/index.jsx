import React from "react";
import styled from "styled-components";

import "./Header.scss";
import { useStateStore } from "../../Store/useStateStore";

const Header = ({ goToSlide }) => {
  const { menuOpenState, activeIndexState, toggleMenu } = useStateStore();

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-title">
          <h3 onClick={() => window.location.reload()} className="Title">
            JK-PORTFOLIO
          </h3>
        </div>
        <div className="header-menu">
          <h3
            onClick={() => goToSlide(0)}
            className={activeIndexState === 0 ? "Menu-selected" : undefined}
          >
            About
          </h3>
          <h3
            onClick={() => goToSlide(1)}
            className={activeIndexState === 1 ? "Menu-selected" : undefined}
          >
            Skills
          </h3>
          <h3
            onClick={() => goToSlide(2)}
            className={activeIndexState === 2 ? "Menu-selected" : undefined}
          >
            Projects
          </h3>
          <h3
            onClick={() => goToSlide(3)}
            className={activeIndexState === 3 ? "Menu-selected" : undefined}
          >
            Contact
          </h3>
        </div>
      </div>
      <div className="mobile-wrapper">
        <div className="mobile-wrapper2">
          <div className="mobile-btn" onClick={toggleMenu}>
            <span
              className={`bar ${menuOpenState ? "active" : undefined}`}
            ></span>
            <span
              className={`bar ${menuOpenState ? "active" : undefined}`}
            ></span>
            <span
              className={`bar ${menuOpenState ? "active" : undefined}`}
            ></span>
          </div>

          <MenuContainer className={menuOpenState ? "show" : undefined}>
            <h2
              onClick={() => {
                window.location.reload();
                window.scrollTo(0, 0);
              }}
            >
              🧩 JK-PORTFOLIO
            </h2>
            <h2 onClick={() => toggleMenu("about")}>🎈 About</h2>
            <h2 onClick={() => toggleMenu("skills")}>🏆 Skills</h2>
            <h2 onClick={() => toggleMenu("projects")}>🔒 Projects</h2>
            <h2 onClick={() => toggleMenu("contact")}>🔔 Contact</h2>
          </MenuContainer>
        </div>
      </div>
    </div>
  );
};

export default Header;

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
  z-index: 99;
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
