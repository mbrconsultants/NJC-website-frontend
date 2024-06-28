"use client"

import React, { useEffect, useState } from "react";
import BlogRecentSection from "../blog/BlogRecentSection";
import endpoint from "../../context/endpoint"
type Props = {
  btnStyle?: string;
};

const CommitteeOfNJCSection = ({ btnStyle }: Props) => {

  const [data, setdata] = useState();
 
  const [committeeData, setCommitteeData] = useState<{ id: number; committees: string }>({
    id: 0,
    committees: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchCommitteeData = async () => {
    try {
      const res = await endpoint.get("/committees");
      console.log("Committee Data", res.data.data);
      setdata(res.data.data);
      setCommitteeData(res.data.data.committees);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchCommitteeData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading structure data</div>;

  return (
    <div className="rv-blog-details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center rv-blog-details__row">
          <div className="col-lg-8">
            <div className="rv-blog-details-left">
              <h2 className="rv-blog-details__title">COMMITTEES IN NJC</h2>
                <div dangerouslySetInnerHTML={{ __html: committeeData.committees }} />
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-10 col-xxs-12">

            <BlogRecentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeOfNJCSection;
