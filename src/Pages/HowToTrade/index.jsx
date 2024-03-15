import React from "react";
import "./style.css";

export default function HowToTrade() {
  return (
    <section className="trade--section" id="howtotrade">
      <div className="trade--container">
        <img src="./img/etherium.png" className="img-flutter-etherium" />

        <h1 className="trade--section--title">How to Trade With Krypto</h1>
        <p className="trade--section--subtitle">
          Tincidunt id nibh orci nibh just nulla elementum, sed vel.
        </p>
        <div className="trade--step">
          <img className="trade--step--img" src="./img/trade_img.png" />
          <div className="trade--step--container">
            <p className="trade--step--title">Steps to trade</p>
            <div className="trade--step--btn">
              <div className="trade--step--circle">
                <p className="trade--step--number">1</p>
              </div>
              <p className="trade--step--subtitle">Create an account</p>
            </div>
            <div className="trade--step--btn">
              <div className="trade--step--circle">
                <p className="trade--step--number">2</p>
              </div>
              <p className="trade--step--subtitle">Download platfrom</p>
            </div>
            <div className="trade--step--btn">
              <div className="trade--step--circle">
                <p className="trade--step--number">3</p>
              </div>
              <p className="trade--step--subtitle">Select crypto</p>
            </div>
            <div className="trade--step--btn">
              <div className="trade--step--circle">
                <p className="trade--step--number">4</p>
              </div>
              <p className="trade--step--subtitle">Start trading</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
