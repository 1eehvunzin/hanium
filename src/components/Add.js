import React, { useState } from 'react';
import previous from '../assets/images/Group.png';
import '../assets/style.css';

const API =  "https://simple-openapi-service.onrender.com";

async function searchDrug(name) {
  const res = await fetch(
    `${API}/api/easy/quick?q=${encodeURIComponent(name)}&page=1&size=5`
  );
  if (!res.ok) throw new Error("검색 실패");
  return res.json();
}

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try{
      const data = await searchDrug(query);
      setResults(data.rows ?? []);
    }
    catch (e) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div style={{padding: '0 24px', position: 'relative', zIndex: 5}}>
      <button style={{marginTop: '44px', marginBottom: '12px'}}>
        <img src={previous} alt='이전'></img>
      </button>
      <h4 style={{marginBottom: '12px'}}>1/2</h4>
      <h2 style={{marginBottom: '40px'}}>복용 약 추가하기</h2>
      <input
        style={{marginBottom: '44px'}}
        type="text"
        placeholder="복용 약 이름을 입력하세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
      <button onClick={onSearch}>검색</button>

      {loading && <p>검색 중…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ marginTop: '20px' }}>
        {results.map((r) => (
          <li key={r.itemSeq}>
            {r.itemName} ({r.entpName})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Add;