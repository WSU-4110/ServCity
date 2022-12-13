import React from "react";

export default function Brakes() {
  return (
    <>
    <main>
    <div class="header"> <h1> AtHome Maintenance </h1> </div>
    <h2> Brake Replacement </h2>

    <div class="group">
      <a href="/">
        <div class="brake-container">
          <div class="inner">
            <h1> Organic </h1>

            <table>
              <tr>
                <td>Price:</td>
                <td>$</td>
              </tr>
              <tr>
                <td>Performance:</td>
                <td>★</td>
              </tr>
              <tr>
                <td>Wear & Tear:</td>
                <td>★★</td>
              </tr>
              <tr>
              <td>Noise:</td>
              <td>★★</td>
              </tr>
            </table>
          </div>
        </div>
        </a>

        <a href="/">
        <div class="brake-container">
          <div class="inner">
            <h1> Ceramic </h1>
            <p>
            <table>
              <tr>
                <td>Price:</td>
                <td>$$$</td>
              </tr>
              <tr>
                <td>Performance:</td>
                <td>★★★</td>
              </tr>
              <tr>
                <td>Wear & Tear:</td>
                <td>★★★</td>
              </tr>
              <tr>
              <td>Noise:</td>
              <td>★★★</td>
              </tr>
            </table>
          </p>
        </div>
        </div>
      </a>


      <a href="/">
      <div class="brake-container">
        <div class="inner">
          <h1> Semi Metallic </h1>

          <table>
            <tr>
              <td>Price:</td>
              <td>$$</td>
            </tr>
            <tr>
              <td>Performance:</td>
              <td>★★★</td>
            </tr>
            <tr>
              <td>Wear & Tear:</td>
              <td>★</td>
            </tr>
            <tr>
            <td>Noise:</td>
            <td>★</td>
            </tr>
          </table>
        </div>
      </div>
      </a>
    </div>
    </main>
    </>
  );
}
