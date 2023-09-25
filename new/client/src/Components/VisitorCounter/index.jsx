import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 방문자 수를 1 증가시킵니다.
    const savedVisitorCount = Cookies.get("visitorCount");

    if (savedVisitorCount) {
      // 쿠키에서 읽어온 방문자 수를 state에 저장합니다.
      setVisitorCount(parseInt(savedVisitorCount));
    } else {
      // 쿠키가 없는 경우 방문자 수를 0으로 초기화합니다.
      setVisitorCount(0);
    }

    // 방문자 수를 1 증가시킵니다.
    setVisitorCount((prevCount) => prevCount + 1);

    // 컴포넌트가 언마운트될 때 쿠키에 방문자 수를 저장합니다.
    return () => {
      Cookies.set("visitorCount", visitorCount.toString());
    };
  }, []);

  return (
    <div>
      <h5>{visitorCount}</h5>
    </div>
  );
};

export default VisitorCounter;
