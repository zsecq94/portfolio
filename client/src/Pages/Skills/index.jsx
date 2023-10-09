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
        <h5 className="pjt-num">⭐ : 프로젝트 수행 횟수</h5>
      </div>
      <div className="skills-main1">
        <div className="skills-one">
          <h4 className="name">Frontend</h4>
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
              <img src="images/hjc.avif" alt="#" />
              <div className="skill-overlay">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="skill-item">
              <img src="images/react.avif" alt="#" />
              <div className="skill-overlay">⭐⭐⭐</div>
            </div>
            <div className="skill-item">
              <img src="images/redux.avif" alt="#" />
              <div className="skill-overlay">⭐⭐</div>
            </div>
            <div className="skill-item">
              <img src="images/vue.avif" alt="#" />
              <div className="skill-overlay">⭐</div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/sass.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/styled-components.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/mui.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/coreui.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-two">
          <div className="two">
            <h4 className="name">Backend</h4>
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
                <img src="images/node.avif" alt="#" />
                <div className="skill-overlay">⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/django.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/socket.avif" alt="#" />
                <div className="skill-overlay">⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/python.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
          </div>
          <div className="two">
            <h4 className="name">DB</h4>
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
                <img src="images/mysql.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/mongo.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-two">
          <div className="two">
            <h4 className="name">Chart</h4>
            <hr />
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "10px" }}>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/apexcharts.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/chartjs.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/d3.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
              <div className="skill-item" style={{ width: "50%" }}>
                <img src="images/wordcloud.avif" alt="#" />
                <div className="skill-overlay">⭐</div>
              </div>
            </div>
          </div>
          <div className="two">
            <h4 className="name">Communication</h4>
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
                <img src="images/jira.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/notion.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/figma.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/mm.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-two">
          <div className="two">
            <h4 className="name">Version Control</h4>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <div className="skill-item">
                <img src="images/git.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/gitlab.avif" alt="#" />
                <div className="skill-overlay">⭐⭐⭐</div>
              </div>
              <div className="skill-item">
                <img src="images/github.avif" alt="#" />
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
