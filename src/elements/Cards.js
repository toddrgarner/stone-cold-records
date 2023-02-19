import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    <h1>Stone Cold Records Roster</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem 
              src='images/7th-hr-pix-2.jpg'
              text='Soulful Metal Rock & Roll!'
              label='The Seventh Hour'
              path='./artist'
              /> 
               <CardItem 
              src='images/aventurine-pix-2.jpg'
              text='Retro Soul Sensation!'
              label='Aventurine'
              path='./artist'
              /> 
            </ul>
            <ul className="cards__items">
              <CardItem 
              src='images/troy-g-pix-2.jpg'
              text='New Artist - Music Coming Soon!'
              label='Troy G'
              path='./artist'
              /> 
               <CardItem 
              src='images/p-porters-pix-2.jpg'
              text='Twin Soul Singing Duo!'
              label='Pullman Porters'
              path='./artist'
              /> 
            </ul>
        </div>
      </div>
    </div>
  ) 
}

export default Cards
