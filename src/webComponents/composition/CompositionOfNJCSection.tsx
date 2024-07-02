"use client"

import React, { useEffect, useState } from "react";
import BlogRecentSection from "../blog/BlogRecentSection";
import endpoint from "../../context/endpoint"


type Props = {
  btnStyle?: string;
};
interface Blog {
  id: number;
  img: string;
  display_date: string;
  comments: number;
  title: string;
  placeby: string
  content: string
}
const CompositionOfNJCSection = ({ btnStyle }: Props) => {

  const [data, setdata] = useState();
 
  const [compositionData, setCompositionData] = useState<{ id: number; composition: string }>({
    id: 0,
    composition: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allNews, setAllNews] = useState<Blog[]>([]);
  
  const fetchCompositionData = async () => {
    try {
      const res = await endpoint.get("/composition");
      console.log("Composition Data", res.data.data);
      setdata(res.data.data);
      setCompositionData(res.data.data.getComposition);
      setLoading(false);
    } catch (err:any) {
      setError(err);
      setLoading(false);
    }
  };
  const getAllNews = async () => {
    try {
      const res = await endpoint.get("/news");
      if (Array.isArray(res.data.data.getNews)) {
        setAllNews(res.data.data.getNews);
      } else {
        console.error("API response is not an array");
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchCompositionData();
    getAllNews();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading composition data</div>;

  return (
    <div className="rv-blog-details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center rv-blog-details__row">
          <div className="col-lg-8">
            <div className="rv-blog-details-left">
              <h2 className="rv-blog-details__title">COMPOSITION OF NJC</h2>
                <div 
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    width: "100%",
                    margin: "auto",
                    maxWidth: "100%",
                  }}
                dangerouslySetInnerHTML={{ __html: compositionData.composition }} />
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-10 col-xxs-12">

            <BlogRecentSection allNews={allNews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositionOfNJCSection;
