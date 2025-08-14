import React from 'react';

import tablet from '../assets/images/pill01_v1_w 1.png'
function IntakeScheduler() {
  return (
    <div style={{padding: '0 24px', position: 'relative', zIndex: 3}}>
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

export default IntakeScheduler;