import React from "react";

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skills-wrapper">
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
            <div className="skill-item">
              <img src="images/hjc.png" alt="#" />
              <div className="skill-overlay">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="skill-item">
              <img src="images/react.png" alt="#" />
              <div className="skill-overlay">⭐⭐⭐</div>
            </div>
            <div className="skill-item">
              <img src="images/redux.png" alt="#" />
              <div className="skill-overlay">⭐⭐</div>
            </div>
            <div className="skill-item">
              <img src="images/vue.png" alt="#" />
              <div className="skill-overlay">⭐</div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/sass.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/styled-components.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/mui.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/coreui.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
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
              <div className="skill-item">
                <img src="images/node.png" alt="#" />
                <div className="skill-overlay">⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/django.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/socket.png" alt="#" />
                <div className="skill-overlay">⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/python.jpg" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
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
              <div className="skill-item">
                <img src="images/mysql.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/mongo.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-two">
          <div className="two">
            <h4>Chart</h4>
            <hr />
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "10px" }}>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/apexcharts.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/chartjs.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/d3.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/wordcloud.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
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
              <div className="skill-item">
                <img src="images/jira.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/notion.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/figma.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/mm.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
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
              <div className="skill-item">
                <img src="images/git.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/gitlab.png" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/github.png" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
