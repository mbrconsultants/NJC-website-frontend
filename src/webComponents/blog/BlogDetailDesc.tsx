import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
interface Props {
  data: {
    id: number;
    img: string;
    display_date: string;
    comments: number;
    title: string;
    placeby: string
    content: string
  };
}

const BlogDetailDesc:  React.FC<Props> = ({ data }) =>{
  return (
    <DivAnimateYAxis className="rv-blog-details-descr">
      <p className="rv-blog-details-descr__txt" dangerouslySetInnerHTML={{__html:data.content}}>
        {/* {data.content} */}
      </p>

   

      {/* <blockquote className="rv-blog-details-descr__txt blockquote">
      

        <h6 className="blockquote__author-name">{data.placeby}</h6>
      </blockquote> */}

      <div className="rv-blog-details__inner-img">
        <div className="row g-4">
          <div className="col-sm-6">
            {/* <ImgAnimateLeftToRight src="/assets/img/rv-4-blog-10.jpg" alt="" /> */}
          </div>
          <div className="col-sm-6">
            {/* <ImgAnimateLeftToRight src="/assets/img/rv-4-blog-3.jpg" alt="" /> */}
          </div>
        </div>
      </div>
    
    </DivAnimateYAxis>
  );
};

export default BlogDetailDesc;
