import { galleryData3 } from "@/data/Data";
import React from "react";

const GallerySection2 = () => {
  return (
    <section className="rv-9-gallery rv-13-gallery rv-inner-gallery">
      <div className="row justify-content-center row-cols-lg-5 row-cols-sm-3 row-cols-2 rv-inner-gallery-row">
        {galleryData3.map((image, index) => (
          <div className="col" key={index}>
            <div className="rv-13-gallery__img">
              <img src={image} alt={`Gallery-${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="rv-9-gallery__sticker rv-13-gallery__sticker">
        <h4 className="title">Instagram</h4>
        <h6 className="sub-title">Follow Us on</h6>
      </div>
    </section>
  );
};

export default GallerySection2;
