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
          <h4>📌 Project Summary & Background </h4>
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
          <h4>❕ Role</h4>
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
          <h4>📜 Technology Stack</h4>
          <li>
            <span>{V?.fe}</span>
          </li>
          {V?.be && (
            <li>
              <span>{V.be}</span>
            </li>
          )}
          {V?.de && (
            <li>
              <span>{V.de}</span>
            </li>
          )}
        </div>
        <br />
        <div className="function">
          <h4>🔨 Main Function</h4>
          {V?.function.map((C, index) => (
            <div style={{ width: "70%" }}>
              <li key={index} style={{ fontWeight: "bold" }}>
                {C}
              </li>
              <img
                style={{ width: "100%" }}
                src={`./images/Modal/Pjt${V?.img}/${index + 1}.gif`}
                alt=""
              />
              <br />
              <span style={{ wordWrap: "break-word" }}>
                {V.function2[index]}
              </span>
              <br />
              <br />
            </div>
          ))}
        </div>
        <hr />
        <br />
        <div className="review">
          <h4>🚩 Project Review</h4>
        </div>
        <br />
        <h4>⚙️ Development Settings</h4>
      </div>
    </div>
  );
};

export default Modal;
