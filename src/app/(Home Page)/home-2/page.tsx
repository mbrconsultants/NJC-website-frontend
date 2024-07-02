"use client"
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import endpoint from "../../../context/endpoint";

// Dynamic imports with ssr: false for all imported components
const HeaderSection7 = dynamic(() => import('@/components/header/HeaderSection7'), { ssr: false });
const BannerSection8 = dynamic(() => import('@/webComponents/banner/BannerSection8'), { ssr: false });
const AboutSection6 = dynamic(() => import('@/components/about/AboutSection6'), { ssr: false });
const ServiceSection6 = dynamic(() => import('@/components/service/ServiceSection6'), { ssr: false });
const ServiceSection5 = dynamic(() => import('@/webComponents/service/ServiceSection5'), { ssr: false });
const FunctionSection = dynamic(() => import('@/components/function/FunctionSection'), { ssr: false });
const PricingSection4 = dynamic(() => import('@/components/pricing/PricingSection4'), { ssr: false });
const TestimonialSection5 = dynamic(() => import('@/webComponents/testimonial/TestimonialSection5'), { ssr: false });
const TeamSection6 = dynamic(() => import('@/webComponents/team/TeamSection6'), { ssr: false });
const TeamSection7 = dynamic(() => import('@/webComponents/team/TeamSection7'), { ssr: false });
const CompareSection = dynamic(() => import('@/components/compare/CompareSection'), { ssr: false });
const ContactSection4 = dynamic(() => import('@/webComponents/contact/ContactSection4'), { ssr: false });
const BlogSection6 = dynamic(() => import('@/components/blog/BlogSection6'), { ssr: false });
const FooterSection4 = dynamic(() => import('@/components/footer/FooterSection4'), { ssr: false });
const AboutSection5 = dynamic(() => import('@/webComponents/about/AboutSection5'), { ssr: false });

// export const metadata: Metadata = {
//   title: "NJC - National Judiciary Council",
//   description: "National Judiciary Council, Abuja, Nigeria",
// };

export default function Home() {
  const [data, setData] = useState();
  const [gallery, setGallery] = useState([]);
  const [mainSlider, setMainSlider] = useState([]);
  const [chiefJudge, setChiefJudge] = useState<any>();
  const [mission, setMission] = useState<{ id: number; msg: string }>({ id: 0, msg: "" });
  const [vision, setVision] = useState<{ id: number; msg: string }>({ id: 0, msg: "" });
  const [councilMember, setCouncilMember] = useState<any>();
  const [managementStaffs, setManagementStaffs] = useState<any>();
  const [getNjcProfile, setNjcProfile] = useState<{ id: number; summary: string }>({ id: 0, summary: "" });

  const homePageData = async () => {
    try {
      const res = await endpoint.get("/home-content");
      setData(res.data.data);
      setMainSlider(res.data.data.mainSlider);
      setChiefJudge(res.data.data.chiarmanPicture);
      setVision(res.data.data.vission);
      setMission(res.data.data.mission);
      setCouncilMember(res.data.data.getcouncilMember);
      setManagementStaffs(res.data.data.getManagementStaff);
      setNjcProfile(res.data.data.getNjcProfile);
    } catch (err) {
      console.log(err);
    }
  };
  
  const getGalleryImages = async () => {
    try {
      const res = await endpoint.get("/gallery");
      setGallery(res.data.data.getGalleries);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      homePageData();
      getGalleryImages();
      console.log('Running in the browser');
    } else {
      console.log("running in server");
    }
  }, []);

  return (
    <main className="overflow-x-hidden car-wash-demo">
      <HeaderSection7 />
      <BannerSection8 mainSlider={mainSlider} />
      {chiefJudge && <TestimonialSection5 chiefJudge={chiefJudge} getNjcProfile={getNjcProfile} />}
      <ServiceSection5 mission={mission} vission={vision} />
      <FunctionSection />
      <TeamSection7 data={"Current Council Members"} councilMember={councilMember} />
      <TeamSection7 data={"Management Staffs"} councilMember={managementStaffs} />
      <AboutSection5 mainSlider={gallery} />
      <ContactSection4 />
      <BlogSection6 />
      <FooterSection4 style="rv-18-footer" logo="assets/img/rv-18-logo-light.png" />
    </main>
  );
}
