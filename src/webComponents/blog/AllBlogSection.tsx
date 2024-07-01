"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import endpoint from "../../context/endpoint";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported

interface Blog {
  id: number;
  img: string;
  display_date: string;
  comments: number;
  title: string;
}

// Utility function to truncate the title
const truncateTitle = (title: string, wordLimit: number) => {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return title;
};

const AllBlogSection: React.FC = () => {
  const [data, setData] = useState<Blog[]>([]);

  const getData = async () => {
    try {
      const res = await endpoint.get("/news");
      if (Array.isArray(res.data.data.getNews)) {
        setData(res.data.data.getNews);
      } else {
        console.error("API response is not an array");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);


function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
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
    <section className="rv-inner-blogs rv-section-spacing">
      <div className="container">
        <div className="row">
          {data.length > 0 ? (
            data.map((item) => (
              <DivAnimateYAxis
                duration={1.2 + 0.1 * item.id}
                className="col-md-4 mb-4"
                key={item.id}
              >
                <div className="card h-100">
                  <img
                    src={item.img ? process.env.NEXT_PUBLIC_UPLOAD_URL + item.img : "/assets/images.png"}
                    className="card-img-top"
                    alt="Blog Image"
                    style={{ height: '100px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <ul className="list-unstyled mb-2">
                      <li>
                        <img src="/assets/img/rv-1-icon-4.png" alt="icon" />{" "}
                        {formatDate(item.display_date)}
                      </li>
                      <li>
                        <img src="/assets/img/rv-1-icon-5.png" alt="icon" />{" "}
                        {item.comments} Comments
                      </li>
                    </ul>
                    <h5 className="card-title">
                      <Link href={`/news-events/${item.id}`}>
                        {truncateTitle(item.title, 10)}
                      </Link>
                    </h5>
                    <Link
                      href={`/news-events/${item.id}`}
                      className="mt-auto btn btn-secondary"
                    >
                      Read More <i className="fa-light fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </DivAnimateYAxis>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBlogSection;
