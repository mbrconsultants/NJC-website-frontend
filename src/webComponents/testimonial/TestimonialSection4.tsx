"use client";
import { partnerData2 } from "@/data/Data";
import React, { useState } from "react";
import { Autoplay, EffectFade, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TestimonialSection4 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <section className="rv-8-testimonial rv-section-spacing">
      <div className="container position-relative">
        <div className="rv-8-section__heading">
          <h6 className="rv-8-section__sub-title rv-text-anime">
            Testimonials
          </h6>

          <h2 className="rv-8-section__title rv-text-anime">
            Expert {""}
            <span className="styled">
              Cleaning
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
                />
              </svg>
            </span>
            {""} Services
          </h2>
        </div>

        <DivAnimateYAxis className="rv-6-testimonial__inner">
          <div className="rv-6-testimonial__img-slider-container">
            <Swiper
              className="rv-8-testimonial__img-slider"
              slidesPerView={1}
              effect="fade"
              spaceBetween={50}
              loop={true}
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
              modules={[EffectFade]}
            >
              <SwiperSlide className="rv-6-testimonial__img-slide">
                <img src="assets/img/rv-8-reviewer.jpg" alt="Reviewer Image" />
              </SwiperSlide>
              <SwiperSlide className="rv-6-testimonial__img-slide">
                <img
                  src="assets/img/rv-6-reviewer-2.jpg"
                  alt="Reviewer Image"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <Swiper
            className="rv-8-testimonial__txt-slider"
            autoplay={true}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            pagination={{
              el: "#rv-8-testimonial__slider-pagination",
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '"><span class="number">0' +
                  (index + 1) +
                  "</span></span>"
                );
              },
            }}
            modules={[Autoplay, Pagination, Thumbs]}
          >
            <SwiperSlide className="rv-6-testimony-txt-slide">
              <div className="rv-5-testimony__stars">
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
              </div>

              <p className="rv-6-testimony__txt">
                Suspends dictum nil sed sem aliquot convallis. dictum ipsum
                quips mauri's valuate, quips commode ligula auctor laborites est
                abet mollies Aliquot digicam aliquot Suspends connecter Justo
                Maecenas meatus Faubus, maximus ligula at.
              </p>

              <div className="rv-5-testimony-reviewer">
                <h5 className="rv-6-testimony-reviewer__name">Douglas Lyphe</h5>
                <span className="rv-5-testimony-reviewer__infos">
                  Product Designer
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide className="rv-6-testimony-txt-slide">
              <div className="rv-5-testimony__stars">
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
                <i className="fa-solid fa-sharp fa-star"></i>
              </div>

              <p className="rv-6-testimony__txt">
                Suspends dictum nil sed sem aliquot convallis. dictum ipsum
                quips mauri's valuate, quips commode ligula auctor laborites est
                abet mollies Aliquot digicam aliquot Suspends connecter Justo
                Maecenas meatus Faubus, maximus ligula at.
              </p>

              <div className="rv-5-testimony-reviewer">
                <h5 className="rv-6-testimony-reviewer__name">Kesri Devgan</h5>
                <span className="rv-5-testimony-reviewer__infos">
                  <span className="service">Event Planning</span> -
                  <span className="date">15.09.2023</span>
                </span>
              </div>
            </SwiperSlide>

            <div className="rv-6-testimonial-slider-controls">
              <div
                className="rv-8-testimonial__slider-pagination"
                id="rv-8-testimonial__slider-pagination"
              ></div>
            </div>
          </Swiper>
        </DivAnimateYAxis>

        <Swiper
          className="rv-8-partners__slider"
          autoplay={true}
          spaceBetween={20}
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 4,
            },
            992: {
              spaceBetween: 30,
              slidesPerView: 5,
            },
            1200: {
              spaceBetween: 120,
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
        >
          {partnerData2.map((partnerImg, index) => (
            <SwiperSlide key={index}>
              <img src={partnerImg} alt="Partner Logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection4;
