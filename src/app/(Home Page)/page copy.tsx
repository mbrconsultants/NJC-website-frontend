import AboutSection5 from "@/components/about/AboutSection5";
import BannerSection7 from "@/components/banner/BannerSection7";
import BlogSection5 from "@/components/blog/BlogSection5";
import FooterSection7 from "@/components/footer/FooterSection7";
import FunctionSection from "@/components/function/FunctionSection";
import HeaderSection6 from "@/components/header/HeaderSection6";
import VideoModal from "@/components/modal/VideoModal";
import PricingSection3 from "@/components/pricing/PricingSection3";
import ProjectSection3 from "@/components/project/ProjectSection3";
import ServiceSection5 from "@/components/service/ServiceSection5";
import TeamSection5 from "@/components/team/TeamSection5";
import TestimonialSection4 from "@/components/testimonial/TestimonialSection4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJC - National Judicial Council",
  description: "National Judicial council of Nigeria",
};
export default function Home() {
  return (
    <main className="rv-8-body">
      <HeaderSection6 />
      <BannerSection7 />
      <ServiceSection5 />
      <AboutSection5 />
      <FunctionSection />
      <ProjectSection3 />
      <PricingSection3 />
      <TestimonialSection4 />
      <TeamSection5 />
      <BlogSection5 />
      <FooterSection7 />
      {/* Modal */}
      <VideoModal videoUrl="https://www.youtube.com/embed/XMWYZ-uZjnQ?si=xRDRQPDmbEX1Suii" />
    </main>
  );
}
