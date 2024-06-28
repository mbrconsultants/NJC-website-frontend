"use client"

import React, { useEffect, useState } from "react";
import BlogRecentSection from "../blog/BlogRecentSection";
import endpoint from "../../context/endpoint"

type Props = {
  btnStyle?: string;
};

const ProfileOfNJC = ({ btnStyle }: Props) => {
  const [data, setdata] = useState();
 
  const [profileData, setProfileData] = useState<{ id: number; full_profile: string }>({
    id: 0,
    full_profile: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfileData = async () => {
    try {
      const res = await endpoint.get("/profile");
      console.log("Profile Data", res.data.data);
      setdata(res.data.data);
      setProfileData(res.data.data.getNjcProfile);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile data</div>;

  return (
    <div className="rv-blog-details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center rv-blog-details__row">
          <div className="col-lg-8">
            <div className="rv-blog-details-left">
              <h2 className="rv-blog-details__title">PROFILE OF NJC</h2>
              <div dangerouslySetInnerHTML={{ __html: profileData.full_profile }} />
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

export default ProfileOfNJC;
