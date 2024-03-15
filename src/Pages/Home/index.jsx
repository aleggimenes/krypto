import React from "react";
import HeroSection from "../HeroSection";
import TradePlace from "../TradePlace";
import HowToTrade from "../HowToTrade";
import Features from "../Features";
import MobilePlatform from "../MobilePlatform";
import Testimonial from "../Testimonials";
import MarketAnalysis from "../MarketAnalysis";
import Footer from "../Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <HowToTrade />
      <TradePlace />
      <Features />
      <MobilePlatform />
      <Testimonial />
      <MarketAnalysis />
      <Footer />
    </>
  );
}
