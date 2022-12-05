import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/alignment.png'
              text='Recommended to get your tires aligned every 6,000 miles.'
              label='Alignment'
              path='/services'
            />
            <CardItem
              src='images/brakes.png'
              text='Recommended to have your brakes checked about every 6 months (when you rotate your tires).'
              label='Brakes'
              path='/services'
            />
            <CardItem
              src='images/fluid flush.png'
              text='Recommendation based on vehicle. On average, recommended to have this done around every 30,000 miles or 2 years.'
              label='Fluid Flush'
              path='/services'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/oilchange.png'
              text='On average, vehicles are recommended to get their oil changed every 3,000 miles or 6 months.'
              label='Oil Change'
              path='/services'
            />
            <CardItem
              src='images/tire.png'
              text='Check your tires regularly! Check tire pressure every 2-4 weeks. It is recommended to get your tires rotated every 5,000 - 7,500 miles.'
              label='Tires'
              path='/products'
            />
            <CardItem
              src='images/athome.png'
              text='Minor fix? No problem, learn how you can do it yourself at home today!'
              label='At Home'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
