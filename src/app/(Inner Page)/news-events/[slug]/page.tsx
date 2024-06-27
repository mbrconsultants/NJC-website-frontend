import BlogDetailSection from "@/webComponents/blog/BlogDetailSection";
import BreadcrumbSection from "@/webComponents/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/webComponents/error/ErrorSection";
import InnerLayout from "@/webComponents/layout/InnerLayout";
import { blogData4 } from "@/data/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJC recent news and event",
  description: "NJC recent news and event",
};
export default function Home({ params }: { params: { slug: string } }) {
  const blogInfo = blogData4.find((item) => item.slug === params.slug);
  return (
    <main className="rv-14-home">
      <InnerLayout>
        {blogInfo ? (
          <>
            <BreadcrumbSection title="Blog Details" />
            <BlogDetailSection
              img={blogInfo.img}
              title={blogInfo.title}
              id={blogInfo.id}
            />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}
