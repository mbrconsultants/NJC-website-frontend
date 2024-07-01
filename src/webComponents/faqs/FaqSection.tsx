"use client";

import AccordionSection from "../accordion/AccordionSection";
import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
import React, { useEffect, useState } from "react";
import endpoint from "../../context/endpoint";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

type Props = {
  img: string;
  title: string;
};
const FaqSection = () => {

  const [expandedItem, setExpandedItem] = useState<number | null>(1);

  const handleItemClick = (itemId: number) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const [data, setdata] = useState([]);
  // const [managementStaffData, setManagementStaffData] = useState([]);
  const [faqData, setFaqData] = useState<{ faqID: number; question: string; answer: string}>({
    faqID: 0,
    question: "",
    answer: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFaqData = async () => {
    try {
      const res = await endpoint.get("/faq");
      console.log("Frequently asked questions Data", res.data.data);
      setdata(res.data.data);
      setFaqData(res.data.data.getFaqs);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  const stripHtmlTags = (str) => {
    if (!str) return "";
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading management staff data</div>;

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
    <DivAnimateYAxis className="rv-accordion">
      {/* <h3 className="rv-service-details__title">Frequently Asked Questions</h3> */}
      
      {faqData.map((item) => (
        <div
          key={item.id}
          className={`rv-accordion-item ${
            item.faqID === expandedItem ? "open" : ""
          }`}
          onClick={() => handleItemClick(item.faqID)}
        >
          <div className="rv-accordion-item-header">
            <h6 className="rv-accordion-item-title">{item.question}</h6>
            <span className="rv-accordion-item-expand-icon"></span>
          </div>
          <p className="rv-accordion-item-body">{stripHtmlTags(item.answer)}</p>
        </div>
      ))}
    </DivAnimateYAxis>
    </div>
    </section>
  );

};


export default FaqSection;
