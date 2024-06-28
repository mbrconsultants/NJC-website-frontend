import React from "react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
// import BlogRecentSection from "./BlogRecentSection";
import BlogRecentSection from "../blog/BlogRecentSection";


type Props = {
  btnStyle?: string;
};

const ProfileOfNJC = ({ btnStyle }: Props) => {
  return (
    <div className="rv-blog-details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center rv-blog-details__row">
          <div className="col-lg-8">
            <div className="rv-blog-details-left">
              <h2 className="rv-blog-details__title">PROFILE OF NJC</h2>
                <p>
                  The National Judicial Council is one of the Federal Executive Bodies created by virtue of Section 153 of the 
                  1999 Constitution of the Federal Republic of Nigeria. In order to insulate the Judiciary from the whims and 
                  caprices of the Executive; hence guarantee the independence of this Arm of Government, which is a sine qua non 
                  for any democratic Government, the National Judicial Council was created and vested with enormous powers and 
                  functions of the erstwhile Advisory Judicial Committee (AJC) which it replaced.
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

            <BlogRecentSection />

            {/* <BlogTagSection /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOfNJC;
