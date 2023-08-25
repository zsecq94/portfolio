import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project5 = () => {
  const [mainImgUrl, setMainImgUrl] = useState(
    "/images/projects/pjt5/main.png"
  );
  const [imgName, setImgName] = useState("");
  const imgUrls = [
    "/images/projects/pjt5/main.png",
    "/images/projects/pjt5/search1.png",
    "/images/projects/pjt5/search2.png",
  ];

  useEffect(() => {
    if (mainImgUrl === imgUrls[0]) {
      setImgName("Main");
    } else if (mainImgUrl === imgUrls[1]) {
      setImgName("Detail");
    } else if (mainImgUrl === imgUrls[2]) {
      setImgName("Wordcup");
    } else if (mainImgUrl === imgUrls[3]) {
      setImgName("Comment");
    } else {
      setImgName("Search & Bookmark");
    }
  }, [mainImgUrl]);

  const changeImg = (imgUrl) => {
    setMainImgUrl(imgUrl);
  };

  return (
    <Container>
      <h1>Crawling</h1>
      <h5 style={{ color: "gray" }}>2023.03.13(1일)</h5>
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
              <span>JavaScript, React</span>
              <span>Python, Node.js, Express</span>
              <span>Full-Stack</span>
              <span>네이버 뉴스 기사 크롤링 학습</span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <a
              href="https://github.com/zsecq94/crawling"
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
                검색하기 → 네이버기사 50개 크롤링 → split, replace를 적용하여
                단어 2글자 이상 나누기 → 워드클라우드 적용 → 뉴스기사 클릭 시
                아웃링크로 이동
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

export default Project5;

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
    gap: 1rem;
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
