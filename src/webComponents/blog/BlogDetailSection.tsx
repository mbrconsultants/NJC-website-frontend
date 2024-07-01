"use client"
import React, { useEffect, useState } from "react";
import BlogDetailInfo from "./BlogDetailInfo";
import BlogDetailDesc from "./BlogDetailDesc";
import BlogSearchbar from "./BlogSearchbar";
import BlogRecentSection from "./BlogRecentSection";
import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import { blogData4 } from "@/data/Data";
import Link from "next/link";
import endpoint from "../../context/endpoint";


interface Blog {
  id: number;
  img: string;
  display_date: string;
  comments: number;
  title: string;
  placeby: string;
  content: string;
}

interface Props {
  data: Blog;
  allNews: Blog[];
}

const BlogDetailSection: React.FC<Props> = ({ data, allNews }) => {
  const { id, img, display_date, title, placeby, content } = data;
  const prevBlog = allNews.find((item) => item.id == id - 1);
  const nextBlog = allNews.find((item) => item.id == id + 1);

  return (
    <div className="rv-blog-details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center rv-blog-details__row">
          <div className="col-lg-8">
            <div className="rv-blog-details-left">
              <div className="rv-blog-details__img">
                <ImgAnimateLeftToRight src={img ? process.env.NEXT_PUBLIC_UPLOAD_URL + img : "/assets/images.png"} alt="blog banner" />
              </div>

              <BlogDetailInfo data={data} />
              <h5 className="rv-blog-details__title">{title}</h5>

              <BlogDetailDesc data={data} />

              <DivAnimateYAxis className="rv-blog-details-bottom__navs">
                <div className="row gy-0 gx-0">
                  <div className="col-6 col-xxs-12">
                    <Link
                      href={prevBlog ? `/news-events/${prevBlog.id}` : "#"}
                      className={`rv-blog-details-bottom-nav ${!prevBlog ? "disabled" : ""}`}
                    >
                      <i className="fa-sharp fa-regular fa-arrow-left"></i>Prev
                      Post
                    </Link>
                  </div>
                  <div className="col-6 col-xxs-12 ms-auto">
                    <Link
                      href={nextBlog ? `/news-events/${nextBlog.id}` : "#"}
                      className={`rv-blog-details-bottom-nav justify-content-end ${!nextBlog ? "disabled" : ""}`}
                    >
                      Next Post
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </DivAnimateYAxis>
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-10 col-xxs-12">
            <BlogSearchbar />
            <BlogRecentSection allNews ={allNews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSection;
