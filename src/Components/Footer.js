import React from 'react';
import facebook from '../assets/Facebook_Icon.png';
import github from '../assets/GitHub_Icon.png';
import instagram from '../assets/Instagram_Icon.png';
import twitter from '../assets/Twitter_Icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <a href='#'>
        <img src={facebook} alt='Facebook' />
      </a>
      <a href='https://github.com/adityarfw'>
        <img src={github} alt='Github' />
      </a>
      <a href='#'>
        <img src={instagram} alt='Instagram' />
      </a>
      <a href='#'>
        <img src={twitter} alt='Twitter' />
      </a>
    </div>
  );
};

export default Footer;
