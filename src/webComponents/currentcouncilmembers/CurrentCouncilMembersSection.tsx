"use client";
// import { teamData5 } from "@/data/Data";
import { teamData2 } from "@/data/Data";

import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import CustomImageAnimate from "../utils/CustomImageAnimate";


const CurrentCouncilMembersSection = () => {
  return (
    <section className="rv-inner-team rv-section-spacing rv-team-members-section">
      <div className="container">
        <div className="rv-inner-team-row" data-aos="fade-up">
          <div className="row row-cols-lg-3 row-cols-2 row-cols-xxs-1 g-30">
            {teamData2.map((item) => (
              <div className="col" key={item.id}>
                <div className="rv-9-member rv-inner-member">
                  <div className="rv-9-member__img">
                    <CustomImageAnimate src={item.img} alt="Project Image" />
                  </div>

                  <div className="rv-9-member__txt">
                    <span className="rv-3-project__sub-title">
                      {item.subTitle}
                    </span>

                    <h5 className="rv-3-project__title">
                      <a href="#">{item.title}</a>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentCouncilMembersSection;
