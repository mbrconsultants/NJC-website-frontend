"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import endpoint from "../../context/endpoint";

<<<<<<< HEAD
const ManagementStaffSection = () => {
  const [data, setData] = useState([]);
  const [managementStaffData, setManagementStaffData] = useState<
    { id: number; rank: number; title: string; fullname: string; designation: string; position: string; picture: string; }[]
  >([]);
=======
interface ManagementStaffData {
  id: number;
  rank: number;
  title: string;
  fullname: string;
  designation: string;
  position: string;
  picture: string;
}

const ManagementStaffSection = () => {
  const [data, setData] = useState<ManagementStaffData[]>([]);
  const [managementStaffData, setManagementStaffData] = useState<ManagementStaffData[]>([]);
>>>>>>> main
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchManagementStaffData = async () => {
    try {
      const res = await endpoint.get("/management-staff");
      console.log("Management Staff Data", res.data.data);
      setData(res.data.data);
      setManagementStaffData(res.data.data.getManagementStaff);
      setLoading(false);
    } catch (err: any) {
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
            {managementStaffData.map((item) => (
              <div className="col" key={item.id}>
                <div className="rv-9-member rv-inner-member">
                  <div className="rv-9-member__img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${item.picture}`}
                      alt={`${item.fullname} picture`}
                      style={{
                        width: '450px',
                        height: '380px',
<<<<<<< HEAD
                        // objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className="rv-9-member__txt text-center">
=======
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div className="rv-9-member__txt">
>>>>>>> main
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
