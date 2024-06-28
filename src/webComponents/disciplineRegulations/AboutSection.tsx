import React from "react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import "./AboutSection.css";

type Props = {
  btnStyle?: string;
};

const AboutSection: React.FC<Props> = ({ btnStyle }: Props) => {
  const classes = {
    textAlign: "text-center",
    justify: "mx-auto d-block",
    justifyText: "text-justify",
    width: "w-100",
    margin: "mx-auto",
    border: "border border-success border-9",
    rounded: "rounded-circle", // Bootstrap class for rounded circle
    greenBorder: "green-border", // Custom class for green border
  };

  return (
    <section className="rv-1-about rv-section-spacing">
      <div className="container position-relative">
        <div className="row g-3 justify-content-center">
          {/* First DivAnimateXAxis */}
          <div className="col-lg-8">
            <DivAnimateXAxis>
              <div className="rv-1-about__txt">
                <div className="rv-1-section__heading">
                  <h1 className={classes.textAlign}>CHAIRMAN OF THE COUNCIL</h1>
                </div>
                <div className={classes.margin}>
                  <img
                    src="assets/img/chairman9732547091716559972.jpg"
                    alt="image-chairman-of-the-council"
                    className={`${classes.rounded} ${classes.greenBorder} ${classes.justify}`}
                  />
                  <a
                    href="#"
                    className={`rv-1-def-btn ${btnStyle ? btnStyle : ""}`}
                  >
                    <span className={"txt"}>
                      HON. JUSTICE OLUKAYODE ARIWOOLA
                    </span>
                  </a>
                </div>
                <div className={classes.margin}>
                  <p className="justify-text-container justify-text">
                    Hon. Justice Ariwoola was born to the Ariwoola family on
                    22nd August, 1954, in Iseyin Local Government area of Oyo
                    State. His Lordship started his educational career at the
                    Local Authority Demonstration School, Oluwole in Iseyin
                    Local Government Area of Oyo State between 1959 and 1967. He
                    was in the Muslim Modern School in the same town between
                    1968 and 1969 before proceeding to Ansar-Ud-Deen High
                    School, Saki in Oyo North of Oyo State. His Lordship studied
                    law at the University of Ife (now Obafemi Awolowo
                    University), Ile Ife and bagged a bachelor of law degree
                    with honors in July, 1980. In July 1981, Hon. Justice
                    Ariwoola was called to the Nigeria bar and got enrolled at
                    the Supreme Court of Nigeria as a Solicitor and Advocate.
                    His Lordship started his career as a State Counsel as a
                    National Youth Service Corp (NYSC) at the Ministry of
                    Justice, Akure, Ondo State and later as a Legal Officer in
                    the Ministry of Justice in Oyo State until 1988 when he
                    voluntarily left the State Civil Service for private
                    practice. His Lordship worked as Counsel in-Chambers of
                    Chief Ladosu Ladapo, SAN between October, 1988 and July
                    1989. Thereafter, his Lordship established Olukayode
                    Ariwoola & Co – a firm of legal Practitioners and
                    Consultants in Oyo town in August, 1989 before he was
                    appointed in November, 1992 as a Judge of the Oyo State
                    Judiciary. Justice Ariwoola served as Chairman, Board of
                    Directors, Phonex Motors Ltd – one of Oodua Investment
                    conglomerate between 1988 and 1992. Chairman, Armed Robbery
                    Tribunal, Oyo State between May 1993 and September, 1996
                    before he was posted out of the headquarters, Ibadan to Saki
                    High Court. His Lordship served on the Election Tribunals in
                    Zamfara and Enugu States in 1999. On Election Appeal Courts
                    in Port-Harcourt, Enugu, Benin, Yola and Ilorin at various
                    times. He was sworn in as a Judge of the High Court on 2nd
                    November, 1992, as a Justice of the Court of Appeal (JCA) on
                    22nd November, 2005 and again as a Justice of the Supreme
                    Court of Nigeria (JSC) on 22nd November, 2011. Before his
                    elevation to the Supreme Court, his lordship served as
                    Justice of Court of Appeal in Kaduna, Enugu and Lagos
                    Divisions. He is also a fellow of International Dispute
                    Resolution Institute (FIDRI) having been inducted in Dubai,
                    U.A.E in 2014. His Lordship has attended many International
                    and National conferences and workshops in France, Atlanta
                    Georgia, UK and Dubai, UAE. Honourable Justice Ariwoola is
                    happily married with children and he loves reading,
                    listening to good music, photography and shopping.
                  </p>
                </div>
              </div>
            </DivAnimateXAxis>
          </div>

          {/* Second DivAnimateXAxis */}
          <div className="col-lg-4">
            <DivAnimateXAxis>
              <div className="rv-1-about__img reveal">
                <img src="assets/img/about-img-1.jpg" alt="Image" />
              </div>
            </DivAnimateXAxis>
          </div>
        </div>

        {/* Additional content if needed */}
      </div>
    </section>
  );
};

export default AboutSection;
