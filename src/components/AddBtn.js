import React from "react";
import { Link } from "react-router-dom";
import add from "../assets/images/Round Button.png";

function AddBtn({ onAddClick }) {
  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 900 }}>
      <Link to="/Add">
        <button
          onClick={onAddClick}
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src={add}
            alt="추가"
            style={{ width: 56, height: 56, display: "block" }}
          />
        </button>
      </Link>
    </div>
  );
}

export default AddBtn;
