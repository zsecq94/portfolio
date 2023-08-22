import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project1 = () => {
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
      setImgName("Main-Flow");
    } else if (mainImgUrl === imgUrls[1]) {
      setImgName("Login");
    } else if (mainImgUrl === imgUrls[2]) {
      setImgName("Signup");
    } else if (mainImgUrl === imgUrls[3]) {
      setImgName("Call");
    } else {
      setImgName("Record & Delete");
    }
  }, []);

  const changeImg = (imgUrl) => {
    setMainImgUrl(imgUrl);
  };

  return (
    <Container>
      <h1>BRUEMI</h1>
      <h5 style={{ color: "gray" }}>23.04.10 ~ 23.05.26(7주)</h5>
      <hr style={{ margin: "1% 4% 0% 4%" }} />
      <div style={{ display: "flex" }}>
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
              }}
            >
              <span>JavaScript, React, Sass</span>
              <span>Node.js, express, WebSocket</span>
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
        <div className="main">
          <div style={{ display: "flex" }}>
            <span>
              <span style={{ fontWeight: "bold" }}>
                BRUEMI는 VSLAM기반 자율주행 서비스 로봇은 실내에서 물건을
                전달해주는 수요응답형 서비스 로봇입니다.
              </span>{" "}
              로봇은 실내 지도작성, 위치추정, 장애물 회피 기능을 수행합니다.
              천장을 보는 카메라를 이용하여 VSLAM을 사용하기에 빠르게 지도작성을
              수행하고 초기세팅시간이 짧은 장점이 있습니다. 구체적인 서비스는
              <span style={{ fontWeight: "bold" }}>
                {" "}
                호출, 배송, 취소, 대기열 등록{" "}
              </span>
              이 있습니다.
            </span>
          </div>
          <br />
          <span></span>
        </div>
      </div>
    </Container>
  );
};

export default Project1;

const Container = styled.div`
  padding: 10px;
  height: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 3rem;
  }
  .img-wrapper {
    width: 50%;
    padding: 2% 2% 2% 5%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
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
  .main {
    width: 50%;
    padding: 2% 5% 2% 2%;
    text-align: left;
  }
`;
