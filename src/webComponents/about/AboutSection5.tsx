"use client";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import NumberCounter from "../utils/NumberCounter";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";

const AboutSection5 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section className="rv-8-about pt-60 pb-60">
      <div className="container">
        <DivAnimateYAxis position={40} className="row g-30 align-items-center">
          <div className="col-lg-6">
            <div className="rv-5-video rv-8-about__video text-center">
              <span>
                <a role="button" onClick={openVideoModal}>
                  <i className="fa-solid fa-sharp fa-play"></i>
                </a>
              </span>
              <img
                src="assets/img/rv-8-about-vector-1.png"
                alt="vector"
                className="vector"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rv-8-about__txt">
            

              <h2 className="rv-8-section__title rv-text-anime">
               Website
                <span className="styled">
                  Statistics
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

              <p className="rv-8-about__descr">
               The number of Website visitors
              </p>

              <div className="rv-8-about__stats d-flex">
                <div className="rv-8-about-stat">
                  <h4 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={200} durationToComplete={3} />
                    </span>
                    +
                  </h4>
                  <h6 className="rv-8-about-stat__name">Yearly Visitor</h6>
                </div>
                <div className="rv-8-about-stat">
                  <h4 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={87} durationToComplete={3} />
                    </span>
                    +
                  </h4>
                  <h6 className="rv-8-about-stat__name">Monthly Visitor</h6>
                </div>
                <div className="rv-8-about-stat">
                  <h6 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={69} durationToComplete={3} />
                    </span>
                    +
                  </h6>
                    <h6 className="rv-8-about-stat__name">Weekly Visitor</h6>

                </div>
                  <div className="rv-8-about-stat">
                  <h4 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={69} durationToComplete={3} />
                    </span>
                    +
                  </h4>
                    <h6 className="rv-8-about-stat__name">Daily Visitor</h6>

                </div>
              </div>

              <a href="#" className="rv-3-def-btn">
                Learn More About Us
              </a>

              <div className="vectors">
                <img
                  src="assets/img/rv-8-about-vector-2.png"
                  alt="vector"
                  className="vector vector--1"
                />
                <img
                  src="assets/img/rv-8-about-vector-3.png"
                  alt="vector"
                  className="vector vector--2"
                />
                <img
                  src="assets/img/rv-8-about-vector-4.png"
                  alt="vector"
                  className="vector vector--3"
                />
              </div>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default AboutSection5;
