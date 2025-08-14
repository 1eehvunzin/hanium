import previous from '../assets/images/Group.png';
import google from '../assets/images/Group (1).png';

function Menu({ onClose }) {
  return (
    <div style={{padding: '0 24px', position: 'relative', zIndex: 999}}>
      <div style={{display: 'flex', flexDirecion: 'row', marginTop: '56px', alignItems: 'center'}}>
        <button onClick={onClose}>
            <img src={previous}></img>
        </button>
        <h3 style={{marginLeft: '21px'}}>메뉴</h3>
      </div>
      <button style={{width: '100%'}}>
        <div className='box' style={{display:'flex', flexDirection:'row', marginTop:'24px'}}>
          <img src={google} alt='구글' style={{marginRight: '24px'}}></img>
          <h4 style={{color: 'black'}}>Google 계정으로 로그인</h4>
        </div>
      </button>
      
      
    </div>
  );
}

export default Menu;
