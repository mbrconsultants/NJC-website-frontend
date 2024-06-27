"use client";
import { portfolioData } from "@/data/Data";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch } from "@/redux/hooks";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import CustomImageAnimate from "../utils/CustomImageAnimate";
const PortfolioSlider = () => {
  const dispatch = useAppDispatch();
  const openLightBox = (img: string) => {
    dispatch(toggleLightboxOpen(img));
  };
  return (
    <DivAnimateYAxis className="rv-2-portfolios-slider-container" position={80}>
      <Swiper
        className="rv-2-portfolios__slider"
        slidesPerView={3}
        spaceBetween={15}
        autoplay={true}
        pagination={{
          el: ".rv-2-swiper-dots",
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
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
        modules={[Autoplay, Pagination]}
      >
        {portfolioData.map((item) => (
          <SwiperSlide className="rv-2-porfolio" key={item.id}>
            <span className="reveal">
              <CustomImageAnimate src={item.img} alt="Portfolio Image" />
            </span>
            <a
              className="portfolio-lightbox-btn"
              role="button"
              onClick={() => openLightBox(item.img)}
            >
              <i className="fa-regular fa-plus"></i>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
      <div className="rv-2-swiper-dots"></div>
    </DivAnimateYAxis>
  );
};

export default PortfolioSlider;
