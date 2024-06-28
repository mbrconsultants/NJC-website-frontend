import React from "react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
// import BlogRecentSection from "./BlogRecentSection";
import BlogRecentSection from "../blog/BlogRecentSection";


type Props = {
  btnStyle?: string;
};

const StructureOfNJCSection = ({ btnStyle }: Props) => {
  return (
    <div className="rv-blog-details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center rv-blog-details__row">
          <div className="col-lg-8">
            <div className="rv-blog-details-left">
              <h2 className="rv-blog-details__title">STRUCTURE OF NJC</h2>
                <p>
                  OFFICE OF THE SECRETARY
                  <br />
                  The Office is the pivot around which all the activities of the Council revolve. It is the administrative office of 
                  the Council. The Office co-ordinates and supervises all activities of the Council including Council Meetings, 
                  disbursement and monitoring of Funds. The success or failure of the Departments & Units in the Council depends on 
                  the Office. The Office liaises with other Arms of Government and Agencies to achieve the goals of the Council, 
                  among others.
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

export default StructureOfNJCSection;
