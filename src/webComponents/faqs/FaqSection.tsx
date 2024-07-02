"use client";

import React, { useEffect, useState } from "react";
import endpoint from "../../context/endpoint";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

interface FaqData {
  faqID: number;
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(1);
  const [data, setData] = useState<FaqData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const handleItemClick = (itemId: number) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const fetchFaqData = async () => {
    try {
      const res = await endpoint.get("/faq");
      console.log("Frequently Asked Questions Data", res.data.data);
      setData(res.data.data.getFaqs);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  const stripHtmlTags = (str: string) => {
    if (!str) return "";
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading FAQ data</div>;

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <DivAnimateYAxis className="rv-accordion">
          {data.map((item) => (
            <div
              key={item.faqID}
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
