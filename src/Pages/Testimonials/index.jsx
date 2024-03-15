import React, { useEffect, useState } from "react";
import "./style.css";
import data from "../../data/data.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Testimonial() {
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
    <section className="trade--section" id="testimonial">
      <div className="trade--container">
        <h1 className="trade--section--title">30 Million Users Worldwide</h1>
        <p className="trade--section--subtitle">
          Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
          sed vel.
        </p>
        <div className="trade-testimonial">
          {data?.testimonial?.map((item, index) => (
            <motion.div
              className="trade-testimonial--container"
              animate={{ x: isVisible ? [0, 100, 0] : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              ref={ref} // Referência para o uso do inView
              key={index}
            >
              <img src="./icons/aspas.png" className="trade-testimonial--img" />
              <p className="trade-testimonial--text">{item?.description}</p>
              <img src={item?.src} className="trade--testimonial--img-person" />
              <p className="trade--testimonial--name ">{item?.name}</p>
              <p className="trade--testimonial--subtitle">{item?.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
