"use client";

import React, { useState, useContext, useEffect } from "react";
import AccordionSection from "../accordion/AccordionSection";
import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
import ServiceSearchbar from "./ServiceSearchbar";
import ServiceCategorySection from "./ServiceCategorySection";
import ServiceDetailsQuote from "./ServiceDetailsQuote";
// import ServiceDetailCard from "./ServiceDetailCard";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import BlogRecentSection from "./BlogRecentSection";
import endpoint from "@/context/endpoint";

type Props = {
  title: string;
};

const ServiceDetails = ({ title }: Props) => {
  const [data, setData] = useState<any>({});

  interface ImgAnimateLeftToRightProps {
    src: string;
    alt: string;
    style?: React.CSSProperties;
  }

  const ImgAnimateLeftToRight: React.FC<ImgAnimateLeftToRightProps> = ({
    src,
    alt,
    style,
  }) => <img src={src} alt={alt} style={style} />;

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
  console.log(data, "api data");

  useEffect(() => {
    handleGetChiefJustice();
  }, []);

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <div className="row rv-service-details__row g-30 justify-content-center">
          <div className="col-lg-8">
            <div className="rv-service-details__left">
              <div className="rv-service-details__img">
                <ImgAnimateLeftToRight
                  src={process.env.NEXT_PUBLIC_UPLOAD_URL + data.photo}
                  alt="Council Chairman Image"
                  style={{
                    height: "570px",
                    width: "854px",
                    border: "2px solid green",
                  }}
                />
              </div>

              <h3 className="rv-service-details__title">{title}</h3>
              <ServiceDetailsQuote />

              <DivAnimateYAxis>
                <div dangerouslySetInnerHTML={{ __html: data.profiles }} />
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
function setData(data: any) {
  throw new Error("Function not implemented.");
}
