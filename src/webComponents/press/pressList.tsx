"use client";

import React, { useState, useEffect } from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import BlogRecentSection from "../../webComponents/pastCouncilChairmen/BlogRecentSection";
import endpoint from "@/context/endpoint";

interface PressRelease {
  id: number;
  title: string;
  filename: string;
  release_date: string;
}

const JusticeTable: React.FC = () => {
  const [pressList, setPressRelease] = useState<PressRelease[]>([]);

  const GetPressRelease = async () => {
    try {
      const response = await endpoint.get<{ data: { getPressReleases: PressRelease[] } }>(
        "/press-release"
      );
      const data = response.data.data;

      if (Array.isArray(data.getPressReleases)) {
        // Set the fetched data to the state
        console.log(data.getPressReleases);

        setPressRelease(data.getPressReleases);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching justices:", error);
    }
  };

  useEffect(() => {
    GetPressRelease();
  }, []);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Function to get the ordinal suffix for the day
    const getOrdinalSuffix = (number: number) => {
      if (number === 1 || number === 21 || number === 31) {
        return "st";
      } else if (number === 2 || number === 22) {
        return "nd";
      } else if (number === 3 || number === 23) {
        return "rd";
      } else {
        return "th";
      }
    };

    const ordinalSuffix = getOrdinalSuffix(day);

    return `${day}${ordinalSuffix} ${month} ${year}`;
  }

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
           <div className="input-group mb-3" style={{ backgroundColor: "#008000" }}>
            <input type="text" className="form-control" placeholder="Search by title" />
            <button className="btn btn-primary" type="button" style={{ backgroundColor: "#008000", borderColor: "#008000" }}>Search</button>
            </div>
            <div className="input-group" style={{ backgroundColor: "#008000" }}>
            <input type="text" className="form-control" placeholder="Search by date" />
            <button className="btn btn-primary" type="button" style={{ backgroundColor: "#008000", borderColor: "#008000" }}>Search by Date</button>
            </div>

          </div>
        </div>
        <div className="row rv-service-details__row g-30 justify-content-center">
          <div className="col-lg-8">
            <div className="rv-service-details__left"></div>
            <h2 style={{ textAlign: "center" }}>Press Release</h2>
            <table className="table table-bordered table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>S/N</th>
                  <th>Title</th>
                  <th>Release Date</th>
                  <th>Preview</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {pressList.map((press, index) => (
                  <tr key={press.id}>
                    <td>{index + 1}</td>
                    <td>{press.title}</td>
                    <td>{formatDate(press.release_date)}</td>
                    <td>
                      <a
                        href={process.env.NEXT_PUBLIC_UPLOAD_URL +"/assets/press-release/"+ press.filename}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <span className="fa fa-eye"></span>
                      </a>
                    </td>
                    <td>
                      <a
                       href={process.env.NEXT_PUBLIC_UPLOAD_URL +"/assets/press-release/"+ press.filename}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <span className="fa fa-file"></span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <DivAnimateYAxis className="col-lg-4 col-md-6 col-9 col-xxs-12">
            <BlogRecentSection />
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default JusticeTable;
