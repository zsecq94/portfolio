import React from "react";
import styled from "styled-components";

import "./About.scss";
const About = ({ goToSlide, activeIndex }) => {
  return (
    <Container>
      <div
        style={{
          marginTop: "55px",
          textAlign: "center",
          textDecoration: "underline",
          textUnderlineOffset: "10px",
        }}
      >
        <h2>✔ ABOUT</h2>
      </div>
      <div className="about-wrapper">
        <div className="about-img">
          <img
            src="images/profile.jpg"
            alt=""
            style={{
              width: "80%",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="about-main">
          <h4 style={{ color: "white" }}>
            안녕하세요 프론트엔드 개발자 배중권입니다.
          </h4>
          <hr style={{ margin: "10px 0 10px 0" }} />
          <div className="about-profile">
            <div className="title">
              <span>NAME.</span>
              <span>BIRTH.</span>
              <span>ADDRESS.</span>
              <span>CONTACT.</span>
              <span>EMAIL.</span>
              <span>EDUCATION.</span>
              <span>MAIN SKILLS.</span>
            </div>
            <div className="detail">
              <span>배 중 권</span>
              <span>94.10.03</span>
              <span>전라남도 나주시</span>
              <span>010-2556-8761</span>
              <span>zsecq94@gmail.com</span>
              <span>삼성 청년 SW 아카데미 8기 수료</span>
              <span
                style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
              >
                <span
                  style={{
                    backgroundColor: "#FFC436",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Javascript
                </span>
                <span
                  style={{
                    backgroundColor: "#279EFF",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  React
                </span>
                <span
                  style={{
                    backgroundColor: "#279EFF",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Vue.js
                </span>
                <span
                  style={{
                    backgroundColor: "#A8DF8E",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Node.js
                </span>
                <span
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Django
                </span>
                <span
                  style={{
                    backgroundColor: "#1450A3",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  MySQL
                </span>
              </span>
            </div>
          </div>
          <hr style={{ margin: "10px 0 10px 0" }} />
          <span style={{ color: "gray", fontSize: "1.2rem" }}>
            FE 개발에 가장 집중하고 있는 부분은 디테일입니다. 프로젝트를 수행할
            때, UI/UX 디자인과 웹 접근성을 고려하여 사용자 경험을 개선하는 데
            주력했으며, 피그마 제작 시안을 실제 개발환경에 맞게 구현하는
            작업에서 버튼 하나하나 디테일한 부분까지 신경 써서 작업해 왔습니다.
            주력으로 집중했던 디테일한 작업을 통해 사용자 경험을 개선하고,
            사용자들의 피드백을 수집하고 분석하여 UI/UX 개선에 반영하는 작업을
            맡아서 해보고 싶습니다. 추가로 앞으로의 로드맵입니다. Three.js,
            Canvas, WebGL 등 디자인적인 기술을 꾸준히 학습하여 습득하고자
            합니다. 그리고 UI/UX 디자인과의 연계를 통해, 사용자 친화적인
            인터페이스를 구현하는 기술력을 높이고 싶습니다. 또한, 프로젝트를
            통해 협업 능력을 향상시키고, 함께 성장하는 기회를 만들고자 합니다.
          </span>
          <br />
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://github.com/zsecq94"
              target="_blank"
              rel="noreferrer"
            >
              Git
            </a>
            <a onClick={() => goToSlide(3)} href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
  width: 100%;
  height: 100%;
  gap: 5rem;
  color: white;
  .about-wrapper {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 60%;
    gap: 2rem;
    .about-img {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .about-main {
      display: flex;
      flex-direction: column;
      width: 60%;
      justify-content: center;
      text-align: left;
      .about-profile {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        .title {
          display: flex;
          flex-direction: column;
          font-weight: bold;
          gap: 0.1rem;
        }
        .detail {
          display: flex;
          flex-direction: column;
          color: "white";
          gap: 0.1rem;
        }
      }
      a {
        background-color: white;
        color: black;
        padding: 1% 3% 1% 3%;
        border-radius: 10px;
        transition: 0.5s ease-in-out;
        text-decoration-line: none;
        font-weight: bold;
        &:hover {
          color: white;
          background-color: black;
        }
      }
    }
  }
`;
