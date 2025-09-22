import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import previous from "../assets/images/Group.png";
import "../assets/style.css";

/* const API =  "https://simple-openapi-service.onrender.com";

async function searchDrug(name) {
  const res = await fetch(
    `${API}/api/easy/quick?q=${encodeURIComponent(name)}&page=1&size=5`
  );
  if (!res.ok) throw new Error("검색 실패");
  return res.json();
}*/

function Add({ onAdd2Click }) {
  const [selected, setSelected] = useState(null);
  const options = ["식전", "식후", "무관", "기타"];
  /*const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const timerRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setOpen(false);
      if (abortRef.current) abortRef.current.abort();
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }


    if (timerRef.current) clearTimeout(timerRef.current);
    if (abortRef.current) abortRef.current.abort();

    setLoading(true);
    setError(null);

    timerRef.current = setTimeout(async () => {
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const data = await searchDrug(query);
        if (!controller.signal.aborted) {
          setResults(data?.rows ?? []);
          setOpen(true);
        }
      }
      catch (e) {
        if (!controller.signal.aborted) setError(e.message);
      }
      finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 250);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query]);

  const pick = (name) => {
    setQuery(name);
    setOpen(false);
  };

  const onBlur = () => setTimeout(() => setOpen(false), 120);
  const onFocus = () => {
    if (results.length > 0) setOpen(true);
  }; */

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
        <button style={{ marginTop: "44px", marginBottom: "12px" }}>
          <img src={previous} alt="이전"></img>
        </button>
        <h4 style={{ marginBottom: "12px" }}>1/2</h4>
        <h2 style={{ marginBottom: "40px" }}>복용 추가하기</h2>
        <input
          style={{ marginBottom: "44px" }}
          type="text"
          placeholder="복용 약 이름을 입력하세요"
          /*value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}*/
        />

        {/*{loading && <p>검색 중…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ marginTop: '20px' }}>
        {results.map((r) => (
          <li key={r.itemSeq}>
            {r.itemName} ({r.entpName})
          </li>
        ))}
      </ul>*/}
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
