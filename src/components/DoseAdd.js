import React, { useEffect, useRef, useState } from "react";

function DoseAdd({ index }) {
  const [time, setTime] = useState("00:00");
  const timeInputRef = useRef(null);

  const handleTimeClick = () => {
    if (timeInputRef.current.showPicker) {
      // 크롬 등 최신 브라우저는 showPicker 지원
      timeInputRef.current.showPicker();
    } else {
      // 그 외 브라우저 fallback
      timeInputRef.current.click();
    }
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h3 style={{ marginTop: "44px" }}>복용 {index + 1}</h3>
      <h3
        style={{ marginTop: "44px", color: "#8C8E97", cursor: "pointer" }}
        onClick={handleTimeClick}
      >
        {time}
      </h3>
      <input
        type="time"
        ref={timeInputRef}
        style={{ display: "none" }}
        value={time}
        onChange={handleTimeChange}
      />
    </div>
  );
}

export default DoseAdd;
