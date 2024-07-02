"use client";
import { teamData5 } from "@/data/Data";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
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
const TeamSection5: React.FC<TeamSection6Props> = ({ data, councilMember }) => {
    let url = '';
  if (data == "Current Council Members") {
    url ="/currentcouncilmember-details/"
  } else {
    url="/managementstaff-details/"
  }
  return (
    <section className="rv-8-team rv-section-spacing">
      <div className="container">
        <div className="rv-3-section-heading">
          <div className="rv-3-section-heading__left">
            {/* <h6 className="rv-8-section__sub-title rv-text-anime">{data}</h6> */}
            <h2 className="rv-8-section__title rv-text-anime" style={{color:"#00A659"}}>
             {data}
            
            </h2>
          </div>

          <div className="rv-3-section-heading__right">
            <DivAnimateXAxis
              className="rv-1-slider-nav rv-8-slider-nav"
              id="rv-8-team-slider-nav"
            >
              <button className="prev">
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button className="next">
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </DivAnimateXAxis>
          </div>
        </div>
        <DivAnimateYAxis>
          <Swiper
            className="rv-8-team__slider"
            autoplay={true}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              prevEl: "#rv-8-team-slider-nav .prev",
              nextEl: "#rv-8-team-slider-nav .next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                spaceBetween: 20,
              },
              1400: {
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            {councilMember && councilMember.map((item) => (
              <SwiperSlide className="rv-8-member rv-1-speaker" key={item.id}>
                <div className="rv-8-member__img">
                  <img src={process.env.NEXT_PUBLIC_UPLOAD_URL +item.picture} alt="Project Image" />
                  <div className="rv-1-speaker__socials">
                    {/* {item.socials.map((social, index) => (
                      <Link href={social.url} key={index}>
                        <i className={social.icon}></i>
                      </Link>
                    ))} */}
                  </div>
                </div>

                <div className="rv-8-member__txt">
                  <span className="rv-3-project__sub-title">
                    {item.designation}
                  </span>
                  <h5 className="rv-3-project__title">
                    <Link href="#">{item.fullname}</Link>
                  </h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default TeamSection5;
