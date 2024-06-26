"use client";
import { testimonialData5 } from "@/data/Data";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const CompareSection = () => {
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const textsToAnimate = currentSlide.querySelectorAll(".rv-text-anime");
        textsToAnimate.forEach((textToAnimate: HTMLElement) => {
          const animate = new SplitType(textToAnimate, {
            types: "words,chars",
          });
          gsap.from(animate.chars, {
            opacity: 0,
            x: 100,
            duration: 1.1,
            stagger: { amount: 0.9 },
          });
        });
      });
    }
  }, [swiper]);
  return (
    <section className="rv-18-compare_section">
      <div className="container">
        <DivAnimateYAxis className="row g-0">
          <div className="col-md-12 col-lg-6">
            <div className="rv-18-compare_iamge_area">
              <div className="rv-18-compare_single_iamge ">
                <ImgComparisonSlider>
                  <img
                    slot="first"
                    src="assets/img/services/home-4-compare-1.jpg"
                  />
                  <img
                    slot="second"
                    src="assets/img/services/home-4-compare-2.jpg"
                  />
                  <div className="compare-handler" slot="handle">
                    <i className="diagonal-line1"></i>
                    <i className="diagonal-line2"></i>
                  </div>
                </ImgComparisonSlider>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-6">
            <Swiper
              className="rv-18-compare_content"
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              navigation={{
                nextEl: ".rv-18-compare-swiper-button-next",
                prevEl: ".rv-18-compare-swiper-button-prev",
              }}
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => setSwiper(swiper)}
            >
              {testimonialData5.map((item) => (
                <SwiperSlide
                  className="rv-18-compare_single_content"
                  key={item.id}
                >
                  <h2 className="rv-18-compare_content_heading rv-text-anime">
                    {item.testimony}
                    <span className="position-absolute">
                      <img
                        src="assets/img/slider/home-4-banner-sh.png"
                        alt="image"
                      />
                    </span>
                  </h2>
                  <p className="rv-18-compare_content_desc">{item.desc}</p>
                  <a href="#" className="rv-18-compare_btn">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </SwiperSlide>
              ))}

              <div className="rv-18-compare_arrow_button">
                <div className="rv-18-compare-swiper-button-prev">
                  <i className="fal fa-arrow-left"></i>
                </div>
                <div className="rv-18-compare-swiper-button-next">
                  <i className="fal fa-arrow-right"></i>
                </div>
              </div>
            </Swiper>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default CompareSection;
