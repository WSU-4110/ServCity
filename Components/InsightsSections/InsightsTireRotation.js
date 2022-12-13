import "./insights-styles.css";
import React from "react";
import Slider from "react-slick";

const contentStyle = {
  height: "160px",
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
  autoplay: true,
  centerMode: true,
  className: "Carousel",
};
const App = () => (
  <Slider {...settings}>
    {/*The Different Types of Tires*/}

    <div style={contentStyle}>
      <section>
        <h2> All Season Tires </h2>
        <p>
          The all-season touring tire are designed to deliver good comfort and
          handling on the highway, as well as reliable all-season traction. They
          generally features a symmetrical tread pattern and circumferential
          grooves for good wet weather grip. All-season tires are typically
          suited for almost any vehicle, from a Honda Civic to a Mazda CX-5.
        </p>
      </section>
    </div>

    <div style={contentStyle}>
      <section>
        <h2> Summer Tires </h2>
        <p>
          Summer tires are geared for performance in both wet and dry conditions
          but are not designed for all-season traction. They are optimized for
          warm weather and deliver grip and responsive handling. Summer tires
          generally feature solid contact patches, adequate circumferential
          grooves for hydroplaning resistance, and little to no siping.
        </p>
      </section>
    </div>

    <div style={contentStyle}>
      <section>
        <h2> Winter Tires </h2>
        <p>
          Winter tires are designed for the best possible traction in harsh
          winter conditions. They feature heavy siping and deep circumferential
          grooves that work to expel snow and slush buildup from the contact
          patch. There are two types of winter tires, studded and studless.
        </p>
      </section>
    </div>

    <div style={contentStyle}>
      <section>
        <h2> Winter Tires </h2>
        <p>
          The studded winter tires feature small metal studs, or pins, that are
          engineered to deliver good traction on heavily icy surfaces, but can
          cause additional noise and discomfort and increase fuel consumption.
          These are suitable only in the harshest of winter conditions and are
          illegal in some states.
        </p>
      </section>
    </div>

    <div style={contentStyle}>
      <section>
        <h2> Extreme Winter Tires </h2>
        <p>
          Studless winter tires are designed for great traction in winter
          conditions, and even provide reasonable grip on ice. The features are
          the same as studded, but these are recommended for winter weather
          conditions that aren’t extreme enough for studded tires. You may see
          this referred to as “studdable” which are studless tires that can have
          studs added if necessary.
        </p>
      </section>
    </div>

    {/*Tire Tips*/}

    <div style={contentStyle}>
      <section>
        <h2> Tips to Having Long-lasting Tires </h2>
        <p>
          To ensure the longevity of your tires it is important to maintain the
          manufactor's recommended tire pressure and get regular air pressure
          checks. It is also important to get a tire roatation every 5,000 miles
          and a good practice to get the alignmnet check.
        </p>
      </section>
    </div>

    {/*Penny Test*/}

    <div style={contentStyle}>
      <section>
        <h2> The Penny Test - At-Home Tread Depth </h2>
        <ol>
          <li>Grab a penny and line it up to the tire you are checking.</li>
          <li>
            Rotate the penny such that Lincoln's head points down into the
            tread.
          </li>
          <li>
            If the top of his head disappears between the ribs, your tread is
            around 2.32".
          </li>
          <li>
            If you can see his entire head, this is a good indicater that the
            tread is too low and should be replaced soon.
          </li>
        </ol>
      </section>
    </div>

    {/*Tire Facts*/}

    <div style={contentStyle}>
      <section>
        <h2> Tire Lifespan </h2>
        <p>
          Tires generally last between 3 and 5 years. The lifespan of a tire
          also depends heavily on the number of miles traveled.
        </p>

        <p>
          {" "}
          Even with reduced levels of driving and tire care it is important to
          change your tires if they surpass their experation date as the rubber
          dries up overtime and loses its cohesive properties posing a risk to
          the driver and other vehicles on the road.
        </p>
      </section>
    </div>
  </Slider>
);
export default App;
