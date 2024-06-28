"use client"
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import HeaderSection7 from "@/components/header/HeaderSection7";
import BannerSection8 from "@/webComponents/banner/BannerSection8";
import AboutSection6 from "@/components/about/AboutSection6";
import ServiceSection6 from "@/components/service/ServiceSection6";
import ServiceSection5 from "@/webComponents/service/ServiceSection5";
import FunctionSection from "@/components/function/FunctionSection";
import PricingSection4 from "@/components/pricing/PricingSection4";
import TestimonialSection5 from "@/webComponents/testimonial/TestimonialSection5";
import TeamSection6 from "@/webComponents/team/TeamSection6";
import CompareSection from "@/components/compare/CompareSection";
import ContactSection4 from "@/components/contact/ContactSection4";
import BlogSection6 from "@/components/blog/BlogSection6";
import FooterSection4 from "@/components/footer/FooterSection4";
import AboutSection5 from "@/components/about/AboutSection5";
import endpoint from "../../context/endpoint"

// export const metadata: Metadata = {
//   title: "NJC - National Judiciary Council",
//   description: "National Judiciary Council, Abuja, Nigeria",
// };

export default function Home() {
const [data, setdata] = useState();
const [mainSlider, setMainSlider] = useState([]);
const [chiefJudge, setChiefJudge] = useState<any>();
 const [mission, setMission] = useState<{ id: number; msg: string }>({
    id: 0,
    msg: "",
  });
  const [vision, setVision] = useState<{ id: number; msg: string }>({
    id: 0,
    msg: "",
  });
  const [councilMember, setCouncilMember] = useState<any>();
  const [managementStaffs, setManagementStaffs] = useState<any>();

  




  const homePageData = async () => {
    try {
      const res = await endpoint.get("/home-content");
      console.log('====================================');
      console.log( res.data.data);
      console.log('====================================');
      setdata(res.data.data);
      setMainSlider(res.data.data.mainSlider);
      setChiefJudge(res.data.data.chiarmanPicture);
      setVision(res.data.data.vission)
      setMission(res.data.data.mission)
      setCouncilMember(res.data.data.getcouncilMember)
      setManagementStaffs(res.data.data.getManagementStaff)

    } catch (err) {
      console.log(err);
  };
  }
  

  useEffect(() => {
    homePageData();
  }, []);
  return (
    <main className="overflow-x-hidden car-wash-demo">
      <HeaderSection7 />
      <BannerSection8 mainSlider={ mainSlider} />
     {chiefJudge && <TestimonialSection5 chiefJudge={ chiefJudge} />} 
      
      <ServiceSection5  mission={mission} vission={vision} />
      <FunctionSection />
      
      <TeamSection6 data={ "Current Council Members"} councilMember={councilMember} />
      <TeamSection6 data={ "Management Staffs"} councilMember={managementStaffs}  />

      <AboutSection5 />


      {/* <AboutSection6 /> */}
      {/* <ServiceSection6 /> */}
      {/* <PricingSection4 /> */}
      {/* <CompareSection /> */}
      <ContactSection4 />
      <BlogSection6 />
      <FooterSection4
        style="rv-18-footer"
        logo="assets/img/rv-18-logo-light.png"
      />
    </main>
  );
}
