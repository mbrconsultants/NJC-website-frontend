"use client";
import React, { useEffect, useRef, useState } from "react";
import NavSection from "../navigation/NavSection";
import Link from "next/link";

const HeaderSection8 = () => {
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
    <header
      className={`rv-10-header rv-1-header to-be-fixed ${
        isHeaderFixed ? "fixed" : ""
      } p-0`}
    >
      <div className="rv-7-header-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-3 col-sm-6 col-8">
              <div className="rv-22-header-left">
                <div className="rv-8-header__logo">
                  <Link href="/">
                    <img src="assets/img/rv-22-logo.png" alt="Logo" />
                  </Link>
                </div>

                <div className="rv-5-about__call rv-22-header__call">
                  <span className="rv-5-about__call-icon d-none d-xl-inline-block">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div className="rv-5-about__call-txt">
                    <h6>Need Help?</h6>
                    <Link href="tel:123654564388">(123) 654 - 5643 88</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
              <div
                className={`rv-1-header-nav__sidebar ${
                  isSidebarOpen ? "active" : ""
                }`}
                ref={sidebarRef}
              >
                <div className="sidebar-heading d-lg-none d-flex align-items-center justify-content-between">
                  <Link href="/" className="logo-container">
                    <img src="assets/img/rv-22-logo.png" alt="logo" />
                  </Link>
                  <button
                    className="rv-3-def-btn rv-1-header-mobile-menu-btn rv-22-mobile-menu-btn sidebar-close-btn"
                    onClick={closeSidebar}
                  >
                    <i className="fa-regular fa-xmark"></i>
                  </button>
                </div>

                <NavSection style="rv-1-header__nav rv-22-header__nav" />
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-4 order-1">
              <div className="rv-7-header-bottom-right rv-22-header-bottom-right">
                <button className="rv-5-search-btn rv-search-modal-open-btn">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </button>
                <a
                  href="#"
                  className="rv-3-def-btn rv-7-def-btn rv-22-def-btn d-xs-none"
                >
                  Book Now
                </a>
                <button
                  className="rv-1-header-mobile-menu-btn rv-3-def-btn rv-22-mobile-menu-btn d-lg-none d-inline-block"
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

export default HeaderSection8;
