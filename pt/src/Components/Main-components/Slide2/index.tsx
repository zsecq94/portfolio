import React from "react";
import "./Slide2.scss";

const Slide2 = () => {
  return (
    <div className="swiper-slide2">
      <div
        className="slide2-left"
        style={{ width: "35%", height: "100%", marginTop: "10%" }}
      >
        <div className="slide2-left-top" style={{ height: "20%" }}>
          <h1>HELLO</h1>
        </div>
        <div className="slide2-left-mid" style={{ height: "40%" }}>
          <h2>아아아아아 | 니니니</h2>
        </div>
        <div className="slide2-left-bot" style={{ height: "40%" }}>
          <h4>라면</h4>
          <h4>담배</h4>
          <h4>싸피</h4>
        </div>
      </div>
      <div
        className="slide2-right"
        style={{ width: "65%", height: "100%", marginTop: "10%" }}
      >
        <h2>right</h2>
      </div>
    </div>
  );
};

export default Slide2;
