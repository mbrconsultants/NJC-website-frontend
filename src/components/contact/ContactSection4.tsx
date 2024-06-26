import React from "react";
import ContactForm4 from "../form/ContactForm4";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ContactSection4 = () => {
  return (
    <section className="rv-18-contact_main_section">
      <div className="container">
        <DivAnimateYAxis visible className="rv-18-contact_info">
          <div className="row">
            <div className="col-lg-7">
              <div className="rv-18-contact_info_area">
                <h2 className="rv-18-contact_info_heading rv-text-anime">
                  Car Refresh Service & Wash Point.
                  <span className="position-absolute">
                    <img
                      src="assets/img/slider/home-4-banner-sh.png"
                      alt="image"
                    />
                  </span>
                </h2>

                <div className="rv-18-contact_location_area">
                  <div className="rv-18-contact_location">
                    <a href="#">
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <div className="rv-18-contact_location_txt">
                      <h3>Abuja, Nigeria</h3>
                      <address>
                       Three Arm Zone, Abuja Nigeria
                      </address>
                    </div>
                  </div>
                  <div className="rv-18-contact_location">
                    <a href="#">
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <div className="rv-18-contact_location_txt">
                      <h3>Carlton New York</h3>
                      <address>
                       Three Arm Zone, Abuja Nigeria
                      </address>
                    </div>
                  </div>
                </div>
                <div className="rv-18-contact_location_area">
                  <div className="rv-18-contact_location">
                    <a href="#">
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <div className="rv-18-contact_location_txt">
                      <h3>Carlton New York</h3>
                      <address>
                       Three Arm Zone, Abuja Nigeria
                      </address>
                    </div>
                  </div>
                  <div className="rv-18-contact_location">
                    <a href="#">
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <div className="rv-18-contact_location_txt">
                      <h3>Carlton New York</h3>
                      <address>
                       Three Arm Zone, Abuja Nigeria
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="rv-18-contact_form">
                <h2 className="rv-18-contact_form_heading">Get in Touch</h2>
                <ContactForm4 />
              </div>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default ContactSection4;
