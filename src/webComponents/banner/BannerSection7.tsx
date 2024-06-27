import React from "react";

const BannerSection7 = () => {
  return (
    <section className="rv-8-banner">
      <div className="container">
        <div className="row align-items-end justify-content-between">
          <div className="col-xxl-6 col-lg-6">
            <div className="rv-8-banner__txt">
              <h6 className="rv-8-section__sub-title rv-8-banner__sub-title rv-text-anime">
                Cleaner Company
              </h6>

              <h1 className="rv-8-banner__title rv-text-anime">
                Create a Clean Space Comparable to Mine.
              </h1>

              <p className="rv-8-banner__descr rv-text-anime">
                Ut a enim aliquam, vehicula sem at, luctus risus. Vestibulum
                ultrices molestie auctor ornare scelerisque odio rhoncus at.
              </p>
              <a href="#" className="rv-3-def-btn rv-8-def-btn">
                Our Best Offers
              </a>
            </div>
          </div>

          <div className="col-xxl-2 col-lg-1">
            <div className="rv-8-banner__img">
              <img src="assets/img/rv-8-banner-img.png" alt="Banner Vector" />
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <div className="rv-8-banner__form-area">
              <h5 className="rv-text-anime">Request a Free Quate</h5>
              <form action="#" className="rv-8-banner__form">
                <input
                  type="text"
                  name="name"
                  id="rv-8-form__phone-number"
                  placeholder="Your Name"
                />
                <input
                  type="tel"
                  name="number"
                  id="rv-8-form__name"
                  placeholder="Phone Number"
                />
                <select name="service-type" id="rv-8-form__service-type">
                  <option value="none" hidden>
                    Select Service Type
                  </option>
                  <option value="residential-cleaning">
                    Residential Cleaning
                  </option>
                  <option value="construction-cleaning">
                    Construction Cleaning
                  </option>
                  <option value="landscape-cleaning">Landscape Cleaning</option>
                  <option value="commercial-cleaning">
                    Commercial Cleaning
                  </option>
                </select>
                <input type="date" name="date" id="rv-8-form__date" />
                <input
                  type="number"
                  name="zip-code"
                  id="rv-8-form__zip-code"
                  placeholder="Zip Code"
                />
                <button type="submit" className="rv-3-def-btn">
                  Get a Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="rv-8-banner__vectors">
        <img
          src="assets/img/rv-8-vector-1.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--1"
        />
        <img
          src="assets/img/rv-8-vector-2.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--2"
        />
        <img
          src="assets/img/rv-8-vector-3.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--3"
        />
      </div>
    </section>
  );
};

export default BannerSection7;
