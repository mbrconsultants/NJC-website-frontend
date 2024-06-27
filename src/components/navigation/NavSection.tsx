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
    about_NJC:false,
    blog: false,
    NJC_guidelines: false,
    media: false
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
          <a href="/"
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
              <Link href="/management-staff">Management Staffs</Link>
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
              <Link href="#">Current Council Chairman</Link>
            </li>
            <li>
              <Link href="#">
               Past Council Chairmen
              </Link>
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
              <Link href="/blog">NJC Guidelines and Procedural Rules</Link>
            </li>
            <li>
              <Link href="#">Code of Conduct</Link>
            </li>
             <li>
              <Link href="#">Discipline Regulation</Link>
            </li>
              <li>
              <Link href="#">NJC Policy</Link>
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
              <Link href="/blog">News and Events</Link>
            </li>
            <li>
              <Link href="/blog/entrepreneur-productivity">Press Release</Link>
            </li>
             <li>
              <Link href="/blog/entrepreneur-productivity">Gallery</Link>
            </li>
              <li>
              <Link href="/blog/entrepreneur-productivity">Video Gallery</Link>
            </li>
          </ul>
        </li>
          <li>
          <Link href="/fa">FAQ</Link>
        </li>

        {/* <li>
          <Link href="/contact">Contact NJC</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default NavSection;
