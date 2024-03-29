import React, { useState, useEffect } from "react";
import "./style.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function HowToTrade() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="trade--section" id="howtotrade">
      <div className="trade--container" ref={ref}>
        <img src="./img/etherium.png" className="img-flutter-etherium" />

        <h1 className="trade--section--title">How to Trade With Krypto</h1>
        <p className="trade--section--subtitle">
          Tincidunt id nibh orci nibh just nulla elementum, sed vel.
        </p>
        <motion.div
          className="trade--step"
          initial={false}
          animate={{ x: inView ? 0 : 100 }} // Anima somente se estiver visível
          transition={{ type: "easeOut", duration: 2 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
