import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
interface Props {
  data: {
    id: number;
    img: string;
    display_date: string;
    comments: number;
    title: string;
    placeby:string
  };
}

const BlogDetailInfo: React.FC<Props> = ({ data }) => {
  
  function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  
  // Function to get the ordinal suffix for the day
  const getOrdinalSuffix = (number: number) => {
    if (number === 1 || number === 21 || number === 31) {
      return "st";
    } else if (number === 2 || number === 22) {
      return "nd";
    } else if (number === 3 || number === 23) {
      return "rd";
    } else {
      return "th";
    }
  };

  const ordinalSuffix = getOrdinalSuffix(day);

  return `${day}${ordinalSuffix} ${month} ${year}`;
}
  return (
    <DivAnimateYAxis className="rv-blog-details__infos" position={40}>
      <h6 className="rv-blog-details__info">
        <i className="fa-light fa-calendar-alt"></i>{formatDate(data.display_date)}
      </h6>
      <h6 className="rv-blog-details__info">
        <i className="fa-regular fa-user"></i> By <a href="#">{data.placeby}</a>
      </h6>
      <h6 className="rv-blog-details__info">
        <i className="fa-regular fa-comment-alt-dots"></i>0 Comments
      </h6>
    </DivAnimateYAxis>
  );
};

export default BlogDetailInfo;
