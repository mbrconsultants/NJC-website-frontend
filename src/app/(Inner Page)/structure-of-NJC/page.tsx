import React from "react";
import { Metadata } from "next";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import StructureOfNJCSection from "@/webComponents/structure/StructureOfNJCSection";
import SpeakerSlider from "@/components/slider/SpeakerSlider";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import TeamSection5 from "@/components/team/TeamSection5";

export const metadata: Metadata = {
  title: "Revel About Page",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-14-body about-inner-page">
      <InnerLayout>
        <BreadcrumbSection title="Structure of NJC" currentPage="Structure of NJC" />
        <StructureOfNJCSection />
        {/* <TeamSection5 /> */}
        {/* <CtaSection inner /> */}
      </InnerLayout>
    </main>
  );
}
