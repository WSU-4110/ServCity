import React from "react";

export default function Oil() {
  return (
    <>
    <main>
    <div class="header"> <h1> AtHome Maintenance </h1> </div>
    <h2> Oil Change</h2>

    <div class="group">
      <a href="/">
        <div class="oil-container">
          <div class="inner">
            <h1> FULLY SYNTHETIC </h1>
            <h3>	Life span of: </h3>
            <p>	7,500 to 15,000 miles	</p>

          </div>
        </div>
        </a>

        <a href="/">
        <div class="oil-container">
          <div class="inner">
            <h1> SEMI SYNTHETIC </h1>
            <h3>	Life span of: </h3>
            <p>	Around 6,000 miles	</p>
        </div>
        </div>
      </a>
        <a href="/">
        <div class="oil-container">
          <div class="inner">
            <h1> MINERAL OIL </h1>
            <h3>	Life span of: </h3>
            <p>	Around 3,000 miles	</p>
          </div>
        </div>
          </a>
    </div>
    </main>
    </>
  );
}
