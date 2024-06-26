import { blogData4 } from "@/data/Data";
import Link from "next/link";
import React from "react";

const BlogSection6 = () => {
  return (
    <section className="rv-18-blog_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="rv-18-blog_heading rv-text-anime">
              Latest Post from Blog
              <span className="position-absolute">
                <img src="assets/img/slider/home-4-banner-sh.png" alt="image" />
              </span>
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {blogData4.slice(0, 3).map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="rv-18-single_blog">
                <div className="rv-18-blog_image">
                  <img src={item.img} alt="image" />

                  <span className="rv-18-single_blog_date">
                    {10 + 6 * item.id} June
                  </span>
                </div>
                <div className="rv-18-single_blog_content">
                  <div className="rv-18-single_blog_meta">
                    <a href="#" className="rv-18-single_blog_meta_catagory">
                      <i className="far fa-user"></i>Admin
                    </a>
                    <p className="rv-18-single_blog_comment">
                      {" "}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection6;
