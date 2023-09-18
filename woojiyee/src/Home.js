import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  // 네이버로 이동하는 함수
  const goToNaver = () => {
    window.location.href = "https://www.naver.com/";
  };
  return (
    <>
      <div>Home</div>
      <div onClick={() => navigate("/healthcheck")}>건강 체크</div>
      <div onClick={goToNaver}>네이버</div>
    </>
  );
};
