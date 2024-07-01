"use client";

import { blogData4 } from "@/data/Data";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import endpoint from "@/context/endpoint";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

interface News {
  ID: number;
  name: string;
  img: string | null;
  date: string;
  slug: string;
  title: string;
}

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

  return (
    <DivAnimateYAxis className="rv-blog-details-right rv-blog-details-recents">
      <h3 className="rv-blog-details-right__title">Recent News</h3>
      {news.slice(0, 3).map((item) => (
        <div className="rv-recent-blog" key={item.ID}>
          <img
            className="rv-recent-blog__img"
            src={item.img ? item.img : blogData4[0].img} // Use default image if item.img is not available
            alt="blog image"
            onError={() => console.error(`Error loading image: ${item.img}`)} // Log image loading errors
          />
          <div className="rv-recent-blog__txt">
            {/* <span className="rv-recent-blog__date">
              <i className="fa-light fa-calendar-alt"></i> {item.date}
            </span> */}
            <h4 className="rv-recent-blog__title">
              <span>{item.title}</span>
            </h4>
          </div>
        </div>
      ))}
    </DivAnimateYAxis>
  );
};

export default BlogRecentSection;
