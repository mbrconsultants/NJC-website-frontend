import React from "react";
import PortfolioSlider from "../slider/PortfolioSlider";

const PortfolioSection = () => {
  return (
    <section className="rv-2-porfolios" id="portfolio">
      <div className="container">
        <h2 className="rv-2-section-title rv-text-anime">Picture Selection</h2>

        <PortfolioSlider />
      </div>
    </section>
  );
};

export default PortfolioSection;
