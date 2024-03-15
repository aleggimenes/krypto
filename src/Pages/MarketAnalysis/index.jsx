import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MarketAnalysis() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Atualiza o estado quando o componente está visível
  if (inView && !isVisible) {
    setIsVisible(true);
  }
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
          <motion.div
            className="trade--analyse-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            ref={ref} // Referência para o uso do inView
          >
            <img className="trade--analyse-icon" src="./img/analise_1.png" />
            <div className="trade--analyse-box-items">
              <p className="trade--analyse-title ">How to trade Bitcoin</p>
              <p className="trade--analyse-subtitle ">
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat
                et ornare risus.
              </p>
              <p className="trade--analyse-more">Learn more</p>
            </div>
          </motion.div>
          <motion.div
            className="trade--analyse-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            ref={ref} // Referência para o uso do inView
          >
            <img className="trade--analyse-icon" src="./img/analise_2.png" />
            <div className="trade--analyse-box-items">
              <p className="trade--analyse-title ">Gain the best exchange</p>
              <p className="trade--analyse-subtitle ">
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat
                et ornare risus.
              </p>
              <p className="trade--analyse-more">Learn more</p>
            </div>
          </motion.div>
          <motion.div
            className="trade--analyse-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            ref={ref} // Referência para o uso do inView
          >
            <img className="trade--analyse-icon" src="./img/analise_3.png" />
            <div className="trade--analyse-box-items">
              <p className="trade--analyse-title ">Reduce your loosing</p>
              <p className="trade--analyse-subtitle ">
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat
                et ornare risus.
              </p>
              <p className="trade--analyse-more">Learn more</p>
            </div>
          </motion.div>
          <motion.div
            className="trade--analyse-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            ref={ref} // Referência para o uso do inView
          >
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
          </motion.div>
        </div>
        <button className="btn btn-primary">Enroll crypto University</button>
      </div>
    </section>
  );
}
