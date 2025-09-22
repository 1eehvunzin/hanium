import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.js";
import AddBtn from "./components/AddBtn.js";

import Menu from "./components/Menu.js";
import Add from "./components/Add.js";
import Add2 from "./components/Add2.js";
import "./assets/style.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(true); // slideOut 시작
    setTimeout(() => {
      setShowMenu(false); // 애니메이션 끝난 후 언마운트
      setCloseMenu(false); // 다음 열기에 대비
    }, 300); // slideOut 시간과 동일
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home onMenuClick={() => setShowMenu(true)} />}
        />
        <Route path="/add" element={<Add />} />
        <Route path="/add2" element={<Add2 />}></Route>
      </Routes>

      {showMenu && (
        <div
          className={closeMenu ? "slide-out" : "slide-in"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "white",
            zIndex: 999,
          }}
        >
          <Menu onClose={handleCloseMenu} />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
