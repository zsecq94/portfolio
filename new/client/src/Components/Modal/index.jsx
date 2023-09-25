import React from "react";
import data from "./data.json";

import "./Modal.scss";

const Modal = ({ toggleModal, modalOpen, checkModalNum }) => {
  const V = data[checkModalNum - 1];
  const goToScroll = (name) => {
    var element = document.querySelector("." + name);
    var modalWrapper = document.querySelector(".modal-wrapper");
    modalWrapper.scrollTop = element.offsetTop - 75;
  };

  return (
    <div className={`modal-wrapper ${modalOpen ? "open" : ""}`}>
      <div className="modal-header">
        <h3>💾 {V?.name}.md</h3>
        <div className="modal-header-menu">
          <h6 onClick={() => goToScroll("summary")}>
            PJT SUMMARY & BACKGROUND
          </h6>
          <h6 onClick={() => goToScroll("role")}>ROLE</h6>
          <h6 onClick={() => goToScroll("stack")}>STACK</h6>
          <h6 onClick={() => goToScroll("function")}>FUNCTION</h6>
          <h6 onClick={() => goToScroll("review")}>PJT REVIEW</h6>
        </div>
        <h3 className="back" onClick={() => toggleModal()}>
          BACK
        </h3>
      </div>
      <div className="modal-content">
        <h2>📎 {V?.name}</h2>
        <hr />
        <br />
        <div className="summary">
          <h4 style={{ marginBottom: "10px" }}>
            📌 Project Summary & Background{" "}
          </h4>
          <span>{V?.summary}</span>
          <br />
          <br />
          {V?.background.map((value, index) => (
            <div>
              <span>{value}</span>
              <br />
            </div>
          ))}
        </div>
        <br />
        <div className="role">
          <h4 style={{ marginBottom: "10px" }}>❕ Role</h4>
          {V?.role.map((C, index) => (
            <li
              key={index}
              style={index === 0 ? { color: "red", fontWeight: "bold" } : {}}
            >
              {C}
            </li>
          ))}
        </div>
        <br />
        <div className="stack">
          <h4 style={{ marginBottom: "10px" }}>📜 Technology Stack</h4>
          <li>{V?.fe}</li>
          {V?.be && <li>{V.be}</li>}
          {V?.de && <li>{V.de}</li>}
        </div>
        <br />
        <div className="function">
          <div
            style={{
              display: "flex",
              marginBottom: "10px",
              alignItems: "center",
            }}
          >
            <h4>🔨 Main Function</h4>
            <h6 style={{ color: "gray", marginLeft: "5px" }}>
              (직접 구현한 기능에 대한 소개)
            </h6>
          </div>
          {V?.function.map((C, index) => (
            <div className="img-content">
              <li key={index} style={{ fontWeight: "bold" }}>
                {C}
              </li>
              <img
                style={{ width: "100%", margin: "10px 0" }}
                src={`./images/Modal/pjt${V?.img}/${index + 1}.gif`}
                alt=""
              />
              <br />
              {V?.function2[index].split("////").map((a) => (
                <div style={{ wordWrap: "break-word", marginBottom: "10px" }}>
                  <span>{a}</span>
                </div>
              ))}
              <br />
              <br />
            </div>
          ))}
        </div>
        <hr />
        <br />
        <div className="review">
          <h4 style={{ marginBottom: "10px" }}>🚩 Project Review</h4>
          <h5># 총평</h5>
          <span>1234</span>
          <h5># Good Point</h5>
          <span>1234</span>
          <h5># Bad Point</h5>
          <span>1234</span>
          <h5># 개선사항</h5>
          <span>1234</span>
          {V?.review.map((C, index) => (
            <li key={index}>{C}</li>
          ))}
        </div>
        <br />
        <h4 style={{ marginBottom: "10px" }}>⚙️ Development Settings</h4>
      </div>
    </div>
  );
};

export default Modal;
