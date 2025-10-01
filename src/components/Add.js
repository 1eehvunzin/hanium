import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import previous from "../assets/images/Group.png";
import "../assets/style.css";

// const API = "https://simple-openapi-service.onrender.com";

async function searchDrug(name) {
  const res = await fetch(
    `/api/easy/quick?q=${encodeURIComponent(name)}&page=1&size=5`
  );
  if (!res.ok) throw new Error("검색 실패");
  return res.json();
}

function Add() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [selected, setSelected] = useState(null);
  const options = ["식전", "식후", "무관", "기타"];

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const data = await searchDrug(query);
      setResult(data.body.items || []);
    } catch (err) {
      console.error(err);
      alert("검색 실패");
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
      <div style={{ padding: "0 24px", position: "relative", width: "100%" }}>
        <Link to="/">
          <button style={{ marginTop: "44px", marginBottom: "12px" }}>
            <img src={previous} alt="이전"></img>
          </button>
        </Link>

        <h4 style={{ marginBottom: "12px" }}>1/2</h4>
        <h2 style={{ marginBottom: "40px" }}>복용 추가하기</h2>
        <input
          style={{ marginBottom: "44px" }}
          type="text"
          placeholder="복용 약 이름을 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <ul style={{ marginBottom: "20px" }}>
          {result.map((drug) => (
            <li
              key={drug.itemSeq}
              style={{
                cursor: "pointer",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
              onClick={() => {
                setQuery(drug.itemName); // 선택 시 input에 반영
                setResult([]); // 리스트 닫기
              }}
            >
              {drug.itemName}
            </li>
          ))}
        </ul>

        <input
          style={{ width: "100%", marginBottom: "36px" }}
          type="text"
          placeholder="1회 복용량을 숫자로 입력해주세요"
        />

        <div
          style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap" }}
        >
          {options.map((label) => (
            <button
              key={label}
              className={`intake-btn ${selected === label ? "active" : ""}`}
              onClick={() => setSelected(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <Link to="/add2" className="next-btn">
        <button>
          <h4 style={{ color: "#ffffff", margin: "17px 0" }}>다음으로</h4>
        </button>
      </Link>
    </div>
  );
}

export default Add;
