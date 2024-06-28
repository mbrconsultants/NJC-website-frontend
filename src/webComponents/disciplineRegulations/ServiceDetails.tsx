import React from "react";
// import AccordionSection from "../accordion/AccordionSection";
// import ImgAnimateLeftToRight from "../utils/ImgAnimateLeftToRight";
// import ServiceSearchbar from "./ServiceSearchbar";
import ServiceCategorySection from "./ServiceCategorySection";
// import ServiceDetailsQuote from "./ServiceDetailsQuote";
// import ServiceDetailCard from "./ServiceDetailCard";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import BlogRecentSection from "./BlogRecentSection";
type Props = {
  img: string;
  title: string;
};
const ServiceDetails = ({ img, title }: Props) => {
  // interface ImgAnimateLeftToRightProps {
  //   src: string;
  //   alt: string;
  //   style?: React.CSSProperties;
  // }

  // const ImgAnimateLeftToRight: React.FC<ImgAnimateLeftToRightProps> = ({
  //   src,
  //   alt,
  //   style,
  // }) => <img src={src} alt={alt} style={style} />;

  return (
    <section className="rv-service-details rv-section-spacing">
      <div className="container">
        <div className="row rv-service-details__row g-30 justify-content-center">
          <div className="col-lg-8">
            <div className="rv-service-details__left">
              {/* <div className="rv-service-details__img">
                <ImgAnimateLeftToRight
                  src="assets/img/chairman9732547091716559972.jpg"
                  alt="Council Chairman Image"
                  style={{
                    height: "570px",
                    width: "854px",
                    border: "2px solid green",
                  }}
                />
              </div> */}

              <h3 className="rv-service-details__title">{title}</h3>
              {/* <ServiceDetailsQuote /> */}

              <DivAnimateYAxis>
                <h5>JUDICIAL DISCIPLINE REGULATIONS 2017</h5>
                <p className="rv-service-details__descr">
                  The following is the "Code of Conduct" for Judicial Officers
                  of the Federal Republic of Nigeria:
                </p>
                <br />
                <h5>1. CITATION AND COMMENCEMENT</h5>
                <p className="rv-service-details__descr">
                  These Regulations may be cited as the Judicial Discipline
                  Regulations and shall come into force on the 29th Day of June
                  2017.
                </p>
                <p className="rv-service-details__descr">
                  2. (a) Whenever the Head of a Federal Court proposes to embark
                  on the process for appointment of candidates or a candidate to
                  the office of Judicial Officer of a Federal Court of which
                  he/she is the head, notice shall be given to the Chief
                  Justice/Chairman of the Federal Judicial Service Commission
                  stating the number of Judicial Officers intended to be
                  proposed for appointment.
                </p>{" "}
                <p className="rv-service-details__descr">
                  2. (b) In like manner whenever the Chairman of the Judicial
                  Service Commitee of the Federal Capital Territory proposes to
                  embark on the process for appointment of candidates or
                  candidate to the Office of Judicial Officer in the Federal
                  Capital Territory, notice shall be given to the Chief Justice
                  / Chairman of the National Judicial Council stating the number
                  of Judicial Officers intended to be proposed for appointment.
                </p>
                <p className="rv-service-details__descr">
                  3. A copy of the notice sent to the Governor or, as the case
                  may be, to the Chief Justice/Chairman of the Federal Judicial
                  Service Commission/National Judicial Council, shall be
                  forwarded to the Secretary at the same time as such notice is
                  given to the Governor or, as the case may be to the Chief
                  Justice/Chairman of the Federal Judicial Service
                  Commission/National Judicial Council as provided in Rule 2(1)
                  or Rule 2(2).
                </p>
                <p className="rv-service-details__descr">
                  4. The Secretary shall upon receipt of the notice, advise the
                  Chief Justice/Chairman of the National Judicial Council in
                  regard to the number of Judicial Officers that can be
                  appointed pursuant to the notice, having regard to relevant
                  budgetary provision in the budget of the Council for the year.
                  Upon consideration of the advice, the Chief Justice/Chairman
                  of the National Judicial Council shall notify the Chairman of
                  the State Judicial Service Commission/Committee or, as the
                  case may be, the Head of the Court concerned that the exercise
                  may (i)be proceeded with; or, (ii) not to be proceeded with;
                  or, (iii) may be proceeded with, but with a specified
                  reduction in the number of Judicial Officers proposed to be
                  appointed.
                </p>
                <p className="rv-service-details__descr">
                  5. The decision of the Chief Justice/Chairman of the National
                  Judicial Council shall be communicated in writing to the
                  Chairman of the Judicial Service Commission/Committee, or as
                  the case may be, the Head of Court and shall be final unless
                  the Head of Court shows grounds to the satisfaction of the
                  Chief Justice/Chairman of the National Judicial Council why it
                  should be reviewed.
                </p>
                <p className="rv-service-details__descr">
                  6. A copy of the notice given pursuant to Rule 2(1) and the
                  Governor's response thereto shall be served on each Member of
                  the Judicial Service Commission/Committee concerned.
                </p>
                <h5>RULE THREE</h5>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
                <p className="rv-service-details__descr">
                  i. call expression of interest by suitable candidates by way
                  of public notice placed on the website of the Judicial Service
                  Commission/Committee concerned, notice Boards of the Courts
                  and notice Boards of Nigeria Bar Association Branches;
                </p>
                <p className="rv-service-details__descr">
                  ii. write to every other head of Superior Courts of Record in
                  Nigeria and to every Judicial officer of the Court concerned
                  asking for nomination of suitable candidates for the proposed
                  judicial appointment;
                </p>
                <p className="rv-service-details__descr">
                  iii. write, in the case of appointment to a Federal Court, to
                  the President, Nigerian Bar Association; or, in the case of
                  appointment to a State Court, to the Chairman of every Branch
                  of the Nigerian Bar Association in the State concerned, asking
                  for nomination of suitable candidates for the proposed
                  judicial appointment and requesting that he/she brings to the
                  notice of suitable candidates the call for expression of
                  interest by each of them.
                </p>
                <p className="rv-service-details__descr">
                  1. (b) In the case of appointment of Judicial Officers for
                  Court of Appeal and Supreme Court of Nigeria, the President of
                  the Court of Appeal/Chief Justice of Nigeria shall as the case
                  may be, write to Heads of Courts, serving Justices of Court of
                  Appeal/Supreme Court of Nigeria and President of the Nigerian
                  Bar Association asking for nomination of suitable Judicial
                  Officers/Legal Practitioners for appointment as Justice of
                  Court of Appeal/Supreme Court of Nigeria.
                </p>
                <p className="rv-service-details__descr">
                  2. Any person nominating a candidate must do so in writing and
                  indicate clearly and in detail, that he/she has sufficient
                  personal and professional knowledge of the candidate's
                  requisite attributes for a reasonable period of time as would
                  make him competent to make the nomination. He/she shall
                  expressly certify that from his/her personal knowledge of the
                  candidate, the candidate possesses the qualities set out in
                  Rule 4 (4)(i)(a)-(b) of these Rules; and, where applicable the
                  qualities set out in Rule 4(4)(i)(d) and/or (e).
                </p>
                <p className="rv-service-details__descr">
                  3. The Judicial Service Commission/Committee shall specify the
                  closing date for the receipt of applications and/or
                  nominations in the call of expression of interest and in the
                  request for nomination.
                </p>
                <p className="rv-service-details__descr">
                  4. Soon after the closing date for the receipt of applications
                  and or nominations, the Chairman of the Judicial Service
                  Commission/Committee concerned shall make a provisional
                  shortlist on the merits consisting of not less than twice the
                  number of Judicial Officers intended to be appointed at the
                  particular time and circulate the provisional shortlist
                  together with a request for comments on the suitability or
                  otherwise of any of the short listed candidates, as follows:
                </p>
                <p className="rv-service-details__descr">
                  i. among all serving and retired Judicial Officers of the
                  Court to which an appointment of a Judicial Officer, other
                  than the Head of a Court, is proposed to be made;
                </p>
                <p className="rv-service-details__descr">
                  ii. among all serving and retired Heads of the relevant State
                  or Federal Court, including retired Chief Justices of Nigeria
                  and retired Presidents of the Court of Appeal, in the case of
                  appointment of a Head of Court;
                </p>
                <p className="rv-service-details__descr">
                  iii. among the Nigerian Bar Association branches in the State
                  concerned where the appointment is to a State Court; provided
                  that where the appointment is to a Federal Court the shortlist
                  shall only be sent to the President of the Nigerian Bar
                  Association; and
                </p>
                <p className="rv-service-details__descr">
                  iv. Among every Member of the Judicial Service
                  Commission/Committee concerned.
                </p>
                <p className="rv-service-details__descr">
                  5. The Chairman of the Judicial Service Commission/Committee
                  shall place the provisional shortlist before the Judicial
                  Service Commission/Committee for approval and upon such
                  approval, with or without modification; the provisional
                  shortlist shall become the final list.
                </p>
                <p className="rv-service-details__descr">
                  6. In carrying out the provisional short listing exercise, the
                  Chairman of the Judicial Service Commission/Committee shall
                  take into consideration as much as possible, (i) professional
                  expertise and competence, including in the case of appointment
                  of Judges from the High Court to the Court of Appeal and
                  Justices of the Court of Appeal/Chief Judges/Legal
                  Practitioners/academicians to the Supreme Court, the quality
                  of judgments and performance and demonstration of judicial
                  skills of the Judge; and in the case of appointment from the
                  Bar, evidence of 6 contested cases in the last 5 years; (ii)
                  sound knowledge of law, (iii) seniority at the Bar and or the
                  Bench, (iv) Federal character or geographical spread and where
                  necessary and possible, without compromising the independence
                  of the Judiciary or allowing politics to permeate or influence
                  the appointment.
                </p>
                <p className="rv-service-details__descr">
                  7. The Chairman of the Judicial Service Commission/Committee
                  shall not include in the provisional shortlist any person
                  whose reputation in the locality is low or had been tarnished;
                  and, where applicable, shall not include any Judicial Officer
                  whose performance has been consistently rated low or not
                  satisfactory in Judicial performance evaluation reports.
                </p>
                <p className="rv-service-details__descr">
                  8. Where the Chairman of the Judicial Service
                  Commission/Committee has excluded any person from the
                  provisional shortlist on any of the grounds stated in the
                  provisional shortlist placed before the Judicial Service
                  Commission/Committee.
                </p>
                <h5>RULE FOUR</h5>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
                <p className="rv-service-details__descr">
                  1. (a) Upon receipt by the Judicial Service
                  Commission/Committee concerned of the decision of the Chief
                  Justice/Chairman of the National Judicial Council rendered
                  pursuant to Rule 2(4) advising that the exercise be proceeded
                  with, the relevant Judicial Service Commission/Committee
                  shall:
                </p>
              </DivAnimateYAxis>

              {/* <ServiceDetailCard /> */}

              {/* <AccordionSection /> */}
            </div>
          </div>

          <DivAnimateYAxis className="col-lg-4 col-md-6 col-9 col-xxs-12">
            <BlogRecentSection />
            {/* <ServiceSearchbar /> */}

            <ServiceCategorySection />
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
