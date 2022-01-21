import React from 'react';
import aditya from '../assets/Aditya.jpg';
import email from '../assets/Email_Icon.png';
import linkedin from '../assets/LinkedIn_Icon.png';

const Info = () => {
  return (
    <div>
      <div className='info'>
        <img src={aditya} className='info-photo' alt='profile-pic' />
        <h3 className='info-name'>Aditya Rajkumar</h3>
        <h4 className='info-role'>React Developer</h4>
        <h5 className='info-website'>adityar.website</h5>
      </div>
      <div className='info-button'>
        <a href='mailto:name@email.com'>
          <button className='btn-email'>
            <img src={email} alt='Email' className='img-email' />
            Email
          </button>
        </a>
        <a href='https://www.linkedin.com/in/adityarjkl/'>
          <button className='btn-linkin'>
            <img src={linkedin} alt='LinkedIn' className='img-linkin' />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
