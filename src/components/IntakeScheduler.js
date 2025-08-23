import React from 'react';

import tablet from '../assets/images/pill01_v1_w 1.png'
function IntakeScheduler() {
  return (
    <div style={{padding: '0 24px', position: 'relative', zIndex: 3}}>
        <div className='medicine-box' style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', margin: '24px', width: '100%'}}>
                <h3 style={{marginBottom: '8px'}}>오메가 3</h3>
                <div style={{display:'flex', flexDirection: 'row', width: '100%', justifyContent:'space-between'}}>
                  <h4>식후 3정</h4>
                  <h4>7 Days</h4>
                </div>
            </div>
        </div>    
    </div>
  );
}

export default IntakeScheduler;