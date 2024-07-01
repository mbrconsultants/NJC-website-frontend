"use client";

import React, { useState, useEffect } from "react";
import endpoint from "@/context/endpoint";
// import AccordionSection from "../accordion/AccordionSection";
// import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
// import ServiceSearchbar from "./ServiceSearchbar";
// import ServiceCategorySection from "./ServiceCategorySection";
// import ServiceDetailsQuote from "./ServiceDetailsQuote";
// import ServiceDetailCard from "./ServiceDetailCard";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import BlogRecentSection from "./BlogRecentSection";
type Props = {
  img: string;
  title: string;
};
const ServiceDetails = ({ img, title }: Props) => {
  // interface ImgAnimateLeftToRightProps {
  //   src: string;
  //   alt: string;
  //   style?: React.CSSProperties;
  // }

  // const ImgAnimateLeftToRight: React.FC<ImgAnimateLeftToRightProps> = ({
  //   src,
  //   alt,
  //   style,
  // }) => <img src={src} alt={alt} style={style} />;
  const [codes, setCodes] = useState<string>("");

  const getCodeOfConduct = async () => {
    try {
      const response = await endpoint.get(`/code-of-conduct`);
      console.log("API Response:", response.data); // Debug log for API response

      const codeOfConduct = response.data.data.getCodeOfConduct;
      if (codeOfConduct && codeOfConduct.length > 0) {
        setCodes(codeOfConduct[0].code_of_conduct);
      } else {
        setCodes("No codes available");
      }
    } catch (err) {
      console.log("API Error:", err);
      setCodes("Error fetching codes");
    }
  };

  useEffect(() => {
    getCodeOfConduct();
  }, []);

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <div className="row rv-service-details__row g-30 justify-content-center">
          <div className="col-lg-8">
            <div className="rv-service-details__left">
              {/* <div className="rv-service-details__img">
                <ImgAnimateLeftToRight
                  src="assets/img/chairman9732547091716559972.jpg"
                  alt="Council Chairman Image"
                  style={{
                    height: "570px",
                    width: "854px",
                    border: "2px solid green",
                  }}
                />
              </div> */}

              <h3 className="rv-service-details__title">{title}</h3>
              {/* <ServiceDetailsQuote /> */}

              <DivAnimateYAxis>
                <div
                  dangerouslySetInnerHTML={{
                    __html: codes,
                  }}
                />
              </DivAnimateYAxis>

              {/* <ServiceDetailCard /> */}

              {/* <AccordionSection /> */}
            </div>
          </div>

          <DivAnimateYAxis className="col-lg-4 col-md-6 col-9 col-xxs-12">
            <BlogRecentSection />
            {/* <ServiceSearchbar /> */}

            {/* <ServiceCategorySection /> */}
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
