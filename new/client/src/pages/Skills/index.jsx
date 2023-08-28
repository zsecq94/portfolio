import React from "react";
import styled from "styled-components";

import "./Skills.scss";

const Skills = () => {
  return (
    <Container>
      <div
        style={{
          marginTop: "55px",
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
          ✔ SKILLS
        </h2>
        <h5 style={{ marginTop: "1rem", color: "gray" }}>
          ⭐ : 프로젝트 수행 횟수
        </h5>
      </div>
      <div className="skills-main1">
        <div className="skills-one">
          <h4>Frontend</h4>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "10px",
            }}
          >
            <SkillItem>
              <SkillImage src="images/hjc.png" alt="#" />
              <SkillOverlay>⭐⭐⭐⭐⭐</SkillOverlay>
            </SkillItem>
            <SkillItem>
              <SkillImage src="images/react.png" alt="#" />
              <SkillOverlay>⭐⭐⭐</SkillOverlay>
            </SkillItem>
            <SkillItem>
              <SkillImage src="images/redux.png" alt="#" />
              <SkillOverlay>⭐⭐</SkillOverlay>
            </SkillItem>
            <SkillItem>
              <SkillImage src="images/vue.png" alt="#" />
              <SkillOverlay>⭐</SkillOverlay>
            </SkillItem>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <SkillItem style={{ width: "50%" }}>
                <SkillImage src="images/sass.png" alt="#" />
                <SkillOverlay>⭐⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem style={{ width: "50%" }}>
                <SkillImage src="images/styled-components.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <SkillItem style={{ width: "50%" }}>
                <SkillImage src="images/mui.png" alt="#" />
                <SkillOverlay>⭐⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem style={{ width: "50%" }}>
                <SkillImage src="images/coreui.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
            </div>
          </div>
        </div>
        <div className="skills-two">
          <div className="two">
            <h4>Backend</h4>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "10px",
              }}
            >
              <SkillItem>
                <SkillImage src="images/node.png" alt="#" />
                <SkillOverlay>⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/django.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/socket.png" alt="#" />
                <SkillOverlay>⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/python.jpg" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
            </div>
          </div>
          <div className="two">
            <h4>DB</h4>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "10px",
              }}
            >
              <SkillItem>
                <SkillImage src="images/mysql.png" alt="#" />
                <SkillOverlay>⭐⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/mongo.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
            </div>
          </div>
        </div>
        <div className="skills-two">
          <div className="two">
            <h4>Chart</h4>
            <hr />
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "10px" }}>
              <SkillItem style={{ width: "50%" }}>
                <SkillImage src="images/apexcharts.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
              <SkillItem style={{ width: "50%" }}>
                <SkillImage src="images/chartjs.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <SkillItem style={{ width: "50%" }}>
                <SkillImage src="images/d3.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
              <SkillItem style={{ width: "50%" }}>
                <SkillImage src="images/wordcloud.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
            </div>
          </div>
          <div className="two">
            <h4>Communication</h4>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "10px",
              }}
            >
              <SkillItem>
                <SkillImage src="images/jira.png" alt="#" />
                <SkillOverlay>⭐⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/notion.png" alt="#" />
                <SkillOverlay>⭐⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/figma.png" alt="#" />
                <SkillOverlay>⭐⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/mm.png" alt="#" />
                <SkillOverlay>⭐⭐⭐</SkillOverlay>
              </SkillItem>
            </div>
          </div>
        </div>
        <div className="skills-two">
          <div className="two">
            <h4>Version Control</h4>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <SkillItem>
                <SkillImage src="images/git.png" alt="#" />
                <SkillOverlay>⭐⭐⭐⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/gitlab.png" alt="#" />
                <SkillOverlay>⭐⭐⭐</SkillOverlay>
              </SkillItem>
              <SkillItem>
                <SkillImage src="images/github.png" alt="#" />
                <SkillOverlay>⭐</SkillOverlay>
              </SkillItem>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2b2b;
  width: 100%;
  height: 100%;
  gap: 2rem;
  img {
    width: 100%;
    transition: 0.5s ease;
  }

  .skills-main1 {
    display: flex;
    width: 100%;
    gap: 3rem;
    justify-content: center;
    .skills-one {
      padding: 1rem;
      background-color: white;
      border-radius: 10px;
      width: 12%;
    }
    .skills-two {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      width: 12%;
      .two {
        padding: 1rem;
        background-color: white;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: 1680px) {
    h4 {
      font-size: 1rem;
    }
  }
  @media (max-width: 1024px) {
    h4 {
      font-size: 0.5rem;
    }
  }
  @media (max-width: 768px) {
    padding-bottom: 10%;
    img {
      width: 100%;
      transition: 0.5s ease;
    }
    h4 {
      text-align: center;
      font-size: 1rem;
    }
    .skills-main1 {
      display: flex;
      flex-direction: column;
      width: 75%;
      gap: 3rem;
      justify-content: center;
      align-items: center;
      .skills-one {
        background-color: white;
        border-radius: 10px;
        width: 75%;
      }
      .skills-two {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        width: 87%;
        .two {
          padding: 1rem;
          background-color: white;
          border-radius: 10px;
        }
      }
    }
  }
`;

const SkillItem = styled.div`
  position: relative;
`;

const SkillImage = styled.img`
  width: 100%;
  transition: opacity 0.3s ease;

  ${SkillItem}:hover & {
    opacity: 0.1;
    transform: scale(1.1);
  }
`;

const SkillOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 18px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${SkillItem}:hover & {
    opacity: 1;
  }
`;
