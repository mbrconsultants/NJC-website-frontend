import React from "react";
type Props = {
  category: string;
};
const PricingPackage = [
  {
    id: 1,
    category: "super-car",
    pricing: [
      {
        package: "Basic Washing",
        price: {
          usd: 37,
          cent: 88,
        },
      },
      {
        package: "Express Washing",
        price: {
          usd: 84,
          cent: 88,
        },
        bestChoice: true,
      },
      {
        package: "Advanced Washing",
        price: {
          usd: 99,
          cent: 88,
        },
      },
    ],
  },
  {
    id: 2,
    category: "sedan-car",
    pricing: [
      {
        package: "Basic Washing",
        price: {
          usd: 38,
          cent: 88,
        },
      },
      {
        package: "Express Washing",
        price: {
          usd: 85,
          cent: 88,
        },
        bestChoice: true,
      },
      {
        package: "Advanced Washing",
        price: {
          usd: 90,
          cent: 88,
        },
      },
    ],
  },
  {
    id: 3,
    category: "private-car",
    pricing: [
      {
        package: "Basic Washing",
        price: {
          usd: 30,
          cent: 77,
        },
      },
      {
        package: "Express Washing",
        price: {
          usd: 80,
          cent: 77,
        },
        bestChoice: true,
      },
      {
        package: "Advanced Washing",
        price: {
          usd: 90,
          cent: 77,
        },
      },
    ],
  },
  {
    id: 4,
    category: "minivan-car",
    pricing: [
      {
        package: "Basic Washing",
        price: {
          usd: 45,
          cent: 85,
        },
      },
      {
        package: "Express Washing",
        price: {
          usd: 78,
          cent: 85,
        },
        bestChoice: true,
      },
      {
        package: "Advanced Washing",
        price: {
          usd: 99,
          cent: 85,
        },
      },
    ],
  },
];

const PricingPlan = ({ category }: Props) => {
  const showPlan = PricingPackage.find((item) => item.category === category);
  return (
    <div className="row">
      {showPlan?.pricing.map((item, index) => (
        <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
          <div className="rv-18-single_pricing_plan">
            <div className="rv-18-pricing_plan_header">
              {item.bestChoice && (
                <span className="rv-18-pricing_plan_best_choice">
                  Best Choice
                </span>
              )}
              <h3 className="rv-18-pricing_plan_header_title">
                {item.package}
              </h3>
              <h4 className="rv-18-pricing_plan_price">
                ${item.price.usd}
                <sup>
                  .<span>{item.price.cent}</span>
                </sup>
              </h4>
            </div>

            <div className="rv-18-pricing_plan_content">
              <span className="rv-18-pricing_plan_time">
                <i className="far fa-clock"></i>
                {item.package === "Basic Washing" && "2 Hours"}
                {item.package === "Express Washing" && "2 Hours 30 Minutes"}
                {item.package === "Advanced Washing" && "2 Hours 50 Minutes"}
              </span>
              <ul>
                {item.package === "Basic Washing" && (
                  <>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Exterior washing</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Vacuum cleaning</span>
                    </li>
                    <li className="crossed">
                      <i className="fas fa-times"></i>
                      <span>Interior wet cleaning</span>
                    </li>
                    <li className="crossed">
                      <i className="fas fa-times"></i>
                      <span>Window wiping</span>
                    </li>
                    <li className="crossed">
                      <i className="fas fa-times"></i>
                      <span>Light Carpet Clean</span>
                    </li>
                  </>
                )}
                {item.package === "Express Washing" && (
                  <>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Exterior washing</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Vacuum cleaning</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Interior wet cleaning</span>
                    </li>
                    <li className="crossed">
                      <i className="fas fa-times"></i>
                      <span>Window wiping</span>
                    </li>
                    <li className="crossed">
                      <i className="fas fa-times"></i>
                      <span>Light Carpet Clean</span>
                    </li>
                  </>
                )}
                {item.package === "Advanced Washing" && (
                  <>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Exterior washing</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Vacuum cleaning</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Interior wet cleaning</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Window wiping</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Light Carpet Clean</span>
                    </li>
                  </>
                )}
              </ul>
              <div className="rv-18-pricing_plan_footer">
                <a href="" className={item.bestChoice ? "best-choice-btn" : ""}>
                  Select Now <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlan;
