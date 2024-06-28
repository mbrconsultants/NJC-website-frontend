"use client";
import { serviceData5 } from "@/data/Data";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection6 = () => {
  return (
    <section className="rv-18-service_main_section">
      <div className="row">
        <div className="col-md-7">
          <h2 className="rv-18-service_heading rv-text-anime">
            Crystal Clear Auto Spa The Perfect Clean.
            <span className="position-absolute">
              <img src="assets/img/slider/home-4-banner-sh.png" alt="image" />
            </span>
          </h2>
        </div>
        <div className="col-md-5 d-flex align-items-center justify-content-end">
          <DivAnimateXAxis className="rv-18-service-nav">
            <button className="rv-18-service-prev">
              <i className="fal fa-arrow-left"></i>
            </button>
            <button className="rv-18-service-next">
              <i className="fal fa-arrow-right"></i>
            </button>
          </DivAnimateXAxis>
        </div>
      </div>
      <DivAnimateYAxis>
        <Swiper
          className="row rv-18-single_service_slide"
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".rv-18-service-next",
            prevEl: ".rv-18-service-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
        >
          {serviceData5.map((item) => (
            <SwiperSlide className="rv-18-single_service" key={item.id}>
              <div className="rv-18-single_service_iamge">
                <img src={item.img} alt="image" />
              </div>
              <div className="rv-18-single_service_content_main">
                <div className="rv-18-single_service_content_top">
                  <div className="rv-18-single_service_icon">
                    <img src={item.icon} alt="image" />
                  </div>
                  <div className="rv-18-single_service_content_title">
                    <p>{item.serviceType}</p>
                    <h4>{item.service}</h4>
                  </div>
                </div>

                <ul className="rv-18-single_service_list">
                  {item.serviceList.map((service, index) => (
                    <li key={index}>
                      <i className="fas fa-square-full"></i> {service}
                    </li>
                  ))}
                </ul>
                <a href="#" className="rv-18-service_btn">
                  Read More <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};

export default ServiceSection6;
