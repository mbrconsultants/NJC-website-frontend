"use client";

import AccordionSection from "../accordion/AccordionSection";
import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
// import ServiceSearchbar from "./ServiceSearchbar";
// import ServiceCategorySection from "./ServiceCategorySection";
// import ServiceDetailsQuote from "./ServiceDetailsQuote";
// import ServiceDetailCard from "./ServiceDetailCard";

import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  img: string;
  title: string;
};
const FaqSection = ({ img, title }: Props) => {

 
  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <div className="row rv-service-details__row g-30 justify-content-center">
          <div className="col-lg-12">
            <div className="rv-service-details__left">         
              <AccordionSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};


export default FaqSection;
