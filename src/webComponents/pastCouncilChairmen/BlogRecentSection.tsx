"use client";

import { blogData4 } from "@/data/Data";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import endpoint from "@/context/endpoint";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

interface News {
  [x: string]: any;
  ID: number;
  name: string;
  img: string | null;
  display_date: string;
  comments: number;
  slug: string;
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

const BlogRecentSection = () => {
  const [news, setNews] = useState<News[]>([]);

  const fetchNews = async () => {
    try {
      const response = await endpoint.get<{ data: { getNews: News[] } }>(
        "/news"
      );
      const data = response.data.data;

      if (Array.isArray(data.getNews)) {
        console.log("Fetched news:", data.getNews); // Debug log for fetched news
        setNews(data.getNews);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
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
    <DivAnimateYAxis className="">
      <section className="rv-blog-details-right rv-blog-details-recents">
        <div className="container rv-18-blog_section">
          <div>
            <h2
              className=""
              style={{
                marginTop: "30px",
                marginBottom: "20px",
                textAlign: "center",
                color: "green",
                fontWeight: "bold",
              }}
            >
              Recent Posts
            </h2>
          </div>
          <div>
            {news.slice(0, 3).map((item) => (
              <div className="rv-18-single_blog" key={item.ID}>
                <div className="rv-18-blog_image">
                  <img
                    src={item.img ? item.img : "/assets/images.png"}
                    alt="news image"
                  />
                </div>
                <div className="rv-18-single_blog_content">
                  <div className="rv-18-single_blog_meta">
                    {/* <a href="#" className="rv-18-single_blog_meta_catagory">
                      <i className="far fa-user"></i>Admin
                    </a> */}
                    {/* <a href="#" className="rv-18-single_blog_comment">
                      <i className="far fa-comments"></i>
                      {item.comments} Comments
                    </a> */}
                    <span className="rv-18-single_blog_date h-5 w-10">
                      {formatDate(item.display_date)}
                    </span>
                  </div>
                  <h4 className="rv-18-single_blog_content_title">
                    <Link href={`/news-events/${item.id}`}>
                      {truncateTitle(item.title, 10)}
                    </Link>
                  </h4>
                  <Link
                    href={`/news-events/${item.id}`}
                    className="rv-18-single_blog_btn"
                  >
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/news-events"
            style={{
              display: "inline-block",
              width: "100%",
              marginTop: "30px",
              marginBottom: "20px",
              textAlign: "center",
              color: "green",
              fontWeight: "bold",
            }}
          >
            View All <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </DivAnimateYAxis>
  );
};

export default BlogRecentSection;
