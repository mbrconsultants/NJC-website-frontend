"use client";
import React, { useState } from "react";
import PricingPlan from "./PricingPlan";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const PricingSection4 = () => {
  const [activeTab, setActiveTab] = useState<string>("super-car");
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <section className="rv-18-price_plan_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="rv-18-price_heading rv-text-anime">
              Choose Your Package
              <span className="position-absolute">
                <img src="assets/img/slider/home-4-banner-sh.png" alt="image" />
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <DivAnimateYAxis className="rv-18-price-main-area">
              <ul className="rv-18-price_nav tabs">
                <li
                  className={`tab ${
                    activeTab === "super-car" ? "tab--active" : ""
                  }`}
                  role="button"
                  onClick={() => toggleTab("super-car")}
                >
                  <img src="assets/img/price/home-4-price-1.png" alt="image" />
                  <p>Super Car</p>
                </li>

                <li
                  className={`tab ${
                    activeTab === "sedan-car" ? "tab--active" : ""
                  }`}
                  role="button"
                  onClick={() => toggleTab("sedan-car")}
                >
                  <img src="assets/img/price/home-4-price-2.png" alt="image" />
                  <p>Sedan Car</p>
                </li>

                <li
                  className={`tab ${
                    activeTab === "private-car" ? "tab--active" : ""
                  }`}
                  role="button"
                  onClick={() => toggleTab("private-car")}
                >
                  <img src="assets/img/price/home-4-price-3.png" alt="image" />
                  <p>Private Car</p>
                </li>

                <li
                  className={`tab ${
                    activeTab === "minivan-car" ? "tab--active" : ""
                  }`}
                  role="button"
                  onClick={() => toggleTab("minivan-car")}
                >
                  <img src="assets/img/price/home-4-price-4.png" alt="image" />
                  <p>Minivan Car</p>
                </li>
              </ul>

              <div className="rv-18-price_wrapper tabs-content">
                <div
                  className={`tab-content__section ${
                    activeTab === "super-car" ? "active" : ""
                  }`}
                >
                  <PricingPlan category="super-car" />
                </div>

                <div
                  className={`tab-content__section ${
                    activeTab === "sedan-car" ? "active" : ""
                  }`}
                >
                  <PricingPlan category="sedan-car" />
                </div>

                <div
                  className={`tab-content__section ${
                    activeTab === "private-car" ? "active" : ""
                  }`}
                >
                  <PricingPlan category="private-car" />
                </div>

                <div
                  className={`tab-content__section ${
                    activeTab === "minivan-car" ? "active" : ""
                  }`}
                >
                  <PricingPlan category="minivan-car" />
                </div>
              </div>
            </DivAnimateYAxis>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection4;
