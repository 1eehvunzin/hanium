import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import previous from "../assets/images/Group.png";
import "../assets/style.css";

async function searchDrug(name, sort = "score") {
  const res = await fetch("/api/identify/byName", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: name, sort }),
  });
  if (!res.ok) throw new Error("검색 실패");
  return res.json();
}

function Add() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [selected, setSelected] = useState(null);
  const [dose, setDose] = useState("");
  const options = ["식전", "식후", "무관", "기타"];

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const data = await searchDrug(query);
      console.log("검색 결과:", data);
      const candidates = data.results?.[0]?.candidates || [];
      setResult(Array.isArray(candidates) ? candidates : []);
    } catch (err) {
      console.error(err);
      alert("검색 실패");
    }
  };
  const dropdownRef = useRef(null);

  //외부 클릭 시 result 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResult([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div style={{ position: "relative", marginBottom: "44px" }}>
          <input
            style={{
              width: "100%",
              marginBottom: "36px",
            }}
            type="text"
            placeholder="복용 약 이름을 입력하세요"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          {result.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                background: "white",
                border: "1px solid #ddd",
                borderTop: "none",
                borderRadius: "0 0 8px 8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                zIndex: 10,
                maxHeight: "200px",
                overflowY: "auto",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {result.map((drug, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setQuery(drug.name || "");
                    setResult([]);
                  }}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#f2f2f2")}
                  onMouseLeave={(e) => (e.target.style.background = "#fff")}
                >
                  {drug.name || "결과 없음"} {/*candidate가 없을 때 fallback */}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          style={{ width: "100%", marginBottom: "36px" }}
          type="text"
          placeholder="1회 복용량을 숫자로 입력해주세요"
          value={dose}
          onChange={(e) => setDose(e.target.value)}
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
      <Link
        to="/add2"
        state={{
          name: query,
          dose: dose, // dose를 useState로 관리해야 함
          timing: selected,
        }}
        className="next-btn"
      >
        <button>
          <h4 style={{ color: "#ffffff", margin: "17px 0" }}>다음으로</h4>
        </button>
      </Link>
    </div>
  );
}

export default Add;
