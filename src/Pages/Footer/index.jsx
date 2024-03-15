import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <section className="trade--section">
      <div className="trade--footer">
        <div className="trade--footer-box">
          <p className="trade--footer-title">Krypto</p>
          <p>
            Massa blandit semper varius
            <br /> faucibus. Suspendisse viverra
            <br /> venenatis placerat nam ut. <br />
            Pellentesque sit id tempor turpis.
          </p>
        </div>

        <div className="trade--footer-box">
          <p className="trade--footer-title">LINKS</p>
          <p>How it works</p>
          <p>Cryptos</p>
          <p>Features</p>
          <p>Blogs</p>
        </div>

        <div className="trade--footer-box">
          <p className="trade--footer-title">LEGAL</p>
          <p>Terms of uses</p>
          <p>Terms of conditions</p>
          <p>Privecy policy</p>
          <p>Cookie policy</p>
        </div>

        <div className="trade--footer-box" style={{ width: "30%" }}>
          <p className="trade--footer-title">NEWSLETTER</p>
          <p>Over 25000 people gave subscribed</p>
          <div className="trade--footer-content--input">
            <input
              className="trade--footer-input"
              type="text"
              placeholder="Enter your email"
            />
            <button className="trade--footer--btn">SUBSCRIBE</button>
          </div>
          <p style={{ color: "#a29fad" }}>We don’t sell your email and spam</p>
        </div>
      </div>
      <div className="trade--foter--line" />
      <div className="trade--footer-info">
        <p className="trade--footer--info-text">Privacy & Terms Contact Us</p>
        <p className="trade--footer--info-text">Copyright @ 2022 xpence</p>
        <div className="trade--footer--info-icons--box">
          <img className="trade--foter--info-icon" src="./icons/youtube.png" />
          <img className="trade--foter--info-icon" src="./icons/linkedin.png" />
          <img className="trade--foter--info-icon" src="./icons/facebook.png" />
          <img className="trade--foter--info-icon" src="./icons/bit_icon.png" />
        </div>
      </div>
    </section>
  );
}
