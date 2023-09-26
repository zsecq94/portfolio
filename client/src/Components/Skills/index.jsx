import React, { useState, useEffect } from "react";

const Skills = ({ skill }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    if (skill === "JavaScript") {
      setColor("#FFC436");
    } else if (skill === "React") {
      setColor("#279EFF");
    } else if (skill === "Sass") {
      setColor("#C23373");
    } else if (skill === "Node.js") {
      setColor("green");
    } else if (skill === "ExpressJS") {
      setColor("#FFC436");
    } else if (skill === "WebSocket") {
      setColor("#793FDF");
    } else if (skill === "D3") {
      setColor("#C08261");
    } else if (skill === "MySQL") {
      setColor("#1450A3");
    } else if (skill === "Spring Boot") {
      setColor("#A8DF8E");
    } else if (skill === "Redux") {
      setColor("#793FDF");
    } else if (skill === "Vue.js") {
      setColor("#279EFF");
    } else if (skill === "Vuex") {
      setColor("#C23373");
    } else if (skill === "Vuetify") {
      setColor("#C08261");
    } else if (skill === "Django") {
      setColor("#A8DF8E");
    } else {
      setColor("#F8DE22");
    }
  }, [skill]);

  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "0 2%",
      }}
    >
      {skill}
    </span>
  );
};

export default Skills;
