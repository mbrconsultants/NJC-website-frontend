"use client";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection9 = () => {
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
    <section className="rv-22-banner_section">
      <Swiper
        loop={true}
        initialSlide={2}
        pagination={{
          bulletClass: "rv-22-banner-bullet",
          bulletActiveClass: "active",
          clickable: true,
          el: ".rv-22-banner-bullet-container",
          bulletElement: "button",
          renderBullet: function (index, className) {
            return `<button class="${className}"><span></span></button>`;
          },
        }}
        modules={[Pagination]}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <SwiperSlide className="rv-22-banner_slide rv-22-slide-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="rv-22-banner_content">
                  <h4 className="rv-22-banner_sub_heading rv-text-anime ">
                    <span className="rv8_sub_pre_sty"></span> The New Hair Trend{" "}
                    <span className="rv8_sub_pre_nex"></span>
                  </h4>
                  <h1 className="rv-22-banner_content_heading rv-text-anime ">
                    Greetings from the Skilled Barbers.
                  </h1>
                  <a href="" className="rv-22-banner_content_btn">
                    Make An Appointment Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rv-22-banner_socials  ">
            <div className="rv-22-banner_link">
              <span>Follow Us</span>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rv-22-banner_slide rv-22-slide-2">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="rv-22-banner_content">
                  <h4 className="rv-22-banner_sub_heading rv-text-anime ">
                    <span className="rv8_sub_pre_sty"></span> The New Hair Trend{" "}
                    <span className="rv8_sub_pre_nex"></span>
                  </h4>
                  <h1 className="rv-22-banner_content_heading rv-text-anime ">
                    Greetings from the Skilled Barbers.
                  </h1>
                  <a href="" className="rv-22-banner_content_btn">
                    Make An Appointment Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rv-22-banner_socials  ">
            <div className="rv-22-banner_link">
              <span>Follow Us</span>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rv-22-banner_slide rv-22-slide-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="rv-22-banner_content">
                  <h4 className="rv-22-banner_sub_heading rv-text-anime ">
                    <span className="rv8_sub_pre_sty"></span> The New Hair Trend{" "}
                    <span className="rv8_sub_pre_nex"></span>
                  </h4>
                  <h1 className="rv-22-banner_content_heading rv-text-anime ">
                    Greetings from the Skilled Barbers.
                  </h1>
                  <a href="" className="rv-22-banner_content_btn">
                    Make An Appointment Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rv-22-banner_socials  ">
            <div className="rv-22-banner_link">
              <span>Follow Us</span>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rv-22-banner_slide rv-22-slide-2">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-9">
                <div className="rv-22-banner_content">
                  <h4 className="rv-22-banner_sub_heading rv-text-anime ">
                    <span className="rv8_sub_pre_sty"></span> The New Hair Trend{" "}
                    <span className="rv8_sub_pre_nex"></span>
                  </h4>
                  <h1 className="rv-22-banner_content_heading rv-text-anime ">
                    Greetings from the Skilled Barbers.
                  </h1>
                  <a href="" className="rv-22-banner_content_btn">
                    Make An Appointment Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rv-22-banner_socials  ">
            <div className="rv-22-banner_link">
              <span>Follow Us</span>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className="rv-22-banner-bullet-container"></div>
      </Swiper>
    </section>
  );
};

export default BannerSection9;
