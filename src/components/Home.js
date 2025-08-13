import React from 'react';
import pill from '../assets/images/icons8-pill-96 1.png';
import capsule from '../assets/images/caps7_9dsddssd 1.png'
import medicine from '../assets/images/icons8-medicine-90.png'
import tablet from '../assets/images/pill01_v1_w 1.png'
import '../assets/style.css';

function Header({ onMenuClick}) {
  return (
    <div style={{padding: '0 24px', position: 'relative', zIndex: 3}}>
        <div style={{display:'flex', justifyContent:'space-between', marginTop: '56px', marginBottom: '12px'}}>
            <h4>AI 기반 전주기 약물 관리 플랫폼</h4>
            <button></button>
        </div>
        <div style={{display:'flex', flexDirection:'row', marginBottom: '24px'}}>
            <h1>Thursday</h1>
            <button style={{margin: '8px'}}></button>
        </div>
        <div className='box' style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: '16px'}}>
            <div>
                <h2 style={{marginBottom: '8px'}}>이미지를 통해<br/>의약품 검색하기</h2>
                <h4>선택하여 시작하세요</h4>
            </div>
        <img src={pill} alt='알약'></img>  
        </div>
        <div className='box' style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: '16px'}}>
            <div>
                <h2 style={{marginBottom: '8px'}}>이미지를 통해<br/>영양제 검색하기</h2>
                <h4>선택하여 시작하세요</h4>
            </div>
        <img src={medicine} alt='영양제'></img>  
        </div>
        <h4 style={{color: '#191d30',marginTop: '12px', marginBottom: '16px'}}>8:00</h4>
        <div className='medicine-box' style={{display: 'flex', flexDirection: 'row'}}>
            <img src={tablet} alt='정'></img>
            <div style={{display: 'flex', flexDirection: 'column', margin: '24px 0'}}>
                <h3>오메가 3</h3>
                <h4>식후 3정</h4>
            </div>
        </div>    
    </div>    
  );
}

export default Header;