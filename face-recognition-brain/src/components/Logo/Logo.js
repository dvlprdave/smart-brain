import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
// import brain from './brain.png';
import camera from './camera.png';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner ps3"> 
                    <img style={{paddingTop: '1.5em'}} src={camera} alt="Brain Logo"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;