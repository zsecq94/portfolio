import React from "react";
import Skills from "../../Components/Skills";

import "./About.scss";
const About = ({ goToSlide }) => {
  const skillList = [
    "JavaScript",
    "React",
    "Vue.js",
    "Node.js",
    "Django",
    "MySQL",
  ];
  return (
    <div className="about">
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
            src="images/profile.avif"
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
                {skillList.map((skill, index) => (
                  <Skills key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
          <hr style={{ margin: "10px 0 10px 0" }} />
          <span className="span2">
            제 주된 관심사는 프론트엔드(FE) 개발의 디테일입니다. 프로젝트를
            수행할 때 UI/UX 디자인과 웹 접근성을 고려하여 사용자 경험을
            향상시키는 데 주력하였으며, 피그마로 제작한 시안을 실제 개발 환경에
            맞게 구현하는 작업에서 버튼 하나하나의 세부 사항까지 신경을 쓰며
            작업해 왔습니다. 이러한 디테일한 작업을 통해 사용자 경험을 개선하고
            사용자들의 피드백을 수집하고 분석하여 UI/UX를 개선하는 작업에
            주력하고자 합니다.
          </span>
          <span className="span2">
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
            <span className="span1" onClick={() => goToSlide(3)}>
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
