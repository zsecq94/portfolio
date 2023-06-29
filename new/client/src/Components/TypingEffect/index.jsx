import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "10년간의 축구선수 경험을 통해 키운 커뮤니케이션 능력과 끈기";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  const renderText = (text) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      if (word[0] === "커" || word[0] === "끈") {
        return (
          <span
            key={index}
            style={{
              color:
                (word[0] === "커" && "green") || (word[0] === "끈" && "blue"),
              fontSize: "4rem",
            }}
          >
            {word}{" "}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return <Container>{displayText && renderText(displayText)}</Container>;
};

export default TypingEffect;

const Container = styled.div`
  font-size: 2rem;
`;

// else {
//   setTimeout(() => {}, 1000); // 텍스트가 모두 나타난 후 1초 뒤에 키워드를 나타내도록 설정했습니다.
// }
