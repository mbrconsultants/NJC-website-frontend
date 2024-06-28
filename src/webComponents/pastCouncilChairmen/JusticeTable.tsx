"use client";

import React from "react";
// import ServiceSearchbar from "./ServiceSearchbar";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import BlogRecentSection from "./BlogRecentSection";

interface Justice {
  id: number;
  name: string;
  period: string;
}

const justices: Justice[] = [
  {
    id: 1,
    name: "Hon. Justice Stafford Foster Sutton (Past CJF)",
    period: "1955-1958",
  },
  {
    id: 2,
    name: "Hon. Justice Adetokunbo Ademola KBE, GCON",
    period: "1958–1972",
  },
  {
    id: 3,
    name: "Hon. Justice Taslim Olawale Elias CFR, GCON",
    period: "1972–1975",
  },
  {
    id: 4,
    name: "Hon. Justice Darnley Arthur Alexander CBE,KCMG,CFR,GCON",
    period: "1975–1979",
  },
  {
    id: 5,
    name: "Hon. Justice Atanda Fatai-Williams CON,GCON",
    period: "1979–1983",
  },
  {
    id: 6,
    name: "Hon. Justice George Sodeinde Sowemimo CON,GCON",
    period: "1983–1985",
  },
  {
    id: 7,
    name: "Hon. Justice Ayo Gabriel Irikefe OFR,CON,GCON",
    period: "1985–1987",
  },
  { id: 8, name: "Hon. Justice Muhammed Bello CON,GCON", period: "1987–1995" },
  {
    id: 9,
    name: "Hon. Justice Muhammadu Lawal Uwais CON,GCON",
    period: "1995–2006",
  },
  {
    id: 10,
    name: "Hon. Justice Salisu Modibo Alfa Belgore CON,GCON",
    period: "2006–2007",
  },
  {
    id: 11,
    name: "Hon. Justice Idris Legbo Kutigi CON, GCON",
    period: "2007–2009",
  },
  {
    id: 12,
    name: "Hon. Justice Aloysius Iyorgyer Katsina-Alu CON, GCON",
    period: "2009–2011",
  },
  {
    id: 13,
    name: "Hon. Justice Dahiru Musdapher CON, CFR, FNIALS, GCON",
    period: "2011–2012",
  },
  {
    id: 14,
    name: "Hon. Justice Aloma Mariam Mukhtar CON, CFR, FNIALS, GCON",
    period: "2012–2014",
  },
  {
    id: 15,
    name: "Hon. Justice Mahmud Mohammed CON,GCON",
    period: "2014–2016",
  },
  {
    id: 16,
    name: "Hon. Justice W. S. Nkanu Onnoghen, GCON",
    period: "2016-2019",
  },
];

const JusticeTable = () => {
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
                {justices.map((justice) => (
                  <tr key={justice.id}>
                    <td>{justice.id}</td>
                    <td>{justice.name}</td>
                    <td>{justice.period}</td>
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
            <BlogRecentSection />
            {/* <ServiceSearchbar /> */}
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default JusticeTable;
