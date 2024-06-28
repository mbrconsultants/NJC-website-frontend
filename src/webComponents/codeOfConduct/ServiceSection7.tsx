import { serviceData6 } from "@/data/Data";
import React from "react";

const ServiceSection7 = () => {
  return (
    <section className="rv-22-service_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="rv-22-service_section_heading">
              <h5 className="rv-22-service_section_sub_title rv-text-anime">
                <span className="rv8_sub_pre_sty"></span> OUR Services{" "}
                <span className="rv8_sub_pre_nex"></span>
              </h5>
              <h2 className="rv-22-service_section_title rv-text-anime">
                Buzzworthy Hair Cutting & Styling Venue.
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {serviceData6.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="rv-22-single_service">
                <div className="rv-22-single_service_iamge">
                  <img src={item.img} alt="image" />
                </div>
                <div className="rv-22-single_service_content_main">
                  <div className="rv-22-single_service_content_heading">
                    <div className="rv-22-single_service_content_icon">
                      <img src={item.icon} alt="image" />
                    </div>
                    <div className="rv-22-single_service_content_title">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <div className="rv-22-single_service_list_area">
                    {item.services.map((service, index) => (
                      <div className="rv-22-single_service_list" key={index}>
                        <div className="rv-22-single_service_list_txt">
                          <h4>{service.service}</h4>
                          <p>Duration / {service.time} minutes</p>
                        </div>
                        <div className="rv-22-single_service_list_price">
                          <h4>${service.price}.00</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="rv-22-service_btn">
                    Book Online <i className="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection7;
