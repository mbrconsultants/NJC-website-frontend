"use client";
import { functionsData } from "@/data/Data";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/scrollbar";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const FunctionSection = () => {
  return (
    <section className="rv-8-functions pt-60 pb-60" data-aos="fade-up">
      <div className="container">
        {/* <div className="rv-8-section__heading">
          <h6 className="rv-8-section__sub-title rv-text-anime">
            Our Functions
          </h6>

          <h2 className="rv-8-section__title rv-text-anime">
            What {""}
            <span className="styled">
              We Do?
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
                ></path>
              </svg>
            </span>
          </h2>
        </div> */}
        <DivAnimateYAxis>
          <Swiper
            className="rv-8-functions__slider"
            slidesPerView={4}
            spaceBetween={15}
            autoplay={true}
            navigation={{
              prevEl: "#rv-8-team-slider-nav .prev",
              nextEl: "#rv-8-team-slider-nav .next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
           
              <SwiperSlide className="rv-8-function" >
                {/* <img src={item.img} alt="icon" className="rv-8-function__img" /> */}
              <div className="rv-8-function__txt">
                <div className=" mb-3">
                <span className="fa fa-balance-scale" style={{fontSize:"30px", color: "#008000"}}></span>

                </div>
                <h6 className="rv-8-function__title mb-3">
                  
                  <a href="#">{"RULES AND REGULATIONS"}</a>
                  
                  </h6>
                <span className="rv-8-function__sub-title">
                  <a href="/procedural-rules" style={{ color: "#008000" }} className="mt-4"> <li style={{ textDecoration: "none" }}><i className="fa fa-certificate" aria-hidden="true" ></i> Procedural Rules</li></a>
                  <br />
                  <a href="/code-of-conduct" style={{ color: "#008000" }} className="mt-4"><li><i className="fa fa-certificate" aria-hidden="true" ></i> Code of Conduct</li></a>
                   <br />
                  <a href="/discipline-regulations" style={{ color: "#008000" }} className="mt-4">  <li><i className="fa fa-certificate" aria-hidden="true" style={{ color: "#008000" }}></i> Discipline Regulations</li></a>
                   <br />
                  <a href="/national-judicial-policy" style={{ color: "#008000" }} className="mt-4"><li><i className="fa fa-certificate" aria-hidden="true" style={{color:"#008000"}}></i> NJC Policy</li></a>
                  </span>
                </div>
            </SwiperSlide>
              <SwiperSlide className="rv-8-function" >
                {/* <img src={item.img} alt="icon" className="rv-8-function__img" /> */}
              <div className="rv-8-function__txt">
                 <div className=" mb-3">
                <span className="fa fa-users" style={{fontSize:"30px", color: "#008000"}}></span>

                </div>
                  <h6 className="rv-8-function__title mb-3">
                    <a href="/procedural-rules">{"COMMITTEES IN NJC"}</a>
                  </h6>
                  <span className="rv-8-function__sub-title">
                     <li><i className="fa fa-certificate" aria-hidden="true" style={{color:"#008000"}}></i>  Interview of Nominees for Appointment as Judicial Officers of Superior Courts of Record.</li>
                  <li><i className="fa fa-certificate" aria-hidden="true" style={{color:"#008000"}}></i>  Review of The 1999 Constitution.</li>
                </span>
                <div className="text-center mt-3">
                 <a href="/committees-of-njc" className="btn btn-flat" style={{color:"#008000"}}>Read more  <span className="fa-regular fa-arrow-up-right"></span></a>

                </div>
                </div>
              </SwiperSlide>  <SwiperSlide className="rv-8-function" >
                {/* <img src={item.img} alt="icon" className="rv-8-function__img" /> */}
              <div className="rv-8-function__txt">
                   <div className=" mb-3">
                <span className="fa fa-book" style={{fontSize:"30px", color: "#008000"}}></span>

                </div>
                  <h6 className="rv-8-function__title mb-3">
                    <a href="#">{"APPOINTMENT RULES"}</a>
                  </h6>
                <span className="rv-8-function__sub-title">
                  <li>
                    <i className="fa fa-certificate" aria-hidden="true" style={{color:"#008000"}}></i> 
                    {" Extant revised NJC Guidelines and Procedural rules for the appointment of Judicial Officers of all superior courts of record in Nigeria are as follows:"}

                  </li>
                </span>
                 <div className="text-center mt-3">
                 <a href="/procedural-rules" className="btn btn-flat" style={{color:"#008000"}}>Read more  <span className="fa-regular fa-arrow-up-right"></span></a>

                </div>
                </div>
              </SwiperSlide>  <SwiperSlide className="rv-8-function" >
                {/* <img src={item.img} alt="icon" className="rv-8-function__img" /> */}
              <div className="rv-8-function__txt">
                   <div className=" mb-3">
                <span className="fa fa-gavel" style={{fontSize:"30px", color: "#008000"}}></span>

                </div>
                  <h6 className="rv-8-function__title mb-3">
                    <a href="#">{"NATIONAL JUDICIAL POLICY"}</a>
                  </h6>
                <span className="rv-8-function__sub-title">
                    <i className="fa fa-certificate" aria-hidden="true" style={{color:"#008000"}}></i> 
                  
                    {" The National Judicial Council is a body established under section 153(1) of the Constitution with power relating to appointments and exercise of displinary.."}
                </span>
                 <div className="text-center mt-3">
                 <a href="/national-judicial-policy" className="btn btn-flat" style={{color:"#008000"}}>Read more  <span className="fa-regular fa-arrow-up-right"></span></a>

                </div>
                </div>
              </SwiperSlide>
           
            <div
              className="rv-7-slider-scrollbar"
              id="rv-8-functions__scrollbar"
            ></div>
          </Swiper>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default FunctionSection;
