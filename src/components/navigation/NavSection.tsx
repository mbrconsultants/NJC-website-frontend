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
  procedural_rules: boolean;
  media: boolean;
};
const NavSection = ({ style, logo }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    // home: false,
    judiciary: false,
    service: false,
    about_NJC: false,
    blog: false,
    procedural_rules: false,
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
          <Link
            href="/"
            className="dropdown-btn"
           
          
          >
            Home
          </Link>
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
              <Link href="/profile-of-NJC">Profile of NJC</Link>
            </li>
            <li>
              <Link href="/composition-of-NJC">Composition of NJC</Link>
            </li>
             <li>
              <Link href="/structure-of-NJC">Structure of NJC</Link>
            </li> 
            <li>
              <Link href="/committees-of-NJC">Committees in NJC</Link>
            </li>
              <li>
              <Link href="/current-council-members">Current Council Members</Link>
            </li>
              <li>
              <Link href="/management-staff">Management Staff</Link>
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

        <li className={dropdown.procedural_rules ? "rv-dropdown-active" : ""}>
          <a
            className="dropdown-btn"
            role="button"
            onClick={() => handleToggleDropdown("procedural_rules")}
          >
            NJC Guidelines
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/procedural-rules">
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
        <li className={dropdown.procedural_rules ? "rv-dropdown-active" : ""}>
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
