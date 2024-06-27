import { historyData } from "@/data/Data";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const HistorySection = () => {
  return (
    <section className="rv-2-history" id="history">
      <div className="container">
        <div className="row gx-0 gy-4 gy-sm-5 align-items-center justify-content-center">
          <div className="col-xxl-7 col-lg-8">
            <div className="rv-2-history__txt">
              <h2 className="rv-2-section-title rv-text-anime">My History</h2>

              <div className="rv-2-timelines">
                {historyData.map((item) => (
                  <DivAnimateYAxis
                    position={80}
                    duration={1.2 + 0.15 * item.id}
                    className="rv-2-timeline"
                    key={item.id}
                  >
                    <div className="rv-2-timeline-time">
                      <h6 className="rv-2-timeline-time__years">
                        {item.timeLine}
                      </h6>
                    </div>
                    <div className="rv-2-timeline-details">
                      <h5 className="rv-2-timeline-details__title">
                        {item.title}
                      </h5>
                      <h5 className="rv-2-timeline-details__descr">
                        {item.description}
                      </h5>
                    </div>
                  </DivAnimateYAxis>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xxl-5 col-sm-4 col-6">
            <DivAnimateXAxis className="rv-2-history__img" position={80}>
              <img src="assets/img/rv-2-history-img.png" alt="History image" />
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
