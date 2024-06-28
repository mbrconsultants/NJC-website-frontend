"use client";
// import { teamData5 } from "@/data/Data";
import { teamData2 } from "@/data/Data";

import React, { useState } from "react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import CustomImageAnimate from "../utils/CustomImageAnimate";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="rv-inner-team rv-section-spacing rv-team-members-section"
      style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}
    >
      <div className="container">
        <div className="rv-inner-team-row" data-aos="fade-up">
          <div className="row g-30">
            <div className="col-12">
              <div style={{ backgroundColor: '#d3d3d3', borderRadius: '8px' }}>
                {faqData.map((faq, index) => (
                  <div key={index} style={{ margin: '10px 0' }}>
                    <div
                      onClick={() => toggleAccordion(index)}
                      style={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: '#fff',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {faq.question}
                    </div>
                    <div
                      style={{
                        maxHeight: activeIndex === index ? '200px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease',
                        backgroundColor: '#fff',
                        padding: activeIndex === index ? '10px' : '0 10px',
                        borderBottomLeftRadius: '8px',
                        borderBottomRightRadius: '8px',
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "WHAT IS NATIONAL JUDICIAL COUNCIL?",
    answer: "The National Judicial Council is one of the Federal Executive Bodies created by virtue of Section 153 of the 1999 Constitution of the Federal Republic of Nigeria."
  },
  {
    question: "What are the goals of the National Judicial Council?",
    answer: "The goals include preserving an independent Judiciary, commitment to the rule of law, financial autonomy, and a Judiciary driven by information technology."
  },
  {
    question: "What powers does the National Judicial Council have?",
    answer: "The Council has the power to recommend judicial appointments, remove judicial officers, control and disburse funds, and advise the President and Governors on judiciary matters."
  },
  {
    question: "How are judges appointed?",
    answer: "The Council recommends candidates for judicial appointments to the President and Governors based on lists submitted by various judicial service commissions."
  },
  {
    question: "What is the performance evaluation of judicial officers?",
    answer: "The Council evaluates the performance of judicial officers based on their quarterly returns of cases, which is used for discipline and determining the needs of courts."
  },
  {
    question: "How does the Council manage the judiciary's budget?",
    answer: "The Council prepares and controls the capital and recurrent budget for the Federal Judiciary and the recurrent budget for State Judicial Offices."
  },
  {
    question: "What role does the Council play in judicial pensions?",
    answer: "The Council is responsible for the payment of gratuities and pensions of all retired Federal Judicial Officers."
  },
  {
    question: "What is the Due Process Committee?",
    answer: "The Due Process Committee ensures that all contracts and procurements above a certain threshold in the Federal Judiciary comply with the Procurement Act."
  },
  {
    question: "What is the Federal Judiciary Tenders Board?",
    answer: "The Tenders Board awards contracts that are above the thresholds of courts and judicial bodies in the Federal Judiciary."
  },
  {
    question: "How does the Council monitor projects and contracts?",
    answer: "The Council monitors the execution of projects and evaluates all contracts awarded in the Federal Judiciary to ensure compliance with government policies."
  }
];

export default FaqSection;
