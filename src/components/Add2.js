import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import previous from "../assets/images/Group.png";
import add from "../assets/images/Button.png";
import "../assets/style.css";
import IntakeScheduler from "./IntakeScheduler";
import DoseAdd from "./DoseAdd";

function Add2() {
  const location = useLocation();
  const navigate = useNavigate();

  // Add.js에서 넘어온 데이터 받기
  const { name, dose, timing } = location.state || {};

  const [doses, setDoses] = useState([0]);
  const [schedules, setSchedules] = useState([{ time: "08:00" }]);

  const handleAddDose = () => {
    setDoses((prev) => [...prev, prev.length]); // 기존 구조 유지
    setSchedules((prev) => [...prev, { time: "" }]);
  };

  // DoseAdd 등에서 시간 입력을 처리할 때 호출할 수 있게끔
  const handleTimeChange = (index, value) => {
    const updated = [...schedules];
    updated[index].time = value;
    setSchedules(updated);
  };

  // 등록 버튼 클릭 시 API 호출
  const handleRegister = async () => {
    const payload = {
      name,
      dose,
      timing,
      schedules: schedules.map((s) => s.time),
    };

    try {
      const res = await fetch("http://localhost:8080/medications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("등록 실패");
      alert("복용 정보가 성공적으로 등록되었습니다!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("등록 중 오류가 발생했습니다.");
    }
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
          <Link to="/add">
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
              {/* 원래 DoseAdd 자리에 시간 입력이 있다면 거기서 handleTimeChange 사용 */}
              <DoseAdd index={idx} onTimeChange={handleTimeChange} />
            </div>
          ))}

          <button style={{ marginTop: "28px" }} onClick={handleAddDose}>
            <img src={add} alt="일정 추가하기" />
          </button>
        </div>
      </div>

      {/* 등록 버튼 클릭 시 handleRegister 실행 */}
      <button className="next-btn" onClick={handleRegister}>
        <h4 style={{ color: "#ffffff", margin: "17px 0" }}>등록</h4>
      </button>
    </div>
  );
}

export default Add2;
