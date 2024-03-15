import React, { useEffect } from "react";
import "./style.css";

export default function MarketAnalysis() {
  return (
    <section className="trade--section" id="marketanalysis">
      <div className="trade--container">
        <img src="./img/litecoin.png" className="img-flut-litecoin" />
        <img src="./img/bitcoin.png" className="img-flut-bit" />

        <h1 className="trade--section--title">Crypto Market Analysis</h1>
        <p className="trade--section--subtitle">
          Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
          sed vel.
        </p>
        <div className="trade--analyse-content">
          <div className="trade--analyse-box">
            <img className="trade--analyse-icon" src="./img/analise_1.png" />
            <div className="trade--analyse-box-items">
              <p className="trade--analyse-title ">How to trade Bitcoin</p>
              <p className="trade--analyse-subtitle ">
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat
                et ornare risus.
              </p>
              <p className="trade--analyse-more">Learn more</p>
            </div>
          </div>

          <div className="trade--analyse-box">
            <img className="trade--analyse-icon" src="./img/analise_2.png" />
            <div className="trade--analyse-box-items">
              <p className="trade--analyse-title ">Gain the best exchange</p>
              <p className="trade--analyse-subtitle ">
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat
                et ornare risus.
              </p>
              <p className="trade--analyse-more">Learn more</p>
            </div>
          </div>

          <div className="trade--analyse-box">
            <img className="trade--analyse-icon" src="./img/analise_3.png" />
            <div className="trade--analyse-box-items">
              <p className="trade--analyse-title ">Reduce your loosing</p>
              <p className="trade--analyse-subtitle ">
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat
                et ornare risus.
              </p>
              <p className="trade--analyse-more">Learn more</p>
            </div>
          </div>

          <div className="trade--analyse-box">
            <img className="trade--analyse-icon" src="./img/analise_4.png" />
            <div className="trade--analyse-box-items">
              <p className="trade--analyse-title ">
                Win 50-50 trading strategy
              </p>
              <p className="trade--analyse-subtitle ">
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat
                et ornare risus.
              </p>
              <p className="trade--analyse-more">Learn more</p>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Enroll crypto University</button>
      </div>
    </section>
  );
}
