"use client";

import React, { useState, useEffect } from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
// import BlogRecentSection from "./BlogRecentSection";
import BlogRecentSection from "../blog/BlogRecentSection";
import endpoint from "@/context/endpoint";

interface Justice {
  ID: number;
  name: string;
  period: string;
}

const JusticeTable: React.FC = () => {
  const [justices, setJustices] = useState<Justice[]>([]);
    const [allNews, setAllNews] = useState<any>([]);

  const GetFormerChiefJustice = async () => {
    try {
      const response = await endpoint.get<{ data: { getJustices: Justice[] } }>(
        "/former-justices"
      );
      const data = response.data.data;

      console.log("Api Response", data);

      if (Array.isArray(data.getJustices)) {
        // Set the fetched data to the state
        setJustices(data.getJustices);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching justices:", error);
    }
  };

    const getAllNews = async () => {
    try {
      const res = await endpoint.get("/news");
      if (Array.isArray(res.data.data.getNews)) {
        setAllNews(res.data.data.getNews);
      } else {
        console.error("API response is not an array");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetFormerChiefJustice();
    getAllNews();
  }, []);

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <div className="row rv-service-details__row g-30 justify-content-center">
          <div className="col-lg-8">
            <div className="rv-service-details__left"></div>
            <h2 style={{ textAlign: "center" }}>
              Past Chief Justices of Nigeria
            </h2>
            <table style={{ marginLeft: "20px", marginRight: "20px" }}>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>NAME</th>
                  <th>PERIOD</th>
                </tr>
              </thead>
              <tbody>
                {justices.map((justice, index) => (
                  <tr key={justice.ID}>
                    <td>{index + 1}</td>
                    <td>{justice.name.replace(/\r?\n|\r/g, "")}</td>
                    <td>{justice.period.replace(/\r?\n|\r/g, "")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <style jsx>{`
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th,
              td {
                border: 1px solid #ddd;
                padding: 8px;
              }
              th {
                background-color: #f2f2f2;
                text-align: left;
              }
              tr:nth-child(even) {
                background-color: #f9f9f9;
              }
              tr:hover {
                background-color: #ddd;
              }
            `}</style>
          </div>

          <DivAnimateYAxis className="col-lg-4 col-md-6 col-9 col-xxs-12">
            <BlogRecentSection allNews={allNews}/>
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default JusticeTable;
