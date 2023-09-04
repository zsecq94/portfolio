import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project5 = ({ swiperRef }) => {
  const [mainImgUrl, setMainImgUrl] = useState(
    "/images/projects/pjt5/flow.gif"
  );
  const [imgName, setImgName] = useState("");
  const imgUrls = [
    "/images/projects/pjt5/flow.gif",
    "/images/projects/pjt5/about.png",
    "/images/projects/pjt5/skills.png",
    "/images/projects/pjt5/projects.png",
    "/images/projects/pjt5/contact.png",
  ];

  useEffect(() => {
    if (mainImgUrl === imgUrls[0]) {
      setImgName("Flow");
    } else if (mainImgUrl === imgUrls[1]) {
      setImgName("About");
    } else if (mainImgUrl === imgUrls[2]) {
      setImgName("Skills");
    } else if (mainImgUrl === imgUrls[3]) {
      setImgName("Projects");
    } else {
      setImgName("Contact");
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
      <h2>Portfolio</h2>
      <h5 style={{ color: "gray" }}>23.08.14 ~ 23.08.25(2주)</h5>
      <hr className="top-hr" />
      <div className="pjt5-wrapper">
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
              <span>Deploy</span>
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
                    backgroundColor: "#F8DE22",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Firebase
                </span>
              </div>
              <span>Frontend</span>
              <span>개인 포트폴리오 제작</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <a
              href="https://github.com/zsecq94/portfolio"
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
            취업을 목적으로 한 개인 포트폴리오 제작 사이트입니다. 가장 자신 있는
            Javascript와 React를 이용해 제작했으며 Firebase의 Hosting을 이용해
            배포했습니다.
          </span>
          <br />
          <br />
          <h5>📜 Design</h5>
          <span>
            혼자서 프로젝트를 진행하다 보니 디자인적 요소를 선택할 때 다른사람의
            평가와 피드백을 받을 수 없어서, 포트폴리오를 검토하는 사람의
            시각에서 최대한 깔끔하고 쉽게 내용을 이해할 수 있도록 레이아웃을
            구성했습니다. 각 컴포넌트의 레이아웃을 구성할 때는 온라인
            커뮤니티에서 얻은 아이디어를 활용하여 나만의 최적화된 디자인을
            구현할 수 있었습니다.
          </span>
          <br />
          <span>
            초기 디자인 아이디어가 실제로 구현되면서 예상치 못한 문제나 개선
            사항이 생겼습니다. 이러한 문제점이 생길때마다 여러가지 방식으로
            실험하고 수정하며 완성도 높은 레이아웃을 구현할 수 있었습니다.
          </span>
          <br />
          <br />
          <h5>📜 Deploy</h5>
          <div>
            <span>
              처음에는 FE와 BE 모두 구성하여 AWS서버를 구매해 배포할 생각을
              가지고 있었지만, 프로젝트의 볼륨이 생각보다 크지 않고, 빠르고
              손쉽게 배포할 수 있는 방법을 알게되어 프로젝트의 볼륨에 맞춰
              Firebase의 호스팅 서비스를 사용하여 정적 웹사이트를 배포했습니다.
            </span>
          </div>
          <br />
          <h5>🔑 Result</h5>
          <span>
            디자인에 대해 많은 공부를 할 수 있었습니다. 혼자서 진행하다 보니
            자유롭게 원하는 대로 구현할 수 있는 장점도 있었지만, 디자인 요소를
            추가할 때마다 상당한 시간이 소요되었습니다. 구글링을 통해 다양한
            아이디어와 기술을 습득하며, 디자인에 대한 시야도 확장할 수 있었다고
            생각합니다.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Project5;

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
  .pjt5-wrapper {
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
    .pjt5-wrapper {
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
