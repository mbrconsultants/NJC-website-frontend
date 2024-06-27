import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const CtaSection2 = () => {
  return (
    <section className="rv-22-cta_section">
      <div className="container">
        <DivAnimateYAxis position={40} visible className="row">
          <div className="col-lg-7">
            <div className="rv-22-cta_section_content">
              <h4 className="rv-22-cta_sub_title rv-text-anime">
                Barber today!<span className="rv8_sub_pre_nex"></span>
              </h4>

              <h2 className="rv-22-cta_title rv-text-anime">
                Online Booking Available Reserve Your Spot and Call Our Salon.
              </h2>

              <a href="#" className="rv-22-cta_content_btn">
                Booking Appointment
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="rv-22-cta_time_box_area">
              <h3>Opening Hours</h3>
              <div className="rv-22-cta_time">
                <div className="rv-22-single_cta_time">
                  <h5>Monday - Friday</h5>
                  <span>08:30 - 23:30</span>
                </div>
                <div className="rv-22-single_cta_time">
                  <h5>Monday - Friday</h5>
                  <span>08:30 - 23:30</span>
                </div>
                <div className="rv-22-single_cta_time">
                  <h5>Monday - Friday</h5>
                  <span>08:30 - 23:30</span>
                </div>
              </div>
              <a href="#" className="rv-22-cta_time_box_btn">
                Book Now
              </a>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default CtaSection2;
