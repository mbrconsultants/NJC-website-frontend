import { pricingData3 } from "@/data/Data";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const PricingSection3 = () => {
  return (
    <section className="rv-8-pricing pt-60 pb-120" data-aos="fade-up">
      <div className="container">
        <div className="rv-8-section__heading">
          <h6 className="rv-8-section__sub-title rv-text-anime">
            pricing plans
          </h6>

          <h2 className="rv-8-section__title rv-text-anime">
            Choose Your {""}
            <span className="styled">
              Pricing
              <svg
                width="191"
                height="20"
                viewBox="0 0 191 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.350829 19.9954C62.8308 5.83547 125.782 4.29367 187.776 13.0908C189.008 13.2659 190.838 11.7486 190.99 9.4079C191.144 7.02425 189.429 5.15235 188.194 4.95568C125.733 -5.0348 63.0249 0.340437 0.251936 18.7297C-0.147058 18.8469 -0.0406972 20.0845 0.350829 19.9954Z"
                  fill="#93B617"
                />
              </svg>
            </span>
            {""} Plan
          </h2>
        </div>

        <DivAnimateYAxis className="row justify-content-center rv-1-pricing__row">
          {pricingData3.map((item) => (
            <div className="col-lg-4 col-sm-6 col-10 col-xxs-12" key={item.id}>
              <div className="rv-1-pricing-pack rv-8-pricing-pack">
                <div className="rv-1-pricing-pack__heading">
                  <h6 className="rv-1-pricing-pack__sub-title">{item.plan}</h6>
                  <h2 className="rv-1-pricing-pack__title">${item.price}.00</h2>
                </div>

                <a href="#" className="rv-3-def-btn">
                  Order Cleaning <i className="fa-regular fa-arrow-right"></i>
                </a>

                <ul className="rv-1-pricng-pack__infos">
                  {item.packageInfos.map((info, index) => (
                    <li className="rv-1-pricing-pack__info" key={index}>
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default PricingSection3;
