import { blogData4 } from "@/data/Data";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import Link from "next/link";

const BlogSection5 = () => {
  return (
    <section className="rv-8-blogs rv-section-spacing" data-aos="fade-up">
      <div className="container">
        <div className="rv-8-section__heading">
          <h6 className="rv-8-section__sub-title rv-text-anime">Latest News</h6>
          <h2 className="rv-8-section__title rv-text-anime">
            From {""}
            <span className="styled">
              News
              <svg
                width="191"
                height="20"
                viewBox="0 0 191 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.350829 19.9954C62.8308 5.83547 125.782 4.29367 187.776 13.0908C189.008 13.2659 190.838 11.7486 190.99 9.4079C191.144 7.02425 189.429 5.15235 188.194 4.95568C125.733 -5.0348 63.0249 0.340437 0.251936 18.7297C-0.147058 18.8469 -0.0406972 20.0845 0.350829 19.9954Z"
                  fill="#93B617"
                />
              </svg>
            </span>
            {""} Feeds
          </h2>
        </div>

        <DivAnimateYAxis className="row g-30 justify-content-center">
          {blogData4.slice(-3).map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <div className="rv-2-blog rv-8-blog">
                <ul className="rv-2-blog__infos">
                  <li className="rv-2-blog__info rv-2-blog__cat">Cleaning</li>
                  <li className="rv-2-blog__info">{item.date}</li>
                </ul>

                <h4 className="rv-2-blog__title">
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </h4>
                <p className="rv-2-blog__descr">
                  Sed finibus amet dolor maximus sodales egestas ut elit id
                  sollicitudin.
                </p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="rv-1-schedule-conf__btn"
                >
                  Read More <i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default BlogSection5;
