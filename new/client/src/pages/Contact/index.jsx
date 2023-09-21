import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.scss";

const Contact = () => {
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    icon: "👏",
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.current[0].value.length < 1 ||
      form.current[1].value.length < 1 ||
      form.current[2].value.length < 1
    ) {
      toast.error("모든 항목을 작성해주세요!", toastOptions);
      return;
    } else {
      emailjs
        .sendForm(
          "service_n0vltp5",
          "template_i5asaew",
          form.current,
          "Rj-11J1i-nZ4FX0NK"
        )
        .then(
          (result) => {
            toast.success("메일이 보내기 성공!", toastOptions);
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact1">
      <div className="contact2">
        <ToastContainer className="toast-container" />
        <div
          style={{
            marginTop: "55px",
            textDecoration: "underline",
            textUnderlineOffset: "10px",
          }}
        >
          <h2>✔ CONTACT</h2>
        </div>
        <div style={{ display: "flex", gap: "2rem", marginTop: "50px" }}>
          <img
            src="images/send.png"
            alt=""
            style={{ width: "400px", height: "410px", borderRadius: "5px" }}
          />
          <div className="contact-wrapper">
            <div style={{ display: "flex" }}>
              <form ref={form}>
                <input
                  type="email"
                  name="user_name"
                  placeholder=" 연락받을 이메일"
                />
                <input
                  type="number"
                  name="user_phone"
                  placeholder=" 전화번호( -제외 )"
                />
                <textarea name="message" placeholder=" 메세지" />
                <button className="btn1" onClick={sendEmail}>
                  메일 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/zsecq94" target="_blank" rel="noreferrer">
          <img src="images/giticon.png" alt="" style={{ width: "50px" }} />
        </a>
        <h5>© 2023. Bae Joong Kwon. All rights reserved.</h5>
      </div>
    </div>
  );
};

export default Contact;
