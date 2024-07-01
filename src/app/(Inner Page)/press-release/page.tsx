import BlogDetailSection from "@/webComponents/blog/BlogDetailSection";
import BreadcrumbSection from "@/webComponents/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/webComponents/error/ErrorSection";
import InnerLayout from "@/webComponents/layout/InnerLayout";
import PressList from "@/webComponents/press/pressList";

import { blogData4 } from "@/data/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJC recent news and event",
  description: "NJC recent news and event",
};
export default function Home({ params }: { params: { id: Number } }) {
  
  const blogInfo = blogData4.find((item) => item.id == 1);
  return (
    <main className="rv-14-home">
      <InnerLayout>
       
        {blogInfo ? (
          <>
            <BreadcrumbSection title="Press Release" />
            <div className="container">
             <PressList />
           </div>
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}
