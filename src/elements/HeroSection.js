import React from 'react'
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';



function HeroSection() {
  return (
   <div className='hero-container'>
    <video url='p-porters-Pix-1.jpg' autoPlay loop muted />
    <h1>Pullman Porters</h1>
    <p>Take You To A Place</p>
    <div className="hero-btns">
      <Button clasName='btns' 
      buttonStyle='btn--outline'
      buttonSize='btn--large'
      >
        GET STARTED
         </Button> 
         <Button 
         className='btns' 
         buttonStyle='btn--primary'
         buttonSize='btn--large'
         >
          WATCH VIDEO <i className='far fa-play-circle'/>
         </Button>         
       </div>
    </div>
  );
}
export default HeroSection;