import Gallery from "@/webComponents/gallery/GalleryGroup";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/webComponents/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJC Gallery",
  description: "Gallery of National Judicial Council",
};
export default function Home({ params }: { params: { id: number } }) {
  return (
    <main className="rv-14-home">
      <InnerLayout>
        <BreadcrumbSection title="Gallery" currentPage="Gallery" />
          <div className="mt-10">
          <Gallery params={params} />
          </div>
      </InnerLayout>
    </main>
  );
}
