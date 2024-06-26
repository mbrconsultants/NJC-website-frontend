"use client";
import { projectData } from "@/data/Data";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import Link from "next/link";

const ProjectSection3 = () => {
  return (
    <section className="rv-8-projects" data-aos="fade-up">
      <div className="container">
        <div className="rv-3-section-heading">
          <div className="rv-3-section-heading__left">
            <h6 className="rv-8-section__sub-title rv-text-anime">
              our projects
            </h6>

            <h2 className="rv-8-section__title rv-text-anime">
              Latest {""}
              <span className="styled">
                Projects
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
          </div>

          <DivAnimateXAxis className="rv-3-section-heading__right">
            <div
              className="rv-1-slider-nav rv-8-slider-nav"
              id="rv-8-projects-slider-nav"
            >
              <button className="prev">
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button className="next">
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
      <DivAnimateYAxis>
        <Swiper
          className="rv-8-projects__slider"
          autoplay={true}
          spaceBetween={20}
          loop={true}
          slidesPerView="auto"
          navigation={{
            prevEl: "#rv-8-projects-slider-nav .prev",
            nextEl: "#rv-8-projects-slider-nav .next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2.2,
              centeredSlides: true,
            },
            1400: {
              spaceBetween: 25,
            },
            1600: {
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {projectData.slice(-6).map((item) => (
            <SwiperSlide className="rv-3-project" key={item.id}>
              <div className="rv-3-project__img">
                <img src={item.img} alt="Project Image" />
                <div className="rv-3-project__actions">
                  <Link href={`/projects/${item.slug}`} className="quick-view">
                    <i className="fa-light fa-plus"></i>
                  </Link>
                </div>
              </div>

              <div className="rv-3-project__txt">
                <span className="rv-3-project__sub-title">{item.subTitle}</span>
                <h5 className="rv-3-project__title">{item.subTitle}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};

export default ProjectSection3;
