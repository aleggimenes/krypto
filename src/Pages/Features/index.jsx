import React, { useEffect } from "react";
import "./style.css";

export default function Features() {
  return (
    <section className="trade--section" id="features">
      <div className="trade--container">
        <img src="./img/litecoin.png" className="img-flut-litecoin" />
        <img src="./img/bitcoin.png" className="img-flut-bit" />

        <h1 className="trade--section--title">Attractive Features</h1>
        <p className="trade--section--subtitle">
          Windaful makes playing the UK's best raffles easy and fun.
        </p>
        <div className="trade--features-content">
          <div className="trade--features-box">
            <div className="trade--features-box-items">
              <img className="trade--features-icon" src="./icons/trophy.png" />
              <p className="trade--features-title ">Weekly Trading Contest</p>
            </div>
            <p className="trade--features-subtitle ">
              Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
              ornare risus.
            </p>
          </div>

          <div className="trade--features-box">
            <div className="trade--features-box-items">
              <img className="trade--features-icon" src="./icons/wallet.png" />
              <p className="trade--features-title ">Less Commission On Trade</p>
            </div>
            <p className="trade--features-subtitle ">
              Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
              ornare risus.
            </p>
          </div>

          <div className="trade--features-box">
            <div className="trade--features-box-items">
              <img className="trade--features-icon" src="./icons/lock.png" />
              <p className="trade--features-title ">
                Safe And Secure Trading platform
              </p>
            </div>
            <p className="trade--features-subtitle ">
              Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
              ornare risus.
            </p>
          </div>

          <div className="trade--features-box">
            <div className="trade--features-box-items">
              <img className="trade--features-icon" src="./icons/cash.png" />
              <p className="trade--features-title ">Instant Withdraw Process</p>
            </div>
            <p className="trade--features-subtitle ">
              Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
              ornare risus.
            </p>
          </div>

          <div className="trade--features-box">
            <div className="trade--features-box-items">
              <img className="trade--features-icon" src="./icons/gift.png" />
              <p className="trade--features-title ">Monthly Commition</p>
            </div>
            <p className="trade--features-subtitle ">
              Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
              ornare risus.
            </p>
          </div>

          <div className="trade--features-box">
            <div className="trade--features-box-items">
              <img className="trade--features-icon" src="./icons/mic.png" />
              <p className="trade--features-title ">24/7 Support Team</p>
            </div>
            <p className="trade--features-subtitle ">
              Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et
              ornare risus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
