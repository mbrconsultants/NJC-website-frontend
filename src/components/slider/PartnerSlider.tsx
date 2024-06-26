"use client";
import { partnerImages } from "@/data/Data";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const PartnerSlider = () => {
  return (
    <motion.section
      className="rv-5-partners"
      initial={{
        y: 40,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="container">
        <Swiper
          className="rv-5-partners__slider"
          autoplay={true}
          spaceBetween={30}
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              spaceBetween: 120,
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay]}
        >
          {partnerImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="Partner Logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default PartnerSlider;
