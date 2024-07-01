"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import endpoint from "../../context/endpoint";
import { useParams } from 'next/navigation';
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

type Props = {
  designation: string;
  picture: string;
  fullname: string;
  profiles: string;
};

const CurrentCouncilMemberDetail = (params: { id: number }, { designation, picture, fullname, profiles }: Props) => {
  const id = params.id;
  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getSingleCurrentCouncilMember();
  }, [id]);

  const getSingleCurrentCouncilMember = async () => {
    try {
      const res = await endpoint.get(`/current-council-members/${id}`);
      console.log("Single Current Council Member Detail", res.data.data);
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
  if (error) return <div>Error loading current council member data</div>;

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
                    height: '380px',
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
          {stripHtmlTags(details?.profiles)}
        </p>
      </div>
    </section>
  );
};

export default CurrentCouncilMemberDetail;
