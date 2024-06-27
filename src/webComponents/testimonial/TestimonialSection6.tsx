"use client";
import { logoData, testimonialData4 } from "@/data/Data";
import React, { useState } from "react";
import { Autoplay, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TestimonialSection6 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className="rv-22-testimonial_section">
      <DivAnimateYAxis position={40} visible className="container">
        <div className="row rv-22-testimonial  align-items-center">
          <div className="col-lg-4">
            <Swiper
              className="rv-22-testimonial_image_slide"
              slidesPerView={2}
              loop={true}
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
            >
              {testimonialData4.map((item) => (
                <SwiperSlide
                  className="rv-22-single_testimonial_image"
                  key={item.id}
                >
                  <img src={item.img} alt="image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-8">
            <Swiper
              className="rv-22-single_testimonial_content_slide"
              slidesPerView={1}
              loop={true}
              spaceBetween={50}
              pagination={{
                el: ".rv-22-testimonial-pagination",
                clickable: true,
              }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Pagination, Thumbs]}
            >
              {testimonialData4.map((item) => (
                <SwiperSlide className="rv-22-single_testimonial" key={item.id}>
                  <div className="rv-22-single_testimonial_content">
                    <div className="rv-22-single_testimonial_rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="rv-22-single_testimonial_text_area">
                      <span>Suspendisse dictum nisl sed sem</span> aliquam
                      convallis. Proin dictum ipsum quis mauris vulputate, quis
                      commodo ligula auctor. Duis lobortis est amet mollis
                      Aliquam dignissim, nisl at aliquet Suspendisse in
                      consectetur justo Maecenas sit amet metus faucibus,
                      maximus ligula at.
                    </p>
                    <div className="rv-22-single_testimonial_bottom">
                      <div className="rv-22-testimonial_author_meta">
                        <h3 className="rv-22-testimonial_author_name">
                          <a href="#">{item.name}</a>
                        </h3>
                        <p className="rv-22-testimonial_author_designation">
                          {item.testimony}
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="home-8-t-sh">
                    <img
                      src="assets/img/testimonial/home-8-testimonial-sh-1.png"
                      alt="image"
                    />
                  </span>
                </SwiperSlide>
              ))}

              <div className="rv-22-testimonial-pagination"></div>
            </Swiper>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Swiper
              className="rv-22-logo_slide"
              slidesPerView={6}
              spaceBetween={138}
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 60,
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 80,
                },
                576: {
                  slidesPerView: 3,
                  spaceBetween: 90,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 100,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 80,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 100,
                },
              }}
              modules={[Autoplay]}
            >
              {logoData.map((logo, index) => (
                <SwiperSlide className="rv-22-single_logo" key={index}>
                  <img src={logo} alt="image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </DivAnimateYAxis>
    </section>
  );
};

export default TestimonialSection6;
