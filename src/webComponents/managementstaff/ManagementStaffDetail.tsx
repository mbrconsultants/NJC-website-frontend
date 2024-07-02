"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import endpoint from "../../context/endpoint";
import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
import { useParams } from 'next/navigation';
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import BlogRecentSection from "../blog/BlogRecentSection";

interface ManagementStaffDetails {
  id: number;
  title: string;
  fullname: string;
  designation: string;
  profile: string;
  picture: string;
}



const ManagementStaffDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<ManagementStaffDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getSingleManagementStaff();
  }, [id]);

  const getSingleManagementStaff = async () => {
    try {
      const res = await endpoint.get(`/management-staff/${id}`);
      console.log("Single Management Staff Detail", res.data.data);
      setDetails(res.data.data.list);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  const stripHtmlTags = (str: string) => {
    if (!str) return "";
    return str.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, " ");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading management staff data</div>;

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <div className="">
          <div className="d-flex justify-content-center">
            <div className="row">
              <div className="card col-lg-12">
                <img 
                  src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${details?.picture}`}
                  alt={`${details?.fullname} picture`}
                  style={{
                    width: '400px',
                    height: '420px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="rv-blog-details__title text-center mt-3" style={{color: 'green', fontWeight: 'bold'}}>
          {details?.title} {details?.fullname}
        </h3>
        <p className="text-center" style={{color: 'green', fontWeight: 'bold'}}>{details?.designation}</p>
        <p className="rv-blog-details-descr__txt" style={{ textAlign: 'justify' }}>
          {details?.profile && stripHtmlTags(details.profile)}
        </p>
      </div>
    </section>
  );
};

export default ManagementStaffDetail;
