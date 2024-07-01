"use client";

import React, { useState, useEffect } from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import BlogRecentSection from "./BlogRecentSection";
// import ServiceCategorySection from "./ServiceCategorySection";
import endpoint from "@/context/endpoint";

type Props = {
  img: string;
  title: string;
};

const ServiceDetails = ({ img, title }: Props) => {
  const [rules, setRules] = useState<string>("");

  const getProceduralRule = async () => {
    try {
      const response = await endpoint.get(`/procedural-rule`);
      console.log("API Response:", response.data); // Debug log for API response

      const proceduralRules = response.data.data.proceduralRules;
      if (proceduralRules && proceduralRules.length > 0) {
        setRules(proceduralRules[0].rules);
      } else {
        setRules("No rules available");
      }
    } catch (err) {
      console.log("API Error:", err);
      setRules("Error fetching rules");
    }
  };

  useEffect(() => {
    getProceduralRule();
  }, []);

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <div className="row rv-service-details__row g-30 justify-content-center">
          <div className="col-lg-8">
            <div className="rv-service-details__left">
              <h3 className="rv-service-details__title">{title}</h3>
              <DivAnimateYAxis>
                <div
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    width: "100%",
                    margin: "auto",
                    maxWidth: "100%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: rules,
                  }}
                />
              </DivAnimateYAxis>
            </div>
          </div>
          <DivAnimateYAxis className="col-lg-4 col-md-6 col-9 col-xxs-12">
            <BlogRecentSection />
            {/* <ServiceCategorySection /> */}
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
