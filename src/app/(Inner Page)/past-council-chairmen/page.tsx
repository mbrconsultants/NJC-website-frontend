import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";
import JusticeTable from "@/webComponents/pastCouncilChairmen/JusticeTable";
import React from "react";

export const metadata: Metadata = {
  title: "Past Council Chairman",
  description: "MBR",
};

export default function Home() {
  return (
    <main className="rv-14-body service-inner-page">
      <InnerLayout>
        <BreadcrumbSection title="Past Council Chairman" />
        <JusticeTable />
        {/* <CtaSection inner /> */}
      </InnerLayout>
    </main>
  );
}
