import React, { useEffect } from "react";
import "./style.css";

export default function MobilePlatform() {
  return (
    <section className="trade--section--platform">
      <div className="trade--container">
        <h1 className="trade--section--title">
          Most advanced crypto trading
          <br /> platfrom ever!
        </h1>
        <div className="trade--platform-box">
          <img className="trade--platform-img" src="./img/google_play.png" />
          <img className="trade--platform-img" src="./img/app_store.png" />
        </div>
      </div>
    </section>
  );
}
