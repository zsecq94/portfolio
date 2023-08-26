import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Project2 = ({ swiperRef }) => {
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

  const handleMouseEnter = () => {
    swiperRef.current.swiper.disable();
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.enable();
  };

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2>T:LENS</h2>
      <h5 style={{ color: "gray" }}>23.02.20 ~ 23.04.07(7주)</h5>
      <hr style={{ margin: "1% 5% 0% 4%" }} />
      <div className="pjt2-wrapper">
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
              <span style={{ display: "flex", gap: "3%" }}>
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
                <span
                  style={{
                    backgroundColor: "#C08261",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  D3
                </span>
              </span>
              <span style={{ display: "flex", gap: "3%" }}>
                <span
                  style={{
                    backgroundColor: "#A8DF8E",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    padding: "0 2% 0 2%",
                  }}
                >
                  Spring Boot
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
              </span>
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
        <div className="main-content">
          <span style={{ fontWeight: "bold" }}>
            T:LENS는 실시간 크롤링 및 분산 처리를 통해 다양한 뉴스 데이터를
            수집하고, 이를 종합하여 트렌드를 파악하고 시각화하는 뉴스 트렌드
            분석 서비스입니다.
          </span>
          <br />
          <br />
          <h5>📜 시각화 라이브러리</h5>
          <span>
            추출된 데이터를 어떤 라이브러리를 사용하여 시각화해야되는지 많은
            고민을 했습니다. 프로젝트의 목적과 요구 사항에 맞게 적절한
            라이브러리를 선택하는 것이 가장 중요하다고 생각했고, 여러
            라이브러리를 비교하고 실험해보면서 프로젝트의 특성과 요구사항을 가장
            잘 반영하는 라이브러리를 선택하여 적용했습니다. 라이브러리마다
            지원하는 기능이 다르기때문에 디자인적 요소와 데이터 전달방식을
            체크하여 선정했습니다.
          </span>
          <br />
          <br />
          <h5>📜 대량의 데이터</h5>
          <span>
            프로젝트에서 대량의 데이터를 다루기 때문에 최초의 페이지 로딩시
            20개의 데이터를 불러오고 스크롤을 내릴 때마다 추가적으로 20개씩 로드
            하는 무한 스크롤 기능을 구현했습니다. 추가로 데이터가 로드되는 동안
            화면이 튀거나 사용자 입력이 먹통되지 않도록 스피너 라이브러리를
            사용하여 로딩 화면을 따로 구현했습니다.
          </span>
          <br />
          <br />
          <h5>📜 반응형 그리드 시스템</h5>
          <div>
            <span>
              다양한 화면 크기와 디바이스에 대응하기 위해 반응형 그리드 시스템을
              적용하여 화면 크기가 변경될 때 컬럼의 너비나 행의 배치를 조정하여
              레이아웃을 최적화 하도록 구현했습니다.
            </span>
            <br />
          </div>
          <br />
          <h5>🔑 Result</h5>
          <span>
            추출된 데이터를 다양한 시각화 라이브러리인 d3, Amcharts, Wordcloud,
            Apexcharts 등을 활용하여 시각적으로 표현하는 데 중점을 두었습니다.
            이를 통해 사용자들에게 직관적이고 명확한 정보 제공을 목표로
            하였습니다. 또한, 이 프로젝트를 통해 스프링 부트로 구현된 서버와의
            소통 경험을 쌓을 수 있었습니다.
          </span>
          <br />
          <span>
            Front-End와 Back-End 간의 데이터 흐름과 API 통신에 대한 이해도를
            향상시키며, 팀원들과의 원활한 협업을 통해 서비스의 기능과 퍼포먼스를
            최적화하는 과정에서 성장했다고 생각합니다.
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Project2;

const Container = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  .pjt2-wrapper {
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
`;
