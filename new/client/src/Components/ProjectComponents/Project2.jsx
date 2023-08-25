import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project2 = () => {
  const [mainImgUrl, setMainImgUrl] = useState(
    "/images/projects/pjt2/main.gif"
  );
  const [imgName, setImgName] = useState("");
  const imgUrls = [
    "/images/projects/pjt2/main.gif",
    "/images/projects/pjt2/main2.gif",
    "/images/projects/pjt2/region.gif",
    "/images/projects/pjt2/company.gif",
    "/images/projects/pjt2/reporter.gif",
  ];

  useEffect(() => {
    if (mainImgUrl === imgUrls[0]) {
      setImgName("Main");
    } else if (mainImgUrl === imgUrls[1]) {
      setImgName("Main2");
    } else if (mainImgUrl === imgUrls[2]) {
      setImgName("Region");
    } else if (mainImgUrl === imgUrls[3]) {
      setImgName("Company");
    } else {
      setImgName("Reporter");
    }
  }, [mainImgUrl]);

  const changeImg = (imgUrl) => {
    setMainImgUrl(imgUrl);
  };

  return (
    <Container>
      <h1>T:LENS</h1>
      <h5 style={{ color: "gray" }}>23.02.20 ~ 23.04.07(7주)</h5>
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
              <span>JavaScript, React, Sass, D3, ApexCharts</span>
              <span>Spring Boot</span>
              <span>Frontend (2/6명)</span>
              <span>사용자를 위한 가장 담백한 뉴스 트랜드 분석 서비스</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <a
              href="https://github.com/zsecq94/ssafy-pjt/tree/main/pjt3"
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
                T:LENS는 실시간 크롤링 및 분산 처리를 통해 다양한 뉴스 데이터를
                수집하고, 이를 종합하여 트렌드를 파악하고 시각화하는 뉴스 트렌드
                분석 서비스입니다.
              </span>
            </span>
          </div>
          <br />
          <span></span>
        </div>
      </div>
    </Container>
  );
};

export default Project2;

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
