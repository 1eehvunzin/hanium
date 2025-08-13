import React from 'react';
import pill from '../assets/images/icons8-pill-96 1.png';

import '../assets/style.css';

function Header({ onMenuClick}) {
  return (
    <div style={{padding: '0 24px'}}>
        <div style={{display:'flex', justifyContent:'space-between', marginTop: '56px', marginBottom: '12px'}}>
            <h4>AI 기반 전주기 약물 관리 플랫폼</h4>
            <button></button>
        </div>
        <div style={{display:'flex', flexDirection:'row', marginBottom: '24px'}}>
            <h1>Thursday</h1>
            <button style={{margin: '8px'}}></button>
        </div>
    <div className='box' style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
        <div>
            <h2 style={{marginBottom: '8px'}}>이미지를 통해<br/>약물 검색하기</h2>
            <h4>선택하여 시작하세요</h4>
        </div>
        <img src={pill} alt='알약'></img>  
    </div>
    <h4 style={{color: '#191d30',marginTop: '28px', marginBottom: '16px'}}>8:00</h4>
    <div className='box'>약물 정보</div>    

    </div>
    
  );
}

export default Header;