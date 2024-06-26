import React from "react";
import { Metadata } from "next";
import HeaderSection8 from "@/components/header/HeaderSection8";
import BannerSection9 from "@/components/banner/BannerSection9";
import AboutSection7 from "@/components/about/AboutSection7";
import TeamSection7 from "@/components/team/TeamSection7";
import CtaSection2 from "@/components/cta/CtaSection2";
import TestimonialSection6 from "@/components/testimonial/TestimonialSection6";
import BlogSection7 from "@/components/blog/BlogSection7";
import ContactSection5 from "@/components/contact/ContactSection5";
import FooterSection8 from "@/components/footer/FooterSection8";
import ServiceSection7 from "@/components/service/ServiceSection7";

export const metadata: Metadata = {
  title: "Servio - Barber Shop",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-22-body">
      <HeaderSection8 />
      <BannerSection9 />
      <AboutSection7 />
      <ServiceSection7 />
      <TeamSection7 />
      <CtaSection2 />
      <TestimonialSection6 />
      <BlogSection7 />
      <ContactSection5 />
      <FooterSection8 />
    </main>
  );
}
