"use client";
import React from "react";
import Link from "next/link";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import NumberCounter from "../utils/NumberCounter";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface SliderItem {
  id: number;
  image_link: string;
  image_description: string;
}

interface BannerSection8Props {
  mainSlider: SliderItem[];
}

const AboutSection5: React.FC<BannerSection8Props> = ({ mainSlider }) => {
  console.log('==============mainSlider======================');
  console.log(mainSlider);
  console.log('====================================');
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section className="rv-8-about pt-60 pb-60">
      <div className="container">
        <DivAnimateYAxis position={40} className="row g-30 align-items-center">
          <div className="col-lg-6">
            <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
              <div className="carousel-indicators">
                {mainSlider && mainSlider.map((item, index) => (
                  <button
                    key={index + 1}
                    type="button"
                    data-bs-target="#bannerCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {mainSlider && mainSlider.map((item, index) => (
                  <img
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    style={{ height: "600px" }}
                    src={process.env.NEXT_PUBLIC_UPLOAD_URL  + item.image_link}
                  />
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rv-8-about__txt">
              <h2 className="rv-8-section__title rv-text-anime">
                Our   Visitors
                <span className="styled">
                   
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

              {/* <p className="rv-8-about__descr">
                The number of Websiquis deleniti sed possimus hic quaerat quidem explicabo animi iure itaque officia vitae, debitis laboriosam atque qui?
              </p> */}

              <div className="rv-8-about__stats d-flex justify-content-around align-items-center">
                <div className="rv-8-about-stat text-center">
                  <h6 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={200} durationToComplete={3} />
                    </span>
                    +
                  </h6>
                  <h6 className="rv-8-about-stat__name">Yearly Visitor</h6>
                </div>
                <div className="rv-8-about-stat text-center">
                  <h6 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={87} durationToComplete={3} />
                    </span>
                    +
                  </h6>
                  <h6 className="rv-8-about-stat__name">Monthly Visitor</h6>
                </div>
                <div className="rv-8-about-stat text-center">
                  <h6 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={69} durationToComplete={3} />
                    </span>
                    +
                  </h6>
                  <h6 className="rv-8-about-stat__name">Weekly Visitor</h6>
                </div>
                <div className="rv-8-about-stat text-center">
                  <h6 className="rv-8-about-stat__number">
                    <span>
                      <NumberCounter number={69} durationToComplete={3} />
                    </span>
                    +
                  </h6>
                  <h6 className="rv-8-about-stat__name">Daily Visitor</h6>
                </div>
                
              </div>
              <div className="" style={{ marginBottom: "10px" }}>
               <Link href="/contact" className="d-sm-inline-block d-none text-white p-2"
                style={{ backgroundColor: "green" }}>
                  {/* <i className="fa fa-image" aria-hidden="true"></i> */}
                  - Explore NJC Gallery -
                </Link>
               </div>
              

          
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
