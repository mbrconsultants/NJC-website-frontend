import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import Link from "next/link";

const BlogSection7 = () => {
  return (
    <section className="rv-22-blog_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="rv-22-service_section_heading">
              <h5 className="rv-22-service_section_sub_title rv-text-anime">
                <span className="rv8_sub_pre_sty"></span>Blogs and News
                <span className="rv8_sub_pre_nex"></span>
              </h5>
              <h2 className="rv-22-service_section_title rv-text-anime">
                Latest News & Article
              </h2>
            </div>
          </div>
        </div>

        <DivAnimateYAxis className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="rv-22-single_blog">
              <div className="rv-22-blog_image">
                <Link href="#">
                  <img src="assets/img/blog/home-8-blog-1.png" alt="image" />
                </Link>
              </div>
              <div className="rv-22-single_blog_content">
                <div className="rv-22-single_blog_meta">
                  <span className="catagory">Hair Cutting</span>
                  <p className="rv-22-single_blog_date">
                    {" "}
                    <i className="fal fa-calendar-alt"></i>June 24, 2023
                  </p>
                </div>
                <h4 className="rv-22-single_blog_content_title">
                  <a href="#">The Barber's Chair Chronicles Grooming Storie.</a>
                </h4>
                <a href="#" className="rv-22-single_blog_btn">
                  Read More <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rv-22-single_blog">
              <div className="rv-22-blog_image">
                <Link href="#">
                  <img src="assets/img/blog/home-8-blog-2.png" alt="image" />
                </Link>
              </div>
              <div className="rv-22-single_blog_content">
                <div className="rv-22-single_blog_meta">
                  <span className="catagory">Shaving</span>
                  <p className="rv-22-single_blog_date">
                    {" "}
                    <i className="fal fa-calendar-alt"></i>March 23, 2023
                  </p>
                </div>
                <h4 className="rv-22-single_blog_content_title">
                  <a href="#">Beard, Buzz, & Beyond Inside The Barber Shop.</a>
                </h4>
                <a href="#" className="rv-22-single_blog_btn">
                  Read More <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rv-22-single_blog">
              <div className="rv-22-blog_image">
                <Link href="#">
                  <img src="assets/img/blog/home-8-blog-3.png" alt="image" />
                </Link>
              </div>
              <div className="rv-22-single_blog_content">
                <div className="rv-22-single_blog_meta">
                  <span className="catagory">Hair Cutting</span>
                  <p className="rv-22-single_blog_date">
                    {" "}
                    <i className="fal fa-calendar-alt"></i>June 28, 2023
                  </p>
                </div>
                <h4 className="rv-22-single_blog_content_title">
                  <a href="#">The Barber's Chair Chronicles Grooming Storie.</a>
                </h4>
                <div className="div">
                  <a href="#" className="rv-22-single_blog_btn">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default BlogSection7;
