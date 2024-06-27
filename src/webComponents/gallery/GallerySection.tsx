import { galleryData2 } from "@/data/Data";
import React from "react";
import CustomImageAnimate from "../utils/CustomImageAnimate";

const GallerySection = () => {
  return (
    <section className="rv-5-gallery" data-aos="fade-up">
      <div className="row justify-content-center row-cols-md-5 row-cols-3 row-cols-xxs-2">
        {galleryData2.map((item) => (
          <div className="col" key={item.id}>
            <div className="rv-5-gallery__img">
              <a href="#">
                <i className={item.icon}></i>
                <span className="txt">{item.label}</span>
              </a>
              <CustomImageAnimate src={item.img} alt="Gallery-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
