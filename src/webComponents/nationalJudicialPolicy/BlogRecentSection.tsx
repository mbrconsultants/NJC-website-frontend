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
    <DivAnimateYAxis className="rv-18-blog_section">
      <section className="rv-blog-details-right rv-blog-details-recents">
        <div className="container">
          <div>
            <h2 className="rv-18-blog_heading rv-text-anime">
              News and Events
            </h2>
          </div>
          <div>
            {news.slice(0, 3).map((item) => (
              <div className="rv-18-single_blog" key={item.ID}>
                <div className="rv-18-blog_image">
                  <img
                    src={item.img ? item.img : blogData4[0].img}
                    alt="news image"
                  />
                  <span className="rv-18-single_blog_date">
                    {10 + 6 * item.ID} June
                  </span>
                </div>
                <div className="rv-18-single_blog_content">
                  <div className="rv-18-single_blog_meta">
                    <a href="#" className="rv-18-single_blog_meta_catagory">
                      <i className="far fa-user"></i>Admin
                    </a>
                    <p className="rv-18-single_blog_comment">
                      <i className="far fa-comments"></i>3 Comments
                    </p>
                  </div>
                  <h4 className="rv-18-single_blog_content_title">
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </h4>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="rv-18-single_blog_btn"
                  >
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DivAnimateYAxis>
  );
};

export default BlogRecentSection;
