import { awardData } from "@/data/Data";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const AwardSection = () => {
  return (
    <section className="rv-2-award" id="award">
      <div className="container">
        <h2 className="rv-2-section-title rv-text-anime">Honors Earned</h2>

        {awardData.map((item) => (
          <DivAnimateYAxis
            className="rv-1-schedule-conf rv-2-honor"
            key={item.id}
            duration={1.2 + 0.2 * item.id}
          >
            <h6 className="rv-2-honor__year">{item.year}</h6>
            <div className="rv-2-honor__img">
              <img src={item.logo} alt="Author Image" />
            </div>

            <div className="rv-2-honor__details">
              <h4 className="rv-2-honor__title">
                <a href="#">{item.title}</a>
              </h4>

              <p className="rv-2-honor__descr">{item.desc}</p>
            </div>

            <a href="#" className="rv-1-schedule-conf__btn rv-2-honor__btn">
              See Match <i className="fa-light fa-arrow-right"></i>
            </a>
          </DivAnimateYAxis>
        ))}
      </div>
    </section>
  );
};

export default AwardSection;
