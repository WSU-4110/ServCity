import { Carousel } from 'antd';
import './insights-styles.css'
import React from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App = () => (
  <Carousel autoplay>
    
  {/*The Different Types of Oil*/}

    <div style={contentStyle}>
      <section>
        <h2> Types of Oil </h2>
        <ul> 
          <li><strong>Fully Synthetic Oil:</strong> Needs replacing every: 7,500 miles and 15,000</li>
          <li><strong>Semi Synthetic Oil:</strong> Needs replacing every: 6,000 miles</li>
          <li><strong>Conventional Mineral Oil:</strong> Needs replacing every: 3,000 miles</li>
        </ul>     
      </section>
    </div>
    
  
  {/*How to Check Oil*/}  

    <div style={contentStyle}>
      <section>
          <h2> How to Check your Oil </h2>
          <ol>
            <li>Pop the hood</li>
            <li>Locate the oil dipstick</li>
            <li>Remove the oil dipstick and examine the color or consistency</li>
            <li>Wipe the oil dipstick clear </li>
            <li>Insert dipstick back into the oil tank and remove it </li>
            <li>Observe</li>
          </ol>
      </section>
    </div>


  {/*Red Flags for Oil*/}  
    
    <div style={contentStyle}>
      <section>        
        <h2> Signs to Get an Oil Change </h2>
          <li> Oil level is outside the indicated range inscripted on the dipstick </li>
          <li> When wiping the oil, it has a black/burnt color </li>
          <li> If the oil smells slightly burnt or carries a light gasoline odor </li>
      </section>
    </div>
  </Carousel>
);
export default App;