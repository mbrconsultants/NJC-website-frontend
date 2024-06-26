import React from "react";
import { Metadata } from "next";
import HeaderSection7 from "@/components/header/HeaderSection7";
import BannerSection8 from "@/components/banner/BannerSection8";
import AboutSection6 from "@/components/about/AboutSection6";
import ServiceSection6 from "@/components/service/ServiceSection6";
import ServiceSection5 from "@/components/service/ServiceSection5";
import FunctionSection from "@/components/function/FunctionSection";
import PricingSection4 from "@/components/pricing/PricingSection4";
import TestimonialSection5 from "@/components/testimonial/TestimonialSection5";
import TeamSection6 from "@/components/team/TeamSection6";
import CompareSection from "@/components/compare/CompareSection";
import ContactSection4 from "@/components/contact/ContactSection4";
import BlogSection6 from "@/components/blog/BlogSection6";
import FooterSection4 from "@/components/footer/FooterSection4";
import AboutSection5 from "@/components/about/AboutSection5";

export const metadata: Metadata = {
  title: "NJC - National Judiciary Council",
  description: "National Judiciary Council, Abuja, Nigeria",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden car-wash-demo">
      <HeaderSection7 />
      <BannerSection8 />
      <TestimonialSection5 />
      
      <ServiceSection5 />
      <FunctionSection />
      
      <TeamSection6 data={ "Current Council Members"} />
      <TeamSection6 data={ "Management Staffs"} />

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
