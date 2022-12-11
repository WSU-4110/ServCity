import "./insights-styles.css";
import React from "react";
import Slider from "react-slick";

const contentStyle = {
  height: "160px;",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  className: "Carousel",
};

const App = () => (
  <Slider {...settings}>
    <div style={contentStyle}>
      <section>
        <h1> Ceramic Brake Pads</h1>
        <p>
          {" "}
          Ceramic brake pads are suitable for customers who do a lot of
          commuting. They are dense, durable, and the most reliable option
          between the brake pad materials. The downsides to ceramic brake pads
          are that they are more expensive and are not recommended for extreme
          driving conditions.
        </p>
      </section>
    </div>

    <div style={contentStyle}>
      <section>
        <h1>Organic Brake Pads</h1>
        <p>
          Organic brake pads are suitable for everyday driving. They are
          suitable for non-performance vehicles and are available at a lower
          cost. The downside to organic brake pads is that they have to be
          replaced more often due to them wearing out quicker than others.
        </p>
      </section>
    </div>

    <div style={contentStyle}>
      <section>
        <h1>Semi-metallic Brake Pads</h1>
        <p>
          Semi-metallic brake pads are best for high performance vehicles. They
          do not require as much pressure to brake as the other types of brake
          pads. However, semi-metallic brake pads are the most expensive and are
          the noisiest.
        </p>
      </section>
    </div>

    <div style={contentStyle}>
      <section>
        <h1>Brake Pad Maintenece</h1>
        <p>When to change: Every 10,000-20,000 miles</p>
        <p>
          Signs to change:
          <ul>
            <li>Squeaking or squealing when braking</li>
            <li>Grinding sound when braking</li>
            <li>Damage to engine parts</li>
          </ul>
        </p>
      </section>
    </div>

    <div style={contentStyle}>
      <section>
        <h1>Brake Rotors</h1>
        <p>When to change: Every 50,000-70,000 miles</p>
        <p>
          Signs to change:
          <ul>
            <li>Vibration in steering wheel and/or brake pedal</li>
            <li>Loud noises while braking</li>
            <li>Surface cracks on brake rotor</li>
          </ul>
        </p>
        <p>
          Reasons to change:
          <ul>
            <li>Risk of brake failure if rotors are not regularly replaced</li>
            <li>Heat absorbed can warp the rotor</li>
          </ul>
        </p>
      </section>
    </div>
  </Slider>
);

export default App;
