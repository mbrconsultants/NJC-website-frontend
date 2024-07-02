"use client";

import React, { useState, useEffect } from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import endpoint from "../../context/endpoint";

interface GalleryCoverImg {
  galleryID: number;
  groupID: number;
  image_description: string;
  image_link: string;
  date_posted: string;
}

interface GalleryItem {
  GalleryCoverImg: GalleryCoverImg;
}

interface GallerySectionProps {
  params: { id: number };
}

const GallerySection4: React.FC<GallerySectionProps> = ({ params }) => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const getData = async () => {
    try {
      const res = await endpoint.get(`/gallery-details/${params.id}`);
      console.log('===============group picture=====================');
      console.log(res.data.data);
      console.log('====================================');
      if (Array.isArray(res.data.data.getAllgroupPicture)) {
        setGallery(res.data.data.getAllgroupPicture.map((item: GalleryCoverImg) => ({ GalleryCoverImg: item })));
      } else {
        console.error("API response is not an array");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  const truncateTitle = (title: string, wordLimit: number) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <section className="rv-9-gallery">
      <div className="row">
        <div className="col-md-12">
          <DivAnimateYAxis position={30} visible>
            <div className="row justify-content-center row-cols-lg-5 row-cols-sm-3 row-cols-2 rv-inner-gallery-row">
              {gallery.map((item, index) => (
                <div className="col mb-4" key={item.GalleryCoverImg.galleryID}>
                  <div className="rv-9-gallery__img">
                    <a
                      href={`#`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={process.env.NEXT_PUBLIC_UPLOAD_URL + item.GalleryCoverImg.image_link}
                        alt={`Gallery-${index + 1}`}
                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                      />
                    </a>
                    <p className="mt-2">{truncateTitle(item.GalleryCoverImg.image_description, 8)}</p>
                  </div>
                </div>
              ))}
            </div>
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default GallerySection4;
