"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import endpoint from "../../context/endpoint";

interface CurrentCouncilData {
  id: number;
  title: string;
  fullname: string;
  designation: string;
  position: string;
  zone: string;
  profiles: string;
  picture: string;
}

const CurrentCouncilMembersSection = () => {
  const [data, setData] = useState<CurrentCouncilData[]>([]);
  const [currentCouncilData, setCurrentCouncilData] = useState<CurrentCouncilData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCurrentCouncilData = async () => {
    try {
      const res = await endpoint.get("/current-council-members");
      console.log("Current Council Data", res.data.data);
      setData(res.data.data);
      setCurrentCouncilData(res.data.data.getCurrentMembers);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentCouncilData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading council members data</div>;

  return (
    <section className="rv-inner-team rv-section-spacing rv-team-members-section">
      <div className="container">
        <div className="rv-inner-team-row" data-aos="fade-up">
          <div className="row row-cols-lg-3 row-cols-2 row-cols-xxs-1 g-30">
            {currentCouncilData.map((item) => (
              <div className="col" key={item.id}>
                <div className="rv-9-member rv-inner-member">
                  <div className="rv-9-member__img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${item.picture}`}
                      alt={`${item.fullname} picture`}
                      style={{
                        width: '450px',
                        height: '380px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div className="rv-9-member__txt">
                    <span className="rv-3-project__sub-title">
                      {item.designation}
                    </span>
                    <h5 className="rv-3-project__title">
                      <Link href={`/currentcouncilmember-details/${item.id}`}>{item.fullname}</Link>
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

export default CurrentCouncilMembersSection;
