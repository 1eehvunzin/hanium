import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import previous from "../assets/images/Group.png";
import "../assets/style.css";
import PillSearchRes from "./PillSearchRes";

function AddByImage() {
  const location = useLocation();
  const { imageUrl } = location.state || {};

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        {/* 이미지 */}
        <img
          src={imageUrl}
          alt="약물 사진"
          style={{ width: "100%", borderRadius: "0 0 30px 30px" }}
        />
        <Link to="/">
          <button
            style={{
              position: "absolute",
              top: "44px",
              left: "24px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              src={previous}
              alt="이전"
              style={{ display: "block", width: "24px", height: "auto" }}
            />
          </button>
        </Link>
      </div>
      <div
        style={{
          margin: "40px 24px 0 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "100%",
          overflow: "auto",
        }}
      >
        <PillSearchRes />
        <PillSearchRes />
        <PillSearchRes />
        <h4 style={{ textAlign: "center", marginBottom: "16px" }}>
          찾는 약물이 결과에 없나요?
        </h4>

        <h4 style={{ textAlign: "center" }}>
          <button
            onClick={() => console.log("클릭!")}
            style={{
              all: "unset",
              cursor: "pointer",
              color: "#1892fa",
              textDecoration: "underline",
            }}
          >
            여기
          </button>
          를 누르면 선택된 약물은 남기고, <br />
          나머지 약물을 다른 인식 후보로 새로고침합니다.
        </h4>
      </div>
      <Link to="/add2ByImage" className="next-btn">
        <button>
          <h4 style={{ color: "#ffffff", margin: "17px 0" }}>다음으로</h4>
        </button>
      </Link>
    </div>
  );
}

export default AddByImage;
