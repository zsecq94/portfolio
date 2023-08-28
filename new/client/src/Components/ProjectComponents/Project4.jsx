import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project4 = ({ swiperRef }) => {
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
      <h2>YB MOVIE</h2>
      <h5 style={{ color: "gray" }}>22.12.15 ~ 22.12.23(1주)</h5>
      <hr className="top-hr" />
      <div className="pjt4-wrapper">
        <div className="img-wrapper">
          <img src={mainImgUrl} alt="#" style={{ width: "104%" }} />
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
                  Vue.js
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
                  Vuex
                </span>
                <span
                  style={{
                    backgroundColor: "#C08261",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Vuetify
                </span>
              </div>
              <div className="be-skills">
                <span
                  style={{
                    backgroundColor: "#A8DF8E",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Django
                </span>
              </div>
              <span>Full-Stack (2/2명)</span>
              <span>영화 추천 서비스</span>
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
        <div className="main-content">
          <span style={{ fontWeight: "bold" }}>
            YB MOVIE는 데이터 기반 영화 추천 서비스 입니다. 사용자는 영화에 대한
            코멘트를 남길 수 있으며, 영화 이상형월드컵을 이용해 사용자가
            선호하는 장르를 파악하여 영화를 추천해주는 서비스입니다.
          </span>
          <br />
          <br />
          <h5>📜 추천 알고리즘</h5>
          <span>
            영화추천알고리즘은 영화 월드컵을 진행하여 결승전에 진출한 영화 2개를
            활용하여 Tmdb에 서 추천 영화를 넘겨는 Recommend API를 활용했습니다.
          </span>
          <br />
          <br />
          <h5>📜 Youtube API</h5>
          <span>
            YouTube API와 Axios 라이브러리를 처음 사용해 API 요청과 응답 처리를
            연결하는 방법이 어려웠습니다. 또한, 영화 제목과 "트레일러"라는
            검색어를 조합하여 정확한 검색을 보내는 로직을 개발하고, API 요청
            상태에 따른 사용자 경험을 관리하는 비동기 처리와 UI 업데이트도
            고려해야 했습니다. API 키 관리와 보안 역시 중요한 고려사항이었는데,
            이러한 어려움을 극복하기 위해 문서와 커뮤니티의 지식을 활용하여
            점진적으로 기능을 완성시켰습니다.
          </span>
          <br />
          <br />
          <h5>📜 Modal</h5>
          <div>
            <span>
              사용자들이 조금이라도 더 편리하게 사용하기위한 방법을 찾던 중 모달
              컴포넌트를 알게되었습니다. 사용자의 시선을 집중시키고 중요
              페이지를 유지하며 영화의 정보를 빠르게 파악할수있고, 일관된
              디자인을 제공할수 있기 때문에 모달을 적극으로 활용하여 사용자들이
              영화의 정보를 쉽고 빠르게 파악할 수 있도록 구현했습니다.
            </span>
          </div>
          <br />
          <h5>🔑 Result</h5>
          <span>
            처음 수행한 프로젝트였지만, 초기에는 어떻게 시작해야 할지 막막함을
            느꼈습니다. 하지만 단계적으로 기능을 구현하며 자신감을 얻게
            되었습니다. 추천 알고리즘, API 처리와 보안, 비동기 처리, 모달
            컴포넌트 활용, 사용자 편의성 고려 등 다양한 과제를 공식 문서와
            커뮤니티 지식을 활용하여 해결해나감으로써 점차 프로젝트가 완성되는
            과정을 경험하게 되었습니다.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Project4;

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
  .pjt4-wrapper {
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
    .pjt4-wrapper {
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
