"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import endpoint from "../../context/endpoint";


const ManagementStaffSection = () => {

  const [data, setdata] = useState([]);
  const [managementStaffData, setManagementStaffData] = useState<{ id: number; rank: number; title: string; fullname: string; designation: string; position: string; picture: string;}>({
    id: 0,
    rank: 0,
    title: "",
    fullname: "",
    designation: "",
    picture: "",
    position: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchManagementStaffData = async () => {
    try {
      const res = await endpoint.get("/management-staff");
      console.log("Management Staff Data", res.data.data);
      setdata(res.data.data);
      setManagementStaffData(res.data.data.getManagementStaff);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManagementStaffData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading management staff data</div>;

  return (
    <section className="rv-inner-team rv-section-spacing rv-team-members-section">
      <div className="container">
        <div className="rv-inner-team-row" data-aos="fade-up">
          <div className="row row-cols-lg-3 row-cols-2 row-cols-xxs-1 g-30">
            {managementStaffData && managementStaffData.map((item) => (
              <div className="col" key={item.id}>
              <div className="rv-9-member rv-inner-member">
                <div className="rv-9-member__img">
                  <img
                    src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${item.picture}`}
                    alt={`${item.fullname} picture`}
                    style={{
                      width: '320px',
                      // height: '350px',
                      // objectFit: 'cover',
                      // borderRadius: '50%'
                    }}
                  />
                </div>
                <div className="rv-9-member__txt">
                  <span className="rv-3-project__sub-title">
                    {item.designation}
                  </span>
                  <h5 className="rv-3-project__title">
                    <Link href={`/managementstaff-details/${item.id}`}>{item.fullname}</Link>
                  </h5>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementStaffSection;
