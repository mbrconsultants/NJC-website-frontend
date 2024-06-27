import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const AboutSection7 = () => {
  return (
    <section className="rv-22-about_main_area">
      <div className="container">
        <DivAnimateYAxis position={40} className="row align-items-center">
          <div className="col-lg-5">
            <div className="rv-22-about_image">
              <img src="assets/img/about/home-8-about-1.png" alt="image" />
              <img src="assets/img/about/home-8-about-2.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="rv-22-about_content">
              <h4 className="rv-22-about_content_sub_title rv-text-anime">
                OUR INTRODUCTION <span className="rv8_sub_pre_nex"></span>
              </h4>

              <h2 className="rv-22-about_content_title rv-text-anime">
                Dive into a Complete Menu of Deluxe Services.
              </h2>

              <p className="rv-22-about_content_desc">
                Fusce egestas viverra libero eu elementum. Maecenas sit amet
                lorem nec eros ullamcorper Vivamus finibus lacinia erat,
                tristique ligula odio maximus ultricies fermentum egestas.
              </p>

              <div className="rv-22-about_list_area">
                <div className="rv-22-about_list">
                  <i className="far fa-check"></i>
                  <p>Donec convallis vestibulum eget pharetra.</p>
                </div>
                <div className="rv-22-about_list">
                  <i className="far fa-check"></i>
                  <p>Donec convallis vestibulum eget pharetra.</p>
                </div>
                <div className="rv-22-about_list">
                  <i className="far fa-check"></i>
                  <p>Donec convallis vestibulum eget pharetra.</p>
                </div>
              </div>

              <a href="#" className="rv-22-about_btn">
                Learn More
              </a>

              <span className="home-8-about-sh-2">
                <img src="assets/img/about/home-8-about-sh-2.png" alt="image" />
              </span>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
      <span className="home-8-about-sh-1">
        <img src="assets/img/about/home-8-about-sh-1.png" alt="image" />
      </span>
    </section>
  );
};

export default AboutSection7;
