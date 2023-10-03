import React, { useEffect, useState } from "react";

import Skills from "../Skills";
import "./ProjectComponents.scss";

const ProjectComponents = ({ swiperRef, V, toggleModal }) => {
  const [mainImgUrl, setMainImgUrl] = useState(
    `/images/projects/pjt${V.img}/1.gif`
  );
  const [imgName, setImgName] = useState("");
  const imgUrls = [
    `/images/projects/pjt${V.img}/1.gif`,
    `/images/projects/pjt${V.img}/2.gif`,
    `/images/projects/pjt${V.img}/3.gif`,
    `/images/projects/pjt${V.img}/4.gif`,
    `/images/projects/pjt${V.img}/5.gif`,
  ];

  useEffect(() => {
    if (mainImgUrl === imgUrls[0]) {
      setImgName(V.imgName[0]);
    } else if (mainImgUrl === imgUrls[1]) {
      setImgName(V.imgName[1]);
    } else if (mainImgUrl === imgUrls[2]) {
      setImgName(V.imgName[2]);
    } else if (mainImgUrl === imgUrls[3]) {
      setImgName(V.imgName[3]);
    } else {
      setImgName(V.imgName[4]);
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
    <div
      className="pjt"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>{V.name}</h2>
      <h5 style={{ color: "gray" }}>{V.period}</h5>
      <hr className="top-hr" />
      <div className="pjt1-wrapper">
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
                className={`subimg ${
                  mainImgUrl === url ? "selected" : undefined
                }`}
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
                {V.fe.map((skill, index) => (
                  <Skills key={index} skill={skill} />
                ))}
              </div>
              <div className="be-skills">
                {V.be.map((skill, index) => (
                  <Skills key={index} skill={skill} />
                ))}
              </div>
              <span>{V.role}</span>
              <span>{V.outline}</span>
            </div>
          </div>
          <div className="pjt-footer">
            <a
              href={V.git}
              target="_blank"
              rel="noreferrer"
              aria-label="go github"
            >
              <img
                className="img1"
                src="images/giticon.avif"
                alt=""
                style={{ width: "50px" }}
              />
            </a>
            <button className="btn1" onClick={() => toggleModal(V.img)}>
              README
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponents;
