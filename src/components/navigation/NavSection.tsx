"use client";
import React, { useState } from "react";
import Link from "next/link";
type Props = {
  style: string;
  logo?: string;
};
type DropdownState = {
  // home: boolean;
  judiciary: boolean;
  service: boolean;
  blog: boolean;
  about_NJC: boolean;
  NJC_guidelines: boolean;
  media: boolean;
};
const NavSection = ({ style, logo }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    // home: false,
    judiciary: false,
    service: false,
    about_NJC: false,
    blog: false,
    NJC_guidelines: false,
    media: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState) => {
    if (window.innerWidth < 992) {
      setDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <div className={style}>
      <ul className="justify-content-center">
        <li >
          <a
            href="/"
            className="dropdown-btn"
            role="button"
          
          >
            Home
          </a>
        </li>

        <li className={dropdown.about_NJC ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn text-xs"
            role="button"
            onClick={() => handleToggleDropdown("about_NJC")}
          >
            About NJC
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="$">Profile of NJC</Link>
            </li>
            <li>
              <Link href="#">Composition of NJC</Link>
            </li>
            <li>
              <Link href="#">Structure of NJC</Link>
            </li>{" "}
            <li>
              <Link href="#">Composition of NJC</Link>
            </li>
            <li>
              <Link href="#">Committees in NJC</Link>
            </li>
            <li>
              <Link href="#">Current Council Members</Link>
            </li>
            <li>
              <Link href="#">Management Staffs</Link>
            </li>
          </ul>
        </li>
        <li className={dropdown.judiciary ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn text-xs"
            role="button"
            onClick={() => handleToggleDropdown("judiciary")}
          >
            Judiciary
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/current-council-chairman">
                Current Council Chairman
              </Link>
            </li>
            <li>
              <Link href="/past-council-chairmen">Past Council Chairmen</Link>
            </li>
          </ul>
        </li>
        {logo && (
          <li className="d-none d-lg-block">
            <Link href="/" className="rv-5-logo">
              <img src={logo} alt="logo" />
            </Link>
          </li>
        )}

        <li className={dropdown.NJC_guidelines ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={() => handleToggleDropdown("NJC_guidelines")}
          >
            NJC Guidelines
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/njc-guidelines">
                NJC Guidelines and Procedural Rules
              </Link>
            </li>
            <li>
              <Link href="/code-of-conduct">Code of Conduct</Link>
            </li>
            <li>
              <Link href="/discipline-regulations">Discipline Regulation</Link>
            </li>
            <li>
              <Link href="/national-judicial-policy">NJC Policy</Link>
            </li>
          </ul>
        </li>
        <li className={dropdown.NJC_guidelines ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={() => handleToggleDropdown("media")}
          >
            Media
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/news-events">News and Events</Link>
            </li>
            <li>
              <Link href="/press-release">Press Release</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/video-gallery">Video Gallery</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>

        {/* <li>
          <Link href="/contact">Contact NJC</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default NavSection;
