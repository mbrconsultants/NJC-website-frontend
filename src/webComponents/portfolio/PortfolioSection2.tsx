"use client";
import React, { useRef, useEffect } from "react";
import { portfolioData2 } from "@/data/Data";

const PortfolioSection2 = () => {
  const portfolioContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const portfolioContainer = portfolioContainerRef.current;
    const portfolios = document.querySelectorAll(".rv-5-portfolio");

    if (portfolioContainer && portfolios.length > 0) {
      portfolioContainer.style.backgroundImage = `url(${portfolios[0]
        .querySelector(".rv-5-portfolio__img img")!
        .getAttribute("src")})`;

      const handleMouseOver = (event: Event) => {
        const target = event.currentTarget as HTMLDivElement;
        if (target) {
          const imgSrc = target
            .querySelector(".rv-5-portfolio__img img")!
            .getAttribute("src");
          if (imgSrc) {
            portfolioContainer.style.backgroundImage = `url(${imgSrc})`;
          }
        }
      };

      portfolios.forEach((portfolio) => {
        portfolio.addEventListener("mouseover", handleMouseOver);
      });

      return () => {
        // Cleanup event listeners on component unmount
        portfolios.forEach((portfolio) => {
          portfolio.removeEventListener("mouseover", handleMouseOver);
        });
      };
    }
  }, []);

  return (
    <section
      className="rv-5-portfolios bg-defaults"
      ref={portfolioContainerRef}
    >
      {portfolioData2.map((item) => (
        <div className="rv-5-portfolio" key={item.id}>
          <div className="rv-5-portfolio__img">
            <img src={item.img} alt="Portfolio" />
          </div>
          <div className="rv-5-portfolio__txt">
            <span className="rv-5-portfolio__infos">
              <span className="location">{item.location}</span> -{" "}
              <span className="date">{item.date}</span>
            </span>

            <h5 className="rv-5-portfolio__name">
              <a href="#" className="rv-text-anime">
                {item.name}
              </a>
            </h5>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PortfolioSection2;
