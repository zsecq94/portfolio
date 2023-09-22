import React from "react";
import data from "./data.json";

import "./Modal.scss";

const Modal = ({ toggleModal, modalOpen, checkModalNum }) => {
  const V = data[checkModalNum - 1];
  return (
    <div className={`modal-wrapper ${modalOpen ? "open" : ""}`}>
      <div className="modal-header">
        <h3>💾 README.md</h3>
        <h3 className="back" onClick={() => toggleModal()}>
          뒤로가기
        </h3>
      </div>
      <div className="modal-content">
        <h2>📎 {V?.name}</h2>
        <hr />
        <br />
        <h4>📌 Summary</h4>
        <span>{V?.summary}</span>
        <br />
        <br />
        <h4>❕ Role</h4>
        {V?.role.map((C, index) => (
          <li
            key={index}
            style={index === 0 ? { color: "red", fontWeight: "bold" } : {}}
          >
            {C}
          </li>
        ))}
        <br />
        <br />
        <h4>📜 Technology Stack</h4>
        <li>
          <span>{V?.fe}</span>
        </li>
        <li>
          <span>{V?.be}</span>
        </li>
        {V?.de && (
          <li>
            <span>{V.de}</span>
          </li>
        )}
        <br />
        <br />
        <h4>🔨 Main Function</h4>
        {V?.function.map((C, index) => (
          <div>
            <li key={index} style={{ fontWeight: "bold" }}>
              {C}
            </li>
            <img src="" alt="" />
          </div>
        ))}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Modal;
