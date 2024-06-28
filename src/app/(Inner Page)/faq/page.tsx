import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import FaqSection from "@/webComponents/faqs/FaqSection";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revel Blog Page",
  description: "Developed by Azizur Rahman",
};
export default function Home() {
  return (
    <main className="rv-14-home">
      <InnerLayout>
        <BreadcrumbSection title="FREQUENTLY ASKED QUESTIONS" currentPage="Faq" />
        <FaqSection />
      </InnerLayout>
    </main>
  );
}
