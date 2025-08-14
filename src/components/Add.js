import React from 'react';
import add from '../assets/images/Round Button.png';

function Add() {
  return (
    <div style={{ position:'fixed', right:24, bottom:24, zIndex: 900 }}>
      <button style={{ border:'none', background:'transparent', padding:0, cursor:'pointer' }}>
        <img src={add} alt="추가" style={{ width:56, height:56, display:'block' }} />
      </button>
    </div>
  );
}

export default Add;
