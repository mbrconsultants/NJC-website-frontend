"use client";
import { teamData6 } from "@/data/Data";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
interface CouncilMember {
  id: number;
  designation: string;
  fullname: string;
  picture: string;
  position: string;
  rank: number;
}

interface TeamSection6Props {
  data: string;
  councilMember: CouncilMember[]
}

const TeamSection6: React.FC<TeamSection6Props> = ({ data, councilMember }) => {
    
  return (
    <section className="rv-18-teem_main_area_section">
      <div className="container">
        <div className="row">
          <div className="rv-18-teem_section_top">
            <div className="rv-18-teem_title">
              
              <h2 className="rv-18-testimonial_heading rv-text-anime">
               {data}
                <span className="position-absolute">
                  {/* <img
                    src="assets/img/slider/home-4-banner-sh.png"
                    alt="image"
                  /> */}
                </span>
              </h2>
            </div>

            <DivAnimateXAxis className="rv-18-teem_button_area">
              <div className="rv-18-teem-swiper-button-prev">
                <i className="fal fa-arrow-left"></i>
              </div>
              <div className="rv-18-teem-swiper-button-next">
                <i className="fal fa-arrow-right"></i>
              </div>
            </DivAnimateXAxis>
          </div>
          <DivAnimateYAxis>
            <Swiper
              className="rv-18-teem_area"
              slidesPerView={4}
              spaceBetween={0}
              loop={true}
              navigation={{
                nextEl: ".rv-18-teem-swiper-button-next",
                prevEl: ".rv-18-teem-swiper-button-prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                400: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
              keyboard={true}
              modules={[Navigation]}
            >
              {councilMember && councilMember.map((item) => (
                <SwiperSlide className="rv-18-single_teem" key={item.id}>
                  <div className="rv-18-single_teem_image">
                    <img src={`${process.env.NEXT_PUBLIC_UPLOAD_URL +item.picture}`} alt="image" />
                    <div className="rv-18-teem_member_socials">
                      <p className="text-white text-wrap h-5 w-10">{ item.position}</p>
                     
                    </div>
                  </div>
                  <div className="rv-18-teem_member_info">
                    <span className="rv-18-team_member_designation">
                      {item.designation}
                    </span>
                    <h4 className="rv-18-team_member_name">
                      <a href="#">{item.fullname}</a>
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default TeamSection6;
