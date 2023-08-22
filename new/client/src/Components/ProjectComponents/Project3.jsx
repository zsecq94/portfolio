import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project3 = () => {
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
      setImgName("게시판");
    } else if (mainImgUrl === imgUrls[2]) {
      setImgName("진단하기");
    } else if (mainImgUrl === imgUrls[3]) {
      setImgName("화장하기");
    } else {
      setImgName("내 프로필");
    }
  }, []);

  const changeImg = (imgUrl) => {
    setMainImgUrl(imgUrl);
  };

  return (
    <Container>
      <h1>My PC</h1>
      <h5 style={{ color: "gray" }}>23.01.03 ~ 23.02.17(7주)</h5>
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
              <span>JavaScript, React, Redux, Sass</span>
              <span>Node.js, Express, MySQL</span>
              <span>Full-Stack (2/5명)</span>
              <span>
                누구나 쉽게 퍼스널 컬러를 진단받고 화장 추천을 해주는 플랫폼
              </span>
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
        <div className="main">
          <div style={{ display: "flex" }}>
            <span>
              My PC는{" "}
              <span style={{ fontWeight: "bold" }}>
                사진 또는 키오스크를 통해 빠르고 간편하게 자신의 퍼스널 컬러를
                진단할 수 있고, 진단을 통해 사용자의 제품 선택을 보조해주는
              </span>{" "}
              플랫폼입니다.
            </span>
          </div>
          <br />
          <span></span>
        </div>
      </div>
    </Container>
  );
};

export default Project3;

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
