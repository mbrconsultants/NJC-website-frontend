import { blogData4 } from "@/data/Data";
import Link from "next/link";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const AllBlogSection = () => {
  return (
    <section className="rv-inner-blogs rv-section-spacing">
      <div className="container">
        <div className="rv-inner-blogs__row">
          {blogData4.map((item) => (
            <DivAnimateYAxis
              duration={1.2 + 0.1 * item.id}
              className={`rv-1-blog rv-inner-blog`}
              key={item.id}
            >
              <div className="rv-1-blog__img">
                <img src={item.img} alt="Blog Image" />
              </div>

              <div className="rv-1-blog__txt">
                <ul className="rv-1-blog__infos">
                  <li>
                    <img src="assets/img/rv-1-icon-4.png" alt="icon" />{" "}
                    {item.date}
                  </li>
                  <li>
                    <img src="assets/img/rv-1-icon-5.png" alt="icon" />{" "}
                    {item.comments} Comments
                  </li>
                </ul>
                <h4 className="rv-1-blog__title">
                  <Link href={`/news-events/${item.title}`}>{item.title}.</Link>
                </h4>

                <Link
                  href={`/news-events/${item.title}`}
                  className="rv-1-schedule-conf__btn rv-1-blog__btn"
                >
                  Read More <i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </DivAnimateYAxis>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogSection;