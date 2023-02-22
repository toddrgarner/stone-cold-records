import React from 'react'
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';



function HeroSection() {
  return (
   <div className='hero-container'>
    <image url='/' />
    <h1>Stone Cold Records</h1>
    <p>Featured Video</p>
    <p>"Take You To A Place"</p>
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