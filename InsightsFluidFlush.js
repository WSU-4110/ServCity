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

    <div style={contentStyle}>
      <section>
      <h2> Coolant </h2>
             <p> When to change: Every six months </p>
             <p>Signs to change: Color of fluid is clear or brown</p>
             <p>Reasons to change: </p>

              <ul>
        
                <li>Automatic enging shut-off</li>
                <li>Damage to engine parts</li>
            </ul>          
      </section>
    </div>

    <div style={contentStyle}>
    <section>
    <h2>Power Steering Fluid</h2>
    <p>When to change: Every 40,000-80,000 miles</p>
     
    <p>Signs to change: </p>
      <p>
        <ul>
          <li>Steering wheel feels heavy</li>
          <li>Noisy steering function</li>
          <li>Power fluid leaking from vehicle</li>
          </ul>
          </p>
        
       <p>Reason to change: Power steering fluid is used to steer wheel and guide vehicle
       </p>
      </section>
    </div>

    <div style={contentStyle}>
    <section>
    <h1> Transmission Fluid</h1>
            <p>
              When to change: Every 75,000-100,000 miles</p>
             
             
              <p>Signs to change: 
              <ul>
                <li>Loud chunking or grinding noises</li>
                <li>Burning smell</li>
                <li>Fluid leak underneath vehicle</li>
                <li>Slipping gears</li>
                <li>Poor acceleration</li>
                </ul>
                </p>
               
             <p>Reason to change: Transmission fluid keeps mechanical components cool and lubricated
             </p>
      </section>
    </div>

  </Carousel>
);

export default App;