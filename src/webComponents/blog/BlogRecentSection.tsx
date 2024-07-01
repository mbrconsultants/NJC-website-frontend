import { blogData4 } from "@/data/Data";
import Link from "next/link";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
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
  allNews: Blog[];
}
const BlogRecentSection: React.FC<Props> = ({ allNews }) => {
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
  

  const truncateTitle = (title: string, wordLimit: number) => {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return title;
};
  return (
    <DivAnimateYAxis className="rv-blog-details-right rv-blog-details-recents">
      <h3 className="rv-blog-details-right__title">Recent Posts</h3>
      {allNews.slice(0, 3).map((item) => (
        <div className="rv-recent-blog" key={item.id}>
          <img
            className="rv-recent-blog__img"
            src={item.img ? item.img :"/assets/images.png"}
            alt="blog image"
          />
          <div className="rv-recent-blog__txt">
            <span className="rv-recent-blog__date">
              <i className="fa-light fa-calendar-alt"></i> {formatDate(item.display_date)}
            </span>
            <h4 className="rv-recent-blog__title">
              <Link href={`/news-events/${item.id}`}>{truncateTitle(item.title, 10)}</Link>
            </h4>
          </div>
        </div>
      ))}
    </DivAnimateYAxis>
  );
};

export default BlogRecentSection;
