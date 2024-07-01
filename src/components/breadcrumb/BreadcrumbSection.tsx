import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  currentPage?: string;
};

const BreadcrumbSection = ({ title, currentPage }: Props) => {
  const uploadUrl = process.env.NEXT_PUBLIC_UPLOAD_URL;
  const backgroundImageUrl = `${uploadUrl}/MainSliderPicture/slider6146616201557922395.jpg`;

  return (
    <div
      className="rv-breadcrumb pt-120 pb-120"
      style={{
        position: "relative",
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff", // Set text color to white for better contrast
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="rv-breadcrumb__title">{title}</h1>
        <ul
          className="rv-breadcrumb__nav d-flex justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for nav
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <li>
            <Link href="/" style={{ color: "#fff", margin: "0 10px" }}>
              <i
                className="fa-solid fa-sharp fa-home"
                style={{ marginRight: "5px" }}
              ></i>{" "}
              Home
            </Link>
          </li>
          <li className="current-page">
            <span className="dvdr" style={{ color: "#fff", margin: "0 5px" }}>
              {" "}
              &#47;
            </span>
            <span style={{ color: "#fff" }}>
              {currentPage ? currentPage : title}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
