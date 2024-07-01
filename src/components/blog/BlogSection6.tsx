"use client";
import React, { useEffect, useState } from "react";
import { blogData4 } from "@/data/Data";
import Link from "next/link";
import endpoint from "../../context/endpoint";

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

const BlogSection6: React.FC = () => {
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
    <section className="rv-18-blog_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="rv-18-blog_heading rv-text-anime">
              News and Events
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {data.slice(0, 3).map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="rv-18-single_blog">
                <div className="rv-18-blog_image">
                  <img
                    src={item.img ? item.img : "/assets/images.png"}
                    alt="image"
                  />
                </div>
                <div className="rv-18-single_blog_content">
                  <div className="rv-18-single_blog_meta">
                    <a href="#" className="rv-18-single_blog_meta_catagory">
                      <i className="far fa-user"></i>Admin
                    </a>
                    <p className="rv-18-single_blog_comment">
                      <i className="far fa-comments"></i>0 Comments
                    </p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection6;
