import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
// import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
// import ServiceSection2 from "@/components//service/ServiceSection2";
import ServiceDetails from "@/webComponents/disciplineRegulations/ServiceDetails";
import { Metadata } from "next";
type Props = {
  img: string;
  title: string;
};

export const metadata: Metadata = {
  title: "NJC Discipline Regulations",
  description: "MBR",
};
export default function Home() {
  return (
    <main className="rv-14-body service-inner-page">
      <InnerLayout>
        <BreadcrumbSection title="Discipline Regulations" />
        <ServiceDetails img={""} title={""} />
        {/* <ServiceSection2 /> */}
        {/* <CtaSection inner /> */}
      </InnerLayout>
    </main>
  );
}
