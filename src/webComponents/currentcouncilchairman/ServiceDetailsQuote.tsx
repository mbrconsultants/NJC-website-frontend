"use client";

import React, { CSSProperties, useState, useEffect } from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import "./ServiceDetailsQuote.css";
import endpoint from "@/context/endpoint";

const ServiceDetailsQuote = () => {
  const [data, setData] = useState<any>({});

  const handleGetChiefJustice = async () => {
    // setLoading(true);
    await endpoint
      .get(`/chiefjustice`)
      .then(({ data }) => {
        console.log("chief", data.data.profilePhoto);
        setData(data.data ? data.data.profilePhoto : "");
        // setLoading(false);
      })
      .catch((err: any) => console.log(err));
  };
  console.log(data, "results");

  useEffect(() => {
    handleGetChiefJustice();
  }, []);

  // const styles = {
  //   h6: {
  //     position: "relative" as "relative",
  //     display: "block", // Change to block element
  //     color: "white",
  //     backgroundColor: "green",
  //     padding: "10px",
  //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  //     overflow: "hidden",
  //     width: "fit-content", // Shrink the element to its content width
  //     margin: "auto", // Center the element horizontally
  //   },
  // };

  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: "100vh", // Optional: makes the container full height for vertical centering
    },
    h6: {
      color: "white",
      backgroundColor: "green",
      padding: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease",
      maxWidth: "400px",
      margin: "0 auto",
      textAlign: "center", // Center the text within the h6 element
      display: "inline-block", // Ensure it doesn't take full width
    },
    hoverEffect: {
      transform: "scaleX(1.2)", // Magnify from left to right on hover
    },
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <DivAnimateYAxis>
      {/* <h6 style={styles.h6}>HON. JUSTICE OLUKAYODE ARIWOOLA</h6> */}
      {/* <button>HON. JUSTICE OLUKAYODE ARIWOOLA</button> */}

      <div style={styles.container}>
        <h6
          style={{ ...styles.h6, ...(isHovered && styles.hoverEffect) }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {data.caption}
        </h6>
      </div>
      {/* <h6 className="fancy-element">HON. JUSTICE OLUKAYODE ARIWOOLA</h6> */}
      <blockquote className="rv-blog-details-descr__txt rv-service-details__blockquote">
        {/* <p>
          Lorem ipsum dolor sit abet connecters dehiscing alit sed aliquot ex
          supine maximus sit ramet mi laurate untraces.
        </p> */}

        {/* <h6 style={{ textAlign: "center" }}>HON. JUSTICE OLUKAYODE ARIWOOLA</h6> */}
      </blockquote>
    </DivAnimateYAxis>
  );
};

export default ServiceDetailsQuote;
