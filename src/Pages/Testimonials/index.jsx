import React, { useEffect } from "react";
import "./style.css";
import data from "../../data/data.json";

export default function Testimonial() {
  return (
    <section className="trade--section" id="testimonial">
      <div className="trade--container">
        <h1 className="trade--section--title">30 Million Users Worldwide</h1>
        <p className="trade--section--subtitle">
          Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
          sed vel.
        </p>
        <div className="trade-testimonial">
          {data?.testimonial?.map((item, index) => (
            <div className="trade-testimonial--container" key={index}>
              <img src="./icons/aspas.png" className="trade-testimonial--img" />
              <p className="trade-testimonial--text">{item?.description}</p>
              <img src={item?.src} className="trade--testimonial--img-person" />
              <p className="trade--testimonial--name ">{item?.name}</p>
              <p className="trade--testimonial--subtitle">{item?.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
