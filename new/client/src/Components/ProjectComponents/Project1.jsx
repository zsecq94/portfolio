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
  }, [mainImgUrl]);

  const changeImg = (imgUrl) => {
    setMainImgUrl(imgUrl);
  };

  return (
    <Container>
      <h1>My PC</h1>
      <h5 style={{ color: "gray" }}>23.04.10 ~ 23.05.26(7주)</h5>
      <div style={{ display: "flex" }}>
        <div className="img-wrapper">
          <img src={mainImgUrl} alt="#" />
          <h4>{imgName}</h4>
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              기술스택 - JavaScript, React, Node.js, express, WebSocket
            </span>
            <span>담당역할 - Full-stack</span>
            <span>프로젝트 개요 - vSLAM기반 자율주행 서비스 로봇</span>
          </div>
        </div>
        <div className="main"></div>
      </div>
    </Container>
  );
};

export default Project1;

const Container = styled.div`
  height: 100%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 3rem;
    font-weight: bolder;
  }
  h4 {
    text-align: left;
  }
  .img-wrapper {
    width: 50%;
    padding: 3% 2% 2% 5%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      text-align: left;
    }
    img {
      width: 100%;
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
    padding: 3% 5% 2% 2%;
  }
`;
