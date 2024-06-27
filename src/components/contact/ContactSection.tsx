import React from "react";
import ContactForm from "../form/ContactForm";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  innerPage?: boolean;
};
const ContactSection = ({ innerPage }: Props) => {
  return (
    <section
      className={`rv-2-contact ${
        innerPage ? "rv-inner-contact rv-section-spacing" : ""
      }`}
      id="contact"
    >
      <div className="container">
        {innerPage ? (
          <DivAnimateYAxis className="rv-inner-contact-info-cards">
            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-phone"></i>
                </div>
                <h5 className="rv-inner-contact-info__title">
                  Contact Numbers
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <a href="tel:0123456789">09-4603190</a>
                  </li>
                 
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">Email Address</h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <a href="mailto:info@revel.com">info@njc.gov.ng</a>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-clock"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">
                  Hours of Operation
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <span className="key">Monday - Friday : </span>
                    <span className="value">09:30 am - 16:30 pm</span>
                  </li>
               
                </ul>
              </div>
            </div>
          </DivAnimateYAxis>
        ) : (
          <h2 className="rv-2-section-title rv-text-anime">
           Loading data...
          </h2>
        )}

        <div className="row gy-3 gy-sm-4">
          <DivAnimateXAxis position={-60} className="col-xxl-8 col-lg-7">
            <div
              className={`rv-2-contact__txt ${
                innerPage ? "rv-inner-contact__txt" : ""
              }`}
            >
              <h3 className="rv-2-contact-form-title">Let's Connect.</h3>

              <ContactForm innerPage={innerPage ? true : false} />
            </div>
          </DivAnimateXAxis>

          <DivAnimateXAxis className="col-xxl-4 col-lg-5" position={60}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31520.517993681035!2d7.49224158558039!3d9.057858748565858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snational%20judicial%20council%20of%20nigeria!5e0!3m2!1sen!2sng!4v1719477152702!5m2!1sen!2sng" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
