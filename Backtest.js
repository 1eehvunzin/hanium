const API = "https://simple-openapi-service.onrender.com";

// 의약품 빠른검색
const quick = await fetch(`${API}/api/easy/quick?q=${encodeURIComponent("타이레놀")}&page=1&size=5`)
  .then(r => r.json());
console.log("의약품 빠른검색:", quick);

// 의약품 상세
const detail = await fetch(`${API}/api/unify/drug?itemName=${encodeURIComponent("타이레놀")}`)
  .then(r => r.json());
console.log("의약품 상세:", detail);

// 건기식 목록
const htfsList = await fetch(`${API}/api/search/htfs?prdlstNm=${encodeURIComponent("홍삼")}&pageNo=1&numOfRows=3`)
  .then(r => r.json());
console.log("건강기능식품 목록:", htfsList);

// 낱알식별 (예: 흰색, 원형, TYL 각인)
const pills = await fetch(`${API}/api/identify/pill?color1=${encodeURIComponent("하양")}&shape=${encodeURIComponent("원형")}&imprint=TYL`)
  .then(r => r.json());
console.log("낱알식별:", pills);

