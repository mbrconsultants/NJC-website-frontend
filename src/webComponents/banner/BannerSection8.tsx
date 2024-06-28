"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

interface SliderItem {
  id: number;
  caption: string;
  subcaption: string;
  photo: string;
}

interface BannerSection8Props {
  mainSlider: SliderItem[];
}

const BannerSection8: React.FC<BannerSection8Props> = ({ mainSlider }) => {
 
  
  return (
    <section className="rv-18-banner_main_area position-relative mx-1 px-1 mb-2">
      <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {mainSlider.map((item, index) => (
            <button
              key={index + 1}
              type="button"
              data-bs-target="#bannerCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {mainSlider.map((item, index) => (
            <div
              key={index + 1}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ 
                backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL + item.photo})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                height: "550px" 
              }}
            >
              <div className="carousel-caption d-md-block">
                <h2 className="text-white">{item.caption}</h2>
                <p className="text-white">{item.subcaption}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default BannerSection8;
