import React, { useEffect } from "react";
import "./style.css";
import data from "../../data/data.json";
import Slider from "react-slick";

export default function TradePlace() {
 
  return (
    <section className="trade--section" id="tradeplace">
      <div className="trade--container">
        <h1 className="trade--section--title">Available Creyptos</h1>
        <p className="trade--section--subtitle">
          Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
          sed vel.
        </p>
          <div className="trade--buy">
            {data?.trade.map((item, index) => (
              <div key={index} className="trade--buy--container">
                <img src={item?.src} className="trade--buy--image" />
                <div className="trade--buy--contant">
                  <p className="trade--buy--title">{item.title}</p>
                  <p className="trade--buy--subtitle">{item.description}</p>
                  <div className="trade--buy--content--value">
                    <p className="trade--buy--text">{item.value}</p>
                    <button className="trade--buy--btn">TRADE NOW</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
