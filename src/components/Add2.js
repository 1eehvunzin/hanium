import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import previous from "../assets/images/Group.png";
import add from "../assets/images/Button.png";
import "../assets/style.css";
import IntakeScheduler from "./IntakeScheduler";
function Add2({ onBackclick }) {
  const [selected, setSelected] = useState(null);
  const options = ["식전", "식후", "무관", "기타"];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            padding: "0 24px",
            position: "relative",
            zIndex: 905,
            width: "100%",
          }}
        >
          <button style={{ marginTop: "44px", marginBottom: "12px" }}>
            <img src={previous} alt="이전"></img>
          </button>
          <h4 style={{ marginBottom: "12px" }}>2/2</h4>
          <h2 style={{ marginBottom: "40px" }}>복용 일정 등록</h2>
        </div>
        <div style={{ margin: "0 24px" }}>
          <IntakeScheduler />
        </div>

        <div style={{ padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ marginTop: "44px" }}>복용 1</h3>
            <h3 style={{ marginTop: "44px", color: "#8C8E97" }}>00:00</h3>
          </div>
          <button style={{ marginTop: "28px" }}>
            <img src={add} alt="일정 추가하기"></img>
          </button>
        </div>
      </div>
      <Link to="/" className="next-btn">
        <button>
          <h4 style={{ color: "#ffffff", margin: "17px 0" }}>등록</h4>
        </button>
      </Link>
    </div>
  );
}

export default Add2;
