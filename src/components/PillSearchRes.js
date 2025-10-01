import React from "react";
function PillSearchRes() {
  return (
    <div style={{ position: "relative", marginBottom: "16px" }}>
      <div
        className="medicine-box"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "24px",
            width: "100%",
          }}
        >
          <h3 style={{ marginBottom: "8px" }}>오메가 3</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <h4>더블 클릭하여 상세 정보 확인</h4>
            <h4>의약품</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PillSearchRes;
