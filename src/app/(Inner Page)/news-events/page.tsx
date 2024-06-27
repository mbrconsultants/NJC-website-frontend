import AllBlogSection from "@/webComponents/blog/AllBlogSection";
import BreadcrumbSection from "@/webComponents/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/webComponents/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJC News and Events",
  description: "Recents news and events of National Judicial Council",
};
export default function Home() {
  return (
    <main className="rv-14-home">
      <InnerLayout>
        <BreadcrumbSection title="News And Events" currentPage="News and Events" />
        <AllBlogSection />
      </InnerLayout>
    </main>
  );
}
