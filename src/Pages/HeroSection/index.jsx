import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-scroll";

export default function HeroSection() {
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 12,
    minutes: 23,
    seconds: 35,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      // Atualizar o estado do countdown subtraindo 1 segundo
      setCountdown((prevCountdown) => {
        // Verificar se o countdown chegou a zero, e reiniciá-lo
        if (prevCountdown.seconds === 0) {
          if (prevCountdown.minutes === 0) {
            if (prevCountdown.hours === 0) {
              if (prevCountdown.days === 0) {
                // Reiniciar o countdown
                return {
                  days: 2,
                  hours: 12,
                  minutes: 23,
                  seconds: 35,
                };
              } else {
                // Diminuir um dia e reiniciar horas, minutos e segundos
                return {
                  days: prevCountdown.days - 1,
                  hours: 23,
                  minutes: 59,
                  seconds: 59,
                };
              }
            } else {
              // Diminuir uma hora e reiniciar minutos e segundos
              return {
                ...prevCountdown,
                hours: prevCountdown.hours - 1,
                minutes: 59,
                seconds: 59,
              };
            }
          } else {
            // Diminuir um minuto e reiniciar segundos
            return {
              ...prevCountdown,
              minutes: prevCountdown.minutes - 1,
              seconds: 59,
            };
          }
        } else {
          // Diminuir um segundo
          return {
            ...prevCountdown,
            seconds: prevCountdown.seconds - 1,
          };
        }
      });
    }, 1000); // Atualizar a cada segundo

    // Limpar o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heroSection" className={"hero--section"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "49.22px",
        }}
      >
        <img src="./img/bitcoin.png" className="imagem-flutuante-bit" />
        <img src="./img/monero.png" className="imagem-flutuante-mon" />
        <img src="./img/etherium.png" className="imagem-flutuante-etherium" />
        <img src="./img/litecoin.png" className="imagem-flutuante-litecoin" />

        <h1 className="hero--section--title">
          Next Generation
          <br /> Crypto Trading
        </h1>
        <p className="hero--section--subtitle">Crypto Market Starts in</p>
        <div className="hero--section--contdown-box">
          <div className="hero--section--contdown-contain">
            <p className="hero--section--contdown-box-title">
              {countdown.days}
            </p>
            <p className="hero--section--contdown-box-subtitle">DAYS</p>
          </div>
          :
          <div className="hero--section--contdown-contain">
            <p className="hero--section--contdown-box-title">
              {countdown.hours}
            </p>
            <p className="hero--section--contdown-box-subtitle">DAYS</p>
          </div>
          :
          <div className="hero--section--contdown-contain">
            <p className="hero--section--contdown-box-title">
              {countdown.minutes}
            </p>
            <p className="hero--section--contdown-box-subtitle">DAYS</p>
          </div>
          :
          <div className="hero--section--contdown-contain">
            <p className="hero--section--contdown-box-title">
              {countdown.seconds}
            </p>
            <p className="hero--section--contdown-box-subtitle">DAYS</p>
          </div>
        </div>
        <div className="hero--section--box-button">
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
