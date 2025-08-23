import React, { useEffect, useRef, useState } from 'react';
import previous from '../assets/images/Group.png';
import '../assets/style.css';
import IntakeScheduler from './IntakeScheduler';
function Add2({onBackclick}) {
  const [selected, setSelected] = useState(null);
  const options = ["식전", "식후", "무관", "기타"];

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <div style={{padding: '0 24px', position: 'relative', zIndex: 905, width: '100%'}}>
          <button style={{marginTop: '44px', marginBottom: '12px'}}>
            <img src={previous} alt='이전'></img>
          </button>
          <h4 style={{marginBottom: '12px'}}>2/2</h4>
          <h2 style={{marginBottom: '40px'}}>복용 일정 등록</h2>

        </div>
        <IntakeScheduler/>
      </div>
      <button className='next-btn'>
        <h4 style={{color: '#ffffff', margin: '17px 0'}}>등록</h4>
      </button>
    </div>
  );
}

export default Add2;