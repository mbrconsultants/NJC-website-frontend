"use client";
import { teamData7 } from "@/data/Data";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TeamSection7 = () => {
  return (
    <section className="rv-22-teem_main_area_section">
      <div className="container">
        <div className="row">
          <div className="rv-22-teem_section_top">
            <div className="rv-22-teem_section_heading">
              <h4 className="rv-22-teem_sub_title rv-text-anime">
                Team Member<span className="rv8_sub_pre_nex"></span>
              </h4>

              <h2 className="rv-22-teem_title rv-text-anime">
                Masterful Touch From Complete Barber Team.
              </h2>
            </div>
            <DivAnimateXAxis className="rv-22-teem_slide_button_area">
              <div className="rv-22-teem-swiper-button-prev">
                <i className="fal fa-arrow-left"></i>
              </div>
              <div className="rv-22-teem-swiper-button-next">
                <i className="fal fa-arrow-right"></i>
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
        <DivAnimateYAxis>
          <Swiper
            className="rv-22-teem_area"
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            navigation={{
              nextEl: ".rv-22-teem-swiper-button-next",
              prevEl: ".rv-22-teem-swiper-button-prev",
            }}
            breakpoints={{
              320: {
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
              980: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
          >
            {teamData7.map((item) => (
              <SwiperSlide className="rv-22-single_teem" key={item.id}>
                <div className="rv-22-single_teem_image">
                  <img src={item.img} alt="image" />

                  <div className="rv-22-single_teem_member_details">
                    <span>{item.profession}</span>
                    <h4>{item.name}</h4>
                    <div className="rv-22-single_teem_member_socials">
                      {item.socials.map((social, index) => (
                        <Link href={social.url} key={index}>
                          <i className={social.icon}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default TeamSection7;
