import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project3 = ({ swiperRef }) => {
  const [mainImgUrl, setMainImgUrl] = useState(
    "/images/projects/pjt3/main.png"
  );
  const [imgName, setImgName] = useState("");
  const imgUrls = [
    "/images/projects/pjt3/main.png",
    "/images/projects/pjt3/1.gif",
    "/images/projects/pjt3/2.gif",
    "/images/projects/pjt3/3.gif",
    "/images/projects/pjt3/4.gif",
  ];

  useEffect(() => {
    if (mainImgUrl === imgUrls[0]) {
      setImgName("Main");
    } else if (mainImgUrl === imgUrls[1]) {
      setImgName("Article");
    } else if (mainImgUrl === imgUrls[2]) {
      setImgName("PC Check");
    } else if (mainImgUrl === imgUrls[3]) {
      setImgName("Makeup");
    } else {
      setImgName("Profile");
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
      <h2>My PC</h2>
      <h5 style={{ color: "gray" }}>23.01.03 ~ 23.02.17(7주)</h5>
      <hr className="top-hr" />
      <div className="pjt3-wrapper">
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
                    backgroundColor: "#793FDF",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Redux
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
              <span>Full-Stack (2/5명)</span>
              <span>퍼스널 컬러 진단 플랫폼</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <a
              href="https://github.com/zsecq94/ssafy-pjt/tree/main/pjt2"
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
            My PC는 사진 또는 키오스크를 통해 빠르고 간편하게 자신의 퍼스널
            컬러를 진단할 수 있고, 진단을 통해 사용자의 제품 선택을 보조해주는
            플랫폼입니다.
          </span>
          <br />
          <br />
          <h5>📜 상태관리(Redux)</h5>
          <span>
            로그인 정보를 Redux로 관리하면, 애플리케이션 전역에서 로그인 상태를
            효과적으로 관리할 수 있다는 점을 알게되었습니다. 사용자가 로그인하면
            Redux 스토어에 로그인 상태를 저장하고, 다양한 컴포넌트에서 이 정보를
            공유할 수 있습니다. 이로써 상태 관리의 일관성을 유지하고 중복 코드를
            피할 수 있었습니다.
          </span>
          <br />
          <span>
            Redux를 통해 애플리케이션의 상태를 한 곳에서 관리하면서 전역 상태의
            예측 가능성을 높일 수 있다는점과 Redux 미들웨어를 통해 비동기 작업을
            관리하면 코드가 보다 체계적이고 확장 가능하다는 것도 배울 수
            있었습니다.
          </span>
          <br />
          <br />
          <h5>📜 Multer</h5>
          <span>
            프로젝트에서 사용자가 이미지를 업로드하는 상황이 많았습니다.
            사용자가 퍼스널컬러 진단 및 화장하기와 같은 상황에서 자신의 이미지나
            샘플 이미지를 서버로 업로드하여 결과를 확인하는 과정이 필요했습니다.
            Node.js 환경에서 이러한 파일 업로드를 간편하게 다루기 위해 Multer를
            선택하고 구현했습니다.
          </span>
          <br />
          <br />
          <h5>📜 머신러닝 모델과 연계</h5>
          <div>
            <span>
              Python 파일의 머신러닝 모델과 Node.js 서버 간의 효율적인 통신과
              데이터 전달 방식을 이해하는 것이었습니다. 특히 사용자가
              클라이언트를 통해 이미지를 업로드하고 결과를 받아오는 과정에서
              데이터 형식 변환 및 머신러닝 모델에 데이터를 전달하는 것이
              어려움이었습니다.
            </span>
            <br />
            <span>
              이를 극복하기 위해 먼저 통신 메커니즘을 철저히 이해하고,
              클라이언트와 서버 간의 데이터 전달 방식을 통일화하여 일관성을
              유지했습니다. 이로써 데이터 호환성 문제를 극복하고 데이터를
              효율적으로 처리할 수 있었습니다.
            </span>
          </div>
          <br />
          <h5>🔑 Result</h5>
          <span>
            Redux를 활용해 로그인 정보를 관리하는 것으로, 로그인 상태를
            애플리케이션 전반에서 간편하게 공유하고 관리할 수 있다는 것을 알게
            되었습니다.
          </span>
          <br />
          <span>
            Multer를 사용하여 파일 업로드를 간단하게 다루면서, 사용자 이미지
            업로드와 같이 중요한 기능을 원활하게 구현하는 방법을 습득하였습니다.
          </span>
          <br />
          <span>
            Python 머신러닝 모델과 Node.js 서버 간의 효율적인 데이터 통신과 전달
            방식을 배우고 실제로 구현하면서, 클라이언트의 이미지 업로드와
            머신러닝 결과 반환 과정을 원활하게 처리할 수 있는 능력을 기르는
            과정이 매우 유익하였습니다.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Project3;

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
  .pjt3-wrapper {
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
    .top-hr {
      margin: 1% 9% 0 4%;
    }
    .pjt3-wrapper {
      display: flex;
      flex-direction: row;
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
