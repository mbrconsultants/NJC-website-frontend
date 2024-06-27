import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const AboutSection6 = () => {
  return (
    <section className="rv-18-about_section">
      <div className="container">
        <DivAnimateYAxis
          position={40}
          className="row align-items-center rv4_rgap"
        >
          <div className="col-lg-6">
            <div className="rv-18-about_image">
              <img src="assets/img/about/home-4-about-1.png" alt="image" />
              <img src="assets/img/about/home-4-about-2.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rv-18-about_content">
              <h2 className="rv-18-about_content_heading rv-text-anime">
                Radiant Sparkle & Beyond Cleanliness.
                <span className="position-absolute">
                  <img
                    src="assets/img/slider/home-4-banner-sh.png"
                    alt="image"
                  />
                </span>
              </h2>

              <p className="rv-18-about_content_desc">
                Ut a enim aliquam, vehicula sem at, luctus risus ultrices
                molestie auctor ornare scelerisque odio rhoncus at.
              </p>

              <div className="rv-18-about_list_item ">
                <div className="rv-18-about_list_number">
                  <span>1</span>
                </div>
                <div className="rv-18-about_list_content">
                  <h4>Certified & Awards winner</h4>
                  <p>
                    Suspendisse potenti Curabitur in vestibulum posuere sagittis
                    turpis.
                  </p>
                </div>
              </div>
              <div className="rv-18-about_list_item">
                <div className="rv-18-about_list_number">
                  <span>2</span>
                </div>
                <div className="rv-18-about_list_content">
                  <h4>Certified & Awards winner</h4>
                  <p>
                    Suspendisse potenti Curabitur in vestibulum posuere sagittis
                    turpis.
                  </p>
                </div>
              </div>
              <a href="#" className="rv-18-about_btn">
                Read More Service
              </a>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
      <span className="rv-18-car_img">
        <img src="assets/img/about/home-4-about-3.png" alt="image" />
      </span>
    </section>
  );
};

export default AboutSection6;
