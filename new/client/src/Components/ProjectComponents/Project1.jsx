import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project1 = ({ swiperRef }) => {
  const [mainImgUrl, setMainImgUrl] = useState(
    "/images/projects/pjt1/main.gif"
  );
  const [imgName, setImgName] = useState("");
  const imgUrls = [
    "/images/projects/pjt1/main.gif",
    "/images/projects/pjt1/login.gif",
    "/images/projects/pjt1/signup.gif",
    "/images/projects/pjt1/call.gif",
    "/images/projects/pjt1/record.gif",
  ];

  useEffect(() => {
    if (mainImgUrl === imgUrls[0]) {
      setImgName("Flow");
    } else if (mainImgUrl === imgUrls[1]) {
      setImgName("Login");
    } else if (mainImgUrl === imgUrls[2]) {
      setImgName("Signup");
    } else if (mainImgUrl === imgUrls[3]) {
      setImgName("Call");
    } else {
      setImgName("Record & Delete");
    }
  }, [mainImgUrl]);

  const changeImg = (imgUrl) => {
    setMainImgUrl(imgUrl);
  };

  const handleMouseEnter = () => {
    swiperRef.current.swiper.disable();
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.enable();
  };

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2>BRUEMI</h2>
      <h5 style={{ color: "gray" }}>23.05.08 ~ 23.05.26(3주)</h5>
      <hr className="top-hr" />
      <div className="pjt1-wrapper">
        <div className="img-wrapper">
          <img src={mainImgUrl} alt="#" />
          <h4>{imgName}</h4>
          <hr />
          <div style={{ display: "flex" }}>
            {imgUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="#"
                className={`subimg ${mainImgUrl === url ? "selected" : ""}`}
                onClick={() => changeImg(url)}
              />
            ))}
          </div>
          <hr />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                fontWeight: "bold",
                gap: "5px",
              }}
            >
              <span>Frontend</span>
              <span>Backend</span>
              <span>담당역할</span>
              <span>프로젝트 개요</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div className="fe-skills">
                <span
                  style={{
                    backgroundColor: "#FFC436",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  JavaScript
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
                    backgroundColor: "#C23373",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Sass
                </span>
              </div>
              <div className="be-skills">
                <span
                  style={{
                    backgroundColor: "green",
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
                    backgroundColor: "#FFC436",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  ExpressJS
                </span>
                <span
                  style={{
                    backgroundColor: "#793FDF",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  WebSocket
                </span>
              </div>
              <span>Full-Stack (1/6명)</span>
              <span>vSLAM기반 자율주행 서비스 로봇</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <a
              href="https://github.com/zsecq94/ssafy-pjt/tree/main/pjt4"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="img1"
                src="images/giticon.png"
                alt=""
                style={{ width: "50px" }}
              />
            </a>
          </div>
        </div>
        <div className="main-content">
          <span style={{ fontWeight: "bold" }}>
            BRUEMI는 VSLAM을 기반으로 실내에서 물건을 전달해주는 수요응답형
            자율주행 서비스 로봇입니다.
          </span>{" "}
          <span>
            로봇은 실내 지도작성, 위치추정, 장애물 회피 기능을 수행합니다.
            천장을 보는 카메라를 이용하여 VSLAM을 사용하기에 빠르게 지도작성을
            수행하고 초기세팅시간이 짧은 장점이 있습니다.
          </span>
          <br />
          <br />
          <h5>📜 짧은 개발기간</h5>
          <span>
            프로젝트 기간이 짧았습니다. 단기간에 프로젝트를 완성하기 위해 가장
            익숙한 프레임워크인 React와 Node.js를 사용하여 클라이언트와 서버를
            구축했고, 타이트한 스케줄 관리를 위해 협업툴(JIRA)을 적극적으로
            사용하며 제한된 3주 동안 목표로 한 개발을 성공적으로 마무리할 수
            있었습니다. 시간 제약이 있는 상황에서의 효율적인 개발 방법과 스케줄
            관리의 중요성을 깨달았습니다.
          </span>
          <br />
          <br />
          <h5>📜 임베디드 시스템 과의 통신</h5>
          <span>
            서버와 임베디드(로봇)간의 웹소켓 통신을 설계하고 구현하는데 어려움이
            있었습니다. 서버와 클라이언트를 중심으로 웹소켓 통신을 설계하고
            구현했는데 이에 맞춰서 임베디드와의 웹소켓 통신을 설계하려고 하니
            데이터 전달방식에 제약사항이 생겨 문제가 발생했습니다. 임베디드쪽에
            익숙하지 않다보니 데이터 전달방식을 생각하지 않고 구현해서 문제가
            생긴것이였습니다. 이를 해결하기 위해 임베디드 개발자와 협업하여
            데이터 전달방식을 통일하고, 임베디드 시스템과의 웹소켓 통신을 먼저
            구현한 후에 클라이언트 통신을 구현함으로써 해결할 수 있었습니다.
          </span>
          <br />
          <br />
          <h5>📜 setInterval VS requestAnimationFrame</h5>
          <div>
            <span>
              setInterval : 일정한 간격으로 함수를 호출하기 때문에, 브라우저가
              현재 실행 가능한 작업을 고려하지 않고 계속해서 함수를 호출하여
              버벅거리는 현상이 지속되며 CPU 및 배터리가 낭비될 수 있고,
              애니메이션 처리 시 일정한 간격으로 업데이트되므로, 화면이 부드럽게
              표시되지 않을 수 있습니다.
            </span>
            <br />
            <span>
              requestAnimationFrame : 브라우저의 리프레시 주기에 맞추어 호출되기
              때문에, 브라우저가 최적의 타이밍에서 함수를 실행하도록 돕습니다.
              이로 인해 더 나은 성능 및 배터리 효율성을 제공할 수 있습니다.
              애니메이션 처리에 적합한 메소드로, 브라우저가 최적의 시기에
              애니메이션을 업데이트하므로 부드럽고 자연스러운 애니메이션 효과를
              얻을 수 있습니다.
            </span>
            <br />
            <span>
              일반적으로, 애니메이션 및 시간 기반 작업을 처리할 때는
              requestAnimationFrame함수를 사용하는 것이 더 좋은 선택이라는 점을
              알게됐고, 부드러운 애니메이션 및 효율적인 작업 처리를 위해
              requestAnimationFrame함수를 사용하여 '부르미'를 구현했습니다.
            </span>
          </div>
          <br />
          <h5>🔑 Result</h5>
          <span>
            시간 제약이 있는 상황에서 효율적인 개발 방법과 스케줄 관리의
            중요성을 깨달았습니다. 또한, 임베디드 시스템과의 데이터 전달방식이나
            제약사항에 대해 학습할 수 있었고, 무엇보다 디자인 적인 요소들에 대한
            눈높이들이 한 층 높아지는 프로젝트였다고 생각합니다.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Project1;

const Container = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  .top-hr {
    margin: 1% 5% 0 4%;
  }
  .pjt1-wrapper {
    display: flex;
    flex-direction: row;
    height: 77%;
    .img-wrapper {
      width: 50%;
      height: 100%;
      padding: 2% 2% 2% 4%;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      .fe-skills {
        display: flex;
        gap: 3%;
      }
      .be-skills {
        display: flex;
        gap: 3%;
      }
      h4 {
        text-align: left;
      }
      span {
        text-align: left;
      }
      img {
        width: 100%;
        border-radius: 10px;
      }
      .img1 {
        transition: 0.5s ease-in-out;
        &:hover {
          opacity: 0.1;
        }
      }
      .subimg {
        padding: 1%;
        width: 18%;
        cursor: pointer;
        transition: filter 0.3s ease;
      }
      .subimg.selected {
        filter: brightness(0.1);
      }
    }
    .main-content {
      width: 50%;
      height: 100%;
      padding: 2% 1% 2% 2%;
      text-align: left;
      margin-right: 5%;
      overflow: auto;
      h5 {
        font-size: 1.2rem;
      }
    }
    .main-content::-webkit-scrollbar {
      width: 10px;
      background-color: white;
      &-thumb {
        background-color: gray;
        border-radius: 5px;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .top-hr {
      margin: 1% 9% 0 4%;
    }
    .pjt1-wrapper {
      height: 100%;

      .img-wrapper {
        align-items: center;
        padding: 5%;
        width: 85%;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        h4 {
          text-align: left;
        }
        span {
          text-align: left;
          font-size: 0.7rem;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
        .img1 {
          transition: 0.5s ease-in-out;
          &:hover {
            opacity: 0.1;
          }
        }
        .subimg {
          padding: 1%;
          width: 18%;
          cursor: pointer;
          transition: filter 0.3s ease;
        }
        .subimg.selected {
          filter: brightness(0.1);
        }
      }
      .main-content {
        display: none;
      }
    }
  }
`;
