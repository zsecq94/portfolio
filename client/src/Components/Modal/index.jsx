import React from "react";
import data from "./data.json";
import CodeBlock from "../CodeBlock";

import "./Modal.scss";
import { useStateStore } from "../../Store/useStateStore";

const Modal = () => {
  const { modalOpenState, checkModalNumState, toggleModal } = useStateStore();
  const V = data[checkModalNumState - 1];
  const goToScroll = (name) => {
    var element = document.querySelector("." + name);
    var modalWrapper = document.querySelector(".modal-wrapper");
    modalWrapper.scrollTop = element.offsetTop - 75;
  };

  return (
    <div className={`modal-wrapper ${modalOpenState ? "open" : undefined}`}>
      <div className="modal-header">
        <h3>💾 {V?.name}.md</h3>
        <div className="modal-header-menu">
          <h6 onClick={() => goToScroll("summary")}>
            PJT SUMMARY & BACKGROUND
          </h6>
          <h6 onClick={() => goToScroll("function")}>FUNCTION</h6>
          <h6 onClick={() => goToScroll("learned")}>LEARNED</h6>
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
            <div key={index}>
              <span>{value}</span>
              <br />
            </div>
          ))}
        </div>
        <br />
        <div>
          <h4 style={{ marginBottom: "10px" }}>❕ Role</h4>
          <ul>
            {V?.role.map((C, index) => (
              <li
                key={index}
                style={index === 0 ? { color: "red", fontWeight: "bold" } : {}}
              >
                {C}
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div>
          <h4 style={{ marginBottom: "10px" }}>📜 Technology Stack</h4>
          <ul>
            <li>{V?.fe}</li>
          </ul>
          <ul>{V?.be && <li>{V.be}</li>}</ul>
          <ul>{V?.de && <li>{V.de}</li>}</ul>
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
            <div key={index} className="img-content">
              <span style={{ fontWeight: "bold" }}># {C}</span>
              <img
                style={{ width: "100%", margin: "10px 0" }}
                src={`./images/Modal/pjt${V?.img}/${index + 1}.gif`}
                alt=""
              />
              <br />
              {V?.function2[index].split("////").map((a, index) => (
                <div
                  key={index}
                  style={{ wordWrap: "break-word", marginBottom: "10px" }}
                >
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
        <div className="learned">
          <h4 style={{ marginBottom: "10px" }}>🚩 Learned</h4>
          {V?.title.map((C, index) => (
            <div key={index}>
              <h5 style={{ fontSize: "1rem" }}>{C}</h5>
              <span>{V.learned[index]}</span>
              <br />
              <br />
            </div>
          ))}
        </div>
        <h4 style={{ marginBottom: "10px" }}>🔑 Result</h4>
        <ul>
          {V?.result.map((C, index) => (
            <li key={index}>{C}</li>
          ))}
        </ul>
        <br />
        <h4 style={{ marginBottom: "10px" }}>⚙️ Getting Started</h4>
        <CodeBlock num={V?.img} />
      </div>
    </div>
  );
};

export default Modal;
