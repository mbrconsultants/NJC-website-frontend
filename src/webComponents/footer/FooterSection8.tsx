import Link from "next/link";
import React from "react";

const FooterSection8 = () => {
  return (
    <footer className="rv-1-footer rv-22-footer">
      <div className="container">
        <div className="rv-1-footer-top rv-6-footer-top">
          <div className="row gy-4 gy-sm-5 rv-6-footer-top__row">
            <div className="col-xl-3 col-lg-10">
              <div className="rv-1-footer__about">
                <Link href="/">
                  <img
                    src="assets/img/rv-22-logo-light.png"
                    alt="Logo"
                    className="logo"
                  />
                </Link>
                <p className="rv-1-footer__about-txt">
                  Morbi pharetra, eros sed euismod pellentesque, nulla risus
                  lobortis purus, quis maximus.
                </p>
                <form
                  action="#"
                  className="rv-6-footer-nwsltr__form  rv-8-footer-nwsltr__form rv-9-footer-nwsltr__form rv-22-footer-nwsltr__form"
                >
                  <div className="nwsltr-top">
                    <input
                      type="email"
                      name="email"
                      id="rv-8-subs-form"
                      placeholder="Enter your Email..."
                      required
                    />
                    <button>
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-xl-5 col-lg-10">
              <div className="row gy-4">
                <div className="col-6 col-xxs-12">
                  <div className="rv-1-footer-widget rv-22-footer-widget">
                    <h5 className="rv-1-footer-widget__title">Our Stores</h5>
                    <ul className="rv-6-footer-widget__links">
                      <li>
                        <a href="#">New York</a>
                      </li>
                      <li>
                        <a href="#">London SF</a>
                      </li>
                      <li>
                        <a href="#">Cockfosters BP</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-xxs-12">
                  <div className="rv-1-footer-widget rv-22-footer-widget">
                    <h5 className="rv-1-footer-widget__title">Contact us</h5>
                    <ul className="rv-1-footer-widget__infos">
                      <li>
                        <img src="assets/img/rv-1-icon-6.png" alt="icon" /> 24th
                        St, Three Arm Zone, Abuja Nigeria NY
                      </li>
                      <li>
                        <img src="assets/img/rv-1-icon-7.png" alt="icon" />{" "}
                        <a href="tel:+12365858988">+123 658 589 88</a>
                      </li>
                      <li>
                        <img src="assets/img/rv-1-icon-8.png" alt="icon" />{" "}
                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-10">
              <div className="rv-1-footer-widget">
                <h5 className="rv-1-footer-widget__title">Instagram</h5>
                <div className="row g-3">
                  <div className="col-xl-4 col-sm-2 col-3">
                    <a
                      className="rv-22-footer-gallery-item my-video-links"
                      href="assets/img/rv-22-footer-gallery-1.png"
                    >
                      <img
                        src="assets/img/rv-22-footer-gallery-1.png"
                        alt="Gallery Image"
                      />
                    </a>
                  </div>
                  <div className="col-xl-4 col-sm-2 col-3">
                    <a
                      className="rv-22-footer-gallery-item my-video-links"
                      href="assets/img/rv-22-footer-gallery-2.png"
                    >
                      <img
                        src="assets/img/rv-22-footer-gallery-2.png"
                        alt="Gallery Image"
                      />
                    </a>
                  </div>
                  <div className="col-xl-4 col-sm-2 col-3">
                    <a
                      className="rv-22-footer-gallery-item my-video-links"
                      href="assets/img/rv-22-footer-gallery-3.png"
                    >
                      <img
                        src="assets/img/rv-22-footer-gallery-3.png"
                        alt="Gallery Image"
                      />
                    </a>
                  </div>
                  <div className="col-xl-4 col-sm-2 col-3">
                    <a
                      className="rv-22-footer-gallery-item my-video-links"
                      href="assets/img/rv-22-footer-gallery-4.png"
                    >
                      <img
                        src="assets/img/rv-22-footer-gallery-4.png"
                        alt="Gallery Image"
                      />
                    </a>
                  </div>
                  <div className="col-xl-4 col-sm-2 col-3">
                    <a
                      className="rv-22-footer-gallery-item my-video-links"
                      href="assets/img/rv-22-footer-gallery-5.png"
                    >
                      <img
                        src="assets/img/rv-22-footer-gallery-5.png"
                        alt="Gallery Image"
                      />
                    </a>
                  </div>
                  <div className="col-xl-4 col-sm-2 col-3">
                    <a
                      className="rv-22-footer-gallery-item my-video-links"
                      href="assets/img/rv-22-footer-gallery-6.png"
                    >
                      <img
                        src="assets/img/rv-22-footer-gallery-6.png"
                        alt="Gallery Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rv-2-footer rv-6-footer-bottom">
          <div className="row gy-4 align-items-center">
            <div className="col-md-6">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} Codebasket All Rights Reserved
                by site
              </p>
            </div>

            <div className="col-md-6">
              <div className="rv-1-socials rv-22-socials justify-content-center justify-content-md-end">
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection8;
