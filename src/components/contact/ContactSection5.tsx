import React from "react";
import ContactForm5 from "../form/ContactForm5";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ContactSection5 = () => {
  return (
    <section className="rv-22-contact_main_section">
      <div className="container">
        <div className="row">
          <DivAnimateYAxis
            position={40}
            visible
            className="rv-22-contact-form-container"
          >
            <div className="rv-22-contact_area">
              <div className="rv-22-contact_form">
                <h4 className="rv-22-contact_sub_title rv-text-anime">
                  DO YOU NEED<span className="rv8_sub_pre_nex"></span>
                </h4>

                <h2 className="rv-22-contact_title rv-text-anime">
                  Book an Appointment
                </h2>

                <ContactForm5 />
              </div>

              <div className="rv-22-contact_image">
                <img src="assets/img/contact/home-8-1.png" alt="image" />
              </div>
            </div>
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default ContactSection5;
