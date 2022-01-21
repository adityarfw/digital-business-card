import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Components/Info';
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';
import './style.css';

const MyCard = () => {
  return (
    <div className='my-card'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};

ReactDOM.render(<MyCard />, document.getElementById('root'));
