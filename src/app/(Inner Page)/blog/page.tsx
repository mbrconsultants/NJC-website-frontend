// import AllBlogSection from "@/components/blog/AllBlogSection";
// import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJC templates",
  description: "NJC Logo",
};
export default function Home() {
  return (
    <main className="rv-14-home">
          <InnerLayout>
              <div></div>
        {/* <BreadcrumbSection title="News And Blog" currentPage="Blog" />
        <AllBlogSection /> */}
      </InnerLayout>
    </main>
  );
}
