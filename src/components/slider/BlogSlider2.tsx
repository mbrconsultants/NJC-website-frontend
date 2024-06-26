"use client";
import { blogData2 } from "@/data/Data";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSlider2 = () => {
  return (
    <section className="rv-2-blogs rv-section-spacing" id="blog">
      <div className="container">
        <div className="rv-2-section-heading">
          <h2 className="rv-2-section-title rv-text-anime">
            Latest News & Blog
          </h2>

          <DivAnimateXAxis
            className="rv-1-slider-nav rv-2-slider-nav"
            id="rv-2-blogs__slider-nav"
            position={-60}
          >
            <button className="prev">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button className="next">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </DivAnimateXAxis>
        </div>

        <Swiper
          className="rv-2-blogs__slider"
          slidesPerView={3}
          spaceBetween={15}
          autoplay={true}
          navigation={{
            nextEl: "#rv-2-blogs__slider-nav .next",
            prevEl: "#rv-2-blogs__slider-nav .prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              centeredSlides: true,
              slidesPerView: 1.5,
              loop: true,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {blogData2.map((item) => (
            <SwiperSlide key={item.id}>
              <DivAnimateYAxis
                className="rv-2-blog"
                duration={1.2 + 0.1 * item.id}
              >
                <ul className="rv-2-blog__infos">
                  <li className="rv-2-blog__info rv-2-blog__cat">
                    {item.category}
                  </li>
                  <li className="rv-2-blog__info">{item.date}</li>
                </ul>
                <h4 className="rv-2-blog__title">
                  <a href="#">{item.title}</a>
                </h4>

                <p className="rv-2-blog__descr">
                  Sed finibus amet dolor maximus sodales egestas ut elit id
                  sollicitudin.
                </p>
                <a href="#" className="rv-1-schedule-conf__btn rv-2-honor__btn">
                  Read More <i className="fa-light fa-arrow-right"></i>
                </a>
              </DivAnimateYAxis>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSlider2;
