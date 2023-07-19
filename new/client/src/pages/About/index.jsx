import React from "react";
import styled from "styled-components";
import { FaBirthdayCake } from "react-icons/fa";
import { MdPlace, MdAttachEmail } from "react-icons/md";
import { BsFillPersonFill, BsPenFill } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";

import "./About.scss";

const About = () => {
  return (
    <Container>
      <div
        style={{
          marginTop: "70px",
          textAlign: "center",
          textDecoration: "underline",
          textUnderlineOffset: "10px",
        }}
      >
        <h2>✔ ABOUT ME</h2>
      </div>
      <div className="about-wrapper">
        <div className="about1">
          <div className="name">
            <BsFillPersonFill size={"2rem"} />
            <div>
              <h3>이름</h3>
              <h3>배중권</h3>
            </div>
          </div>
          <div className="age">
            <FaBirthdayCake size={"2rem"} />
            <div>
              <h3>생년월일</h3>
              <h3>94.10.03</h3>
            </div>
          </div>
          <div className="address">
            <MdPlace size={"2rem"} />
            <div>
              <h3>주소지</h3>
              <h3>전라남도 나주시</h3>
            </div>
          </div>
        </div>
        <div className="about2">
          <div className="contact">
            <RiContactsBook2Fill size={"2rem"} />
            <div>
              <h3>연락처</h3>
              <h3>010-2556-8761</h3>
            </div>
          </div>
          <div className="email">
            <MdAttachEmail size={"2rem"} />
            <div>
              <h3>이메일</h3>
              <h3>zsecq94@gmail.com</h3>
            </div>
          </div>
          <div className="edu">
            <BsPenFill size={"2rem"} />
            <div>
              <h3>교육</h3>
              <h3>동신대학교 졸업</h3>
              <h3>삼성 청년 SW아카데미 수료</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aee2ff;
  width: 100%;
  height: 100%;
  gap: 1rem;
  color: white;
  .about-wrapper {
    display: flex;
    flex-direction: column;
    color: black;
    background-color: white;
    width: 40%;
    height: 30%;
    border-radius: 20px;
    .about1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50%;
      padding: 20px;
      .name {
        width: 33%;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .age {
        width: 33%;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .address {
        width: 33%;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
    .about2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50%;
      padding: 20px;
      .contact {
        width: 33%;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .email {
        width: 33%;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .edu {
        width: 33%;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
