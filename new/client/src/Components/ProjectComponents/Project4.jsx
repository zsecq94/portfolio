import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project4 = () => {
  const [mainImgUrl, setMainImgUrl] = useState(
    "/images/projects/pjt4/main.gif"
  );
  const [imgName, setImgName] = useState("");
  const imgUrls = [
    "/images/projects/pjt4/main.gif",
    "/images/projects/pjt4/detail.gif",
    "/images/projects/pjt4/worldcup.gif",
    "/images/projects/pjt4/comment.gif",
    "/images/projects/pjt4/searchbookmark.gif",
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
  }, []);

  const changeImg = (imgUrl) => {
    setMainImgUrl(imgUrl);
  };

  return (
    <Container>
      <h1>YB MOVIE</h1>
      <h5 style={{ color: "gray" }}>22.12.15 ~ 22.12.23(1주)</h5>
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
              <span>JavaScript, Vue.js, Vuex, Vuetify</span>
              <span>Django</span>
              <span>Full-Stack (2/2명)</span>
              <span>
                영화정보 API를 받아와 사용자의 선택에 따라서 추천해주는 플랫폼
              </span>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <a
              href="https://github.com/zsecq94/ssafy-pjt/tree/main/pjt1"
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
              YB MOVIE는{" "}
              <span style={{ fontWeight: "bold" }}>
                데이터 기반 영화 추천 서비스
              </span>
              입니다.{" "}
              <span style={{ fontWeight: "bold" }}>
                사용자는 영화에 대한 코멘트를 남길 수 있으며, 영화
                이상형월드컵을 이용해 사용자가 선호하는 장르를 파악하여 영화를
                추천해주는
              </span>{" "}
              서비스입니다.
            </span>
          </div>
          <br />
          <span></span>
        </div>
      </div>
    </Container>
  );
};

export default Project4;

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
