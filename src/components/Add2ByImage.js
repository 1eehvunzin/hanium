import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import previous from "../assets/images/Group.png";
import add from "../assets/images/Button.png";
import "../assets/style.css";
import IntakeScheduler from "./IntakeScheduler";
import DoseAdd from "./DoseAdd";
function Add2() {
  const [doses, setDoses] = useState([0]);

  const handleAddDose = () => {
    setDoses((prev) => [...prev, prev.length]); // 새 id 추가
  };

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
          <Link to="/addbyimage">
            <button style={{ marginTop: "44px", marginBottom: "12px" }}>
              <img src={previous} alt="이전"></img>
            </button>
          </Link>

          <h4 style={{ marginBottom: "12px" }}>2/2</h4>
          <h2 style={{ marginBottom: "40px" }}>복용 일정 등록</h2>
        </div>
        <div style={{ margin: "0 24px" }}>
          <IntakeScheduler />
        </div>

        <div style={{ padding: "0 24px" }}>
          {doses.map((id, idx) => (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <DoseAdd index={idx} />
            </div>
          ))}

          <button style={{ marginTop: "28px" }} onClick={handleAddDose}>
            <img src={add} alt="일정 추가하기" />
          </button>
        </div>
      </div>
      <Link to="/" className="next-btn">
        <button>
          <h4 style={{ color: "#ffffff", margin: "17px 0" }}>등록 (n/n)</h4>
        </button>
      </Link>
    </div>
  );
}

export default Add2;
