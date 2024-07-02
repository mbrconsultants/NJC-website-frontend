import Gallery from "@/webComponents/gallery/GallerySection4";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/webComponents/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NJC Gallery",
  description: "Gallery of National Judicial Council",
};
export default function Home() {
  return (
    <main className="rv-14-home">
      <InnerLayout>
        <BreadcrumbSection title="Gallery" currentPage="Gallery" />
        <div className="mt-10">
        <Gallery  />

        </div>
      </InnerLayout>
    </main>
  );
}
