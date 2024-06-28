import React from "react";
import BlogDetailInfo from "../blog/BlogDetailInfo";
import BlogDetailDesc from "../blog/BlogDetailDesc";

import BlogSearchbar from "../blog/BlogSearchbar";
import BlogRecentSection from "../blog/BlogRecentSection";
import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import { blogData4 } from "@/data/Data";
import Link from "next/link";
type Props = {
  img: string;
  title: string;
  id: number;
};
const BlogDetailSection = ({ img, title, id }: Props) => {
  return (
    <div className="rv-blog-details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center rv-blog-details__row">
          <div className="col-lg-8">
            <div className="rv-blog-details-left">
              <div className="rv-blog-details__img">
                <ImgAnimateLeftToRight src={img} alt="blog banner" />
              </div>

              <BlogDetailInfo />
              <h2 className="rv-blog-details__title">{title}</h2>

              <BlogDetailDesc />

           
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-10 col-xxs-12">
            <BlogSearchbar />
            <BlogRecentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSection;
