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
              <span className="main-skills">MAIN SKILLS.</span>
            </div>
            <div className="detail">
              <span>배 중 권</span>
              <span>94.10.03</span>
              <span>전라남도 나주시</span>
              <span>010-2556-8761</span>
              <span>zsecq94@gmail.com</span>
              <span>삼성 청년 SW 아카데미 8기 수료</span>
              <div className="main-skills">
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
              </div>
            </div>
          </div>
          <hr style={{ margin: "10px 0 10px 0" }} />
          <span style={{ color: "gray", fontSize: "1.2rem" }}>
            제 주된 관심사는 프론트엔드(FE) 개발의 디테일입니다. 프로젝트를
            수행할 때 UI/UX 디자인과 웹 접근성을 고려하여 사용자 경험을
            향상시키는 데 주력하였으며, 피그마로 제작한 시안을 실제 개발 환경에
            맞게 구현하는 작업에서 버튼 하나하나의 세부 사항까지 신경을 쓰며
            작업해 왔습니다. 이러한 디테일한 작업을 통해 사용자 경험을 개선하고
            사용자들의 피드백을 수집하고 분석하여 UI/UX를 개선하는 작업에
            주력하고자 합니다.
          </span>
          <span style={{ color: "gray", fontSize: "1.2rem" }}>
            앞으로는 Three.js, Canvas, WebGL 등과 같은 디자인 관련 기술을 꾸준히
            학습하여 숙달하고자 하며, 이러한 기술을 UI/UX 디자인과 연계하여
            사용자 친화적인 인터페이스를 구현하는 능력을 향상시키고 싶습니다.
            또한, 프로젝트를 통해 협업 능력을 향상시키고 함께 성장하는 기회를
            찾고 있습니다.
          </span>
          <br />
          <div className="atag">
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
    width: 55%;
    height: 60%;
    gap: 2rem;
    .about-img {
      width: 35%;
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
      .atag {
        display: flex;
        gap: 1rem;
      }
      .about-profile {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        .main-skills {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
        }
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
  @media (max-width: 1680px) {
    .about-wrapper {
      width: 80%;
      height: 70%;
    }
  }
  @media (max-width: 1024px) {
    .about-wrapper {
      width: 90%;
      height: 70%;
    }
  }
  @media (max-width: 768px) {
    .about-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      h4 {
        font-size: 1.2rem;
      }
      .about-img {
      }
      .about-main {
        width: 80%;
        .atag {
          display: none;
        }
        .about-profile {
          .main-skills {
            display: none;
          }
          .title {
          }
          .detail {
            display: flex;
            flex-direction: column;
            color: "white";
            gap: 0.1rem;
          }
        }
      }
    }
  }
`;
