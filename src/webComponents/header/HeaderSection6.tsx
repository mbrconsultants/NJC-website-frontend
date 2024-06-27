"use client";
import React, { useEffect, useRef, useState } from "react";
import NavSection from "../navigation/NavSection";
import Link from "next/link";

const HeaderSection6 = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
    setIsHeaderFixed(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);
  return (
    <header className="rv-8-header rv-1-header p-0">
      <div className="rv-7-header-top rv-8-header-top">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-5">
              <div className="rv-8-header-top__txt rv-7-header-top__actions rv-8-header-top__infos mb-0">
                <div className="rv-8-header-socials">
                  <h6>Follow Us:</h6>
                  <Link href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-pinterest"></i>
                  </Link>
                </div>

                <h6 className="rv-8-header-contact-info rv-8-header-contact-numb">
                  <i className="fa-solid fa-sharp fa-phone"></i>{" "}
                  <Link href="tel:1237775643">09-4603190</Link>
                </h6>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="rv-7-header-top__actions rv-8-header-top__infos justify-content-center justify-content-lg-end">
                <h6 className="rv-8-header-contact-info rv-8-header-contact-address">
                  <i className="fa-solid fa-location-dot"></i>Three Arm Zone, Abuja, Nigeria
                </h6>
                <h6 className="rv-8-header-contact-info rv-8-header-contact-email">
                  <i className="fa-solid fa-envelope"></i>
                  <Link href="mailto:info@njc.gov.ng">info@njc.gov.ng</Link>
                </h6>
                {/* <form action="#" className="rv-8-header-lang">
                  <select name="language" id="rv-8-lang">
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Korean">Korean</option>
                    <option value="Bangla">Bangla</option>
                  </select>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`rv-7-header-bottom to-be-fixed ${
          isHeaderFixed ? "fixed" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-6">
              <div className="rv-8-header__logo">
                <Link href="/">
                  <img src="/assets/img/njcNewLogo.jpg" alt="Logo" style={{height:"100px", width:"100px"}}/>
                </Link>
              </div>
            </div>

            <div className="col-6 order-2 order-lg-1">
              <div
                className={`rv-1-header-nav__sidebar ${
                  isSidebarOpen ? "active" : ""
                }`}
                ref={sidebarRef}
              >
                <div className="sidebar-heading d-lg-none d-flex align-items-center justify-content-between">
                  <Link href="/" className="logo-container">
                    <img src="/assets/img/njcNewLogo.jpg" alt="logo" style={{height:"50px", width:"50px"}}/>
                  </Link>
                  <button
                    className="rv-3-def-btn rv-1-header-mobile-menu-btn rv-8-mobile-menu-btn sidebar-close-btn"
                    onClick={closeSidebar}
                  >
                    <i className="fa-regular fa-xmark"></i>
                  </button>
                </div>

                <NavSection style="rv-1-header__nav rv-8-header__nav" />
              </div>
            </div>

            <div className="col-lg-3 col-6 order-1 order-lg-2">
              <div className="rv-7-header-bottom-right justify-content-end flex-row">
                {/* <div className="rv-7-header-search-modal">
                  <button className="rv-7-search-modal-close-btn">
                    <i className="fa-regular fa-xmark"></i>
                  </button>
                  <form
                    action="#"
                    className="rv-7-header-search rv-8-header-search"
                  >
                    <button type="submit">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                    <input
                      type="search"
                      name="search"
                      id="rv-7-header-search"
                      placeholder="Search Products..."
                    />
                  </form>
                </div>

                <button className="rv-7-search-modal-open-btn d-md-none d-inline-block">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </button> */}
                <button
                  className="rv-1-header-mobile-menu-btn rv-3-def-btn rv-8-mobile-menu-btn d-lg-none d-inline-block"
                  id="rv-1-header-mobile-menu-btn"
                  onClick={openSidebar}
                >
                  <i className="fa-regular fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection6;
