import React from "react";
import "./style.css";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className={"hero--section"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "49.22px",
        }}
      >
        <img src="./img/bitcoin.png" className="imagem-flutuante-bit"/>
        <img src="./img/monero.png" className="imagem-flutuante-mon"/>
        <img src="./img/etherium.png" className="imagem-flutuante-etherium"/>
        <img src="./img/litecoin.png" className="imagem-flutuante-litecoin"/>

        <h1 className="hero--section--title">
          Next Generation
          <br /> Crypto Trading
        </h1>
        <p className="hero--section--subtitle">Crypto Market Starts in</p>
        <p className="hero--section--subtitle">
          2 days : 12 hours : 23 minutes : 35 seconds
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="btn btn-primary">DOWNLOAD APP</button>
          <button className="btn btn-primary">TRADE CRYPTO</button>
        </div>
        <p className="hero--section--subtitle">WE ACCEPT</p>
        <div className="hero--coin">
          <div className="hero--section--coin">
            <img
              src="./icons/bitcoin.png"
              style={{ width: "30px", height: "30px" }}
            />
            <p className="hero--section--coin--text">Bitcoin</p>
          </div>
          <div className="hero--section--coin">
            <img
              src="./icons/litecoin.png"
              style={{ width: "30px", height: "30px" }}
            />
            <p className="hero--section--coin--text">Litecoin</p>
          </div>
          <div className="hero--section--coin">
            <img
              src="./icons/chainlink.png"
              style={{ width: "30px", height: "30px" }}
            />
            <p className="hero--section--coin--text">Chainlink</p>
          </div>
          <div className="hero--section--coin">
            <img
              src="./icons/siacoins.png"
              style={{ width: "30px", height: "30px" }}
            />
            <p className="hero--section--coin--text">Siacoin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
