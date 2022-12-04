import "./insights-styles.css";
import React from "react";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
};
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <Slider {...settings}>
    {/*Recommended time to get an Alignment*/}
    <div style={contentStyle}>
      <section>
        <h2> When is it Time to Get an Alignment? </h2>
        <p>
          {" "}
          It is recommended to get an alignment check every 6,000 miles or
          approximatly every other oil change{" "}
        </p>
      </section>
    </div>

    {/*Events which may require an alignment*/}

    <div style={contentStyle}>
      <section>
        <h2> External Reasons for an Alignment Check: </h2>
        <ul>
          <li>
            {" "}
            Replaced or adjusted suspension parts that affect the tire angles{" "}
          </li>
          <li> Had your vehicle lowered or lifted </li>
          <li> You recently got new tires </li>
          <li>
            {" "}
            Had a recent fender-bender/ hard impact with a curb or road debris{" "}
          </li>
        </ul>
      </section>
    </div>

    {/*Signs for an Alignment*/}

    <div style={contentStyle}>
      <section>
        <h2> Signs an Alignment is needed: </h2>
        <ul>
          <li> Steering pulls to one side </li>
          <li> Off-center steering wheel </li>
          <li> Uneven tire wear </li>
        </ul>
      </section>
    </div>

    {/*Uneven Tire Wear Test*/}

    <div style={contentStyle}>
      <section>
        <h2> Uneven Tire Wear Test </h2>
        <p>
          {" "}
          Generally the front two tires will be eaten faster than the rear
          tires. To test if there is a uniform burn on the tread: put your car
          in park and rotate the steering wheel to the far left, step out and
          examine the driver's front tire. Next, rotate the tire to the far
          right and check the tread wear of the passangers tire. If there is a
          noticible tread difference between the inner and outter surface then
          it would be a good time to get an alignment check.{" "}
        </p>
      </section>
    </div>
  </Slider>
);
export default App;
