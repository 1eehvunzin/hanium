import React from 'react';
import { useRef, useState } from 'react';
import pill from '../assets/images/icons8-pill-96 1.png';
import medicine from '../assets/images/icons8-medicine-90.png'
import menu from '../assets/images/Glyph.png'
import date from '../assets/images/18 Arrow-down.png'
import '../assets/style.css';

function Home ({onMenuClick}) {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 기본: 오늘 날짜
  const dateInputRef = useRef(null);

  const handleButtonClick = () => {
    dateInputRef.current.showPicker
      ? dateInputRef.current.showPicker() // 일부 브라우저는 showPicker 지원
      : dateInputRef.current.click();
  };

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    if (!isNaN(newDate)) {
      setSelectedDate(newDate);
    }
  };

  const getWeekday = (date) =>
    date.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div style={{padding: '0 24px', position: 'relative', zIndex: 3}}>
        <div style={{display:'flex', justifyContent:'space-between', marginTop: '56px', marginBottom: '12px', alignItems: 'center'}}>
            <h4>AI 기반 전주기 약물 관리 플랫폼</h4>
            <button onClick={onMenuClick}>
                <img src={menu} alt="메뉴"></img>
            </button>
        </div>
        <div style={{display:'flex', flexDirection:'row', marginBottom: '24px'}}>
            <h1>{getWeekday(selectedDate)}</h1>
            <button onClick={handleButtonClick} style={{margin: '8px'}}>
                <img src={date} alt='날짜 선택'></img>
            </button>
            <input
                type="date"
                ref={dateInputRef}
                style={{ display: 'none' }}
                onChange={handleDateChange}
                value={selectedDate.toISOString().substring(0, 10)}
            />
        </div>
        <button style={{width: '100%'}}>
            <div className='box' style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: '16px'}}>
                <div>
                    <h2 style={{marginBottom: '8px'}}>이미지를 통해<br/>의약품 검색하기</h2>
                    <h4>선택하여 시작하세요</h4>
                </div>
                <img src={pill} alt='알약'></img>  
            </div>
        </button>
        <button style={{width: '100%'}}>
            <div className='box' style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: '16px'}}>
                <div>
                    <h2 style={{marginBottom: '8px'}}>이미지를 통해<br/>영양제 검색하기</h2>
                    <h4>선택하여 시작하세요</h4>
                </div>
                <img src={medicine} alt='영양제'></img>  
            </div>
        </button>
        <h4 style={{color: '#191d30',marginTop: '12px', marginBottom: '16px'}}>8:00</h4>
    </div>    
  );
}

export default Home;