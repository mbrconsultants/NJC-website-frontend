import React from "react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
// import BlogRecentSection from "./BlogRecentSection";
import BlogRecentSection from "../blog/BlogRecentSection";


type Props = {
  btnStyle?: string;
};

const CompositionOfNJCSection = ({ btnStyle }: Props) => {
  return (
    <div className="rv-blog-details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center rv-blog-details__row">
          <div className="col-lg-8">
            <div className="rv-blog-details-left">
              <h2 className="rv-blog-details__title">COMPOSITION OF NJC</h2>
                <p>
                  By the provision of Paragraph 20 of Part One of the Third Schedule to the 1999 Constitution of the Federal Republic 
                  of Nigeria, as amended. The National Judicial Council shall comprise the following Members:
                  the Chief Justice of Nigeria, who shall be the Chairman;
                  the next most senior Justice of the Supreme Court who shall be the Deputy Chairman;
                  the President of the Court of Appeal;
                </p>
              {/* <BlogDetailDesc /> */}

              {/* <BlogDetailBottomAction /> */}

              {/* <DivAnimateYAxis className="rv-blog-details-bottom__navs">
                <div className="row gy-0 gx-0">
                  <div className="col-6 col-xxs-12">
                    <Link
                      href={prevBlog ? `/blog/${prevBlog.slug}` : "#"}
                      className={`rv-blog-details-bottom-nav ${
                        !prevBlog ? "disabled" : ""
                      }`}
                    >
                      <i className="fa-sharp fa-regular fa-arrow-left"></i>Prev
                      Post
                    </Link>
                  </div>
                  <div className="col-6 col-xxs-12 ms-auto">
                    <Link
                      href={nextBlog ? `/blog/${nextBlog.slug}` : "#"}
                      className={`rv-blog-details-bottom-nav justify-content-end ${
                        !nextBlog ? "disabled" : ""
                      }`}
                    >
                      Next Post
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </DivAnimateYAxis> */}

              {/* <BlogDetailCommentArea /> */}

              {/* <BlogDetailCommentFormArea /> */}
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-10 col-xxs-12">
            {/* <BlogSearchbar /> */}

            {/* <BlogCategory /> */}

            <BlogRecentSection />

            {/* <BlogTagSection /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositionOfNJCSection;
