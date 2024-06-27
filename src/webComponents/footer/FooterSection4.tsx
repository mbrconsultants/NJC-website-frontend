import Link from "next/link";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import NewsletterForm2 from "../form/NewsletterForm2";
type Props = {
  style: string;
  logo: string;
};
const FooterSection4 = ({ style, logo }: Props) => {
  return (
    <footer className={`rv-inner-footer bg-dark`}>
      <div className="container">
        <DivAnimateYAxis className="rv-8-footer-middle">
          <div className="row g-4 justify-content-xl-between justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12 col-xxs-12">
              <div className="rv-1-footer__about">
                <Link href="/">
                <img src="/assets/img/njcNewLogo.jpg" alt="logo" style={{height:"100px", width:"100px"}}/>

                </Link>
                <p className="rv-1-footer__about-txt">
                  The National Judicial Council is one of
                  the Federal Executive Bodies created by virtue of Section 153 of the 1999 Constitution of the Federal Republic of Nigeria.
                </p>
                <div className="rv-1-socials rv-inner-socials">
                  <Link href="https://x.com/njcNig" target="blank">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="#">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-6 col-xxs-12">
              <div className="rv-1-footer-widget rv-inner-footer-widget">
                <h5 className="rv-1-footer-widget__title">Useful Links</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <Link href="#">Supreme Court</Link>
                  </li>
                  <li>
                    <Link href="#">Nigerian Institute of Advance Legal Studies</Link>
                  </li>
                  <li>
                    <Link href="#">International Labour Organisation ILO</Link>
                  </li>
                  <li>
                    <Link href="#">International Centre for Nigerian Law ICNL</Link>
                  </li>
                  {/* <li>
                    <Link href="#">Constitutions of the Federal Repulic of Nigeria</Link>
                  </li>
                    <li>
                    <Link href="#">Federal Judicial Service Commission</Link>
                  </li>
                  <li>
                    <Link href="#">Nigeria Law Report</Link>
                  </li>
                  <li>
                    <Link href="#">Nigeria Bar Association</Link>
                  </li>
                  <li>
                    <Link href="#">Foreign & Int'l Labour Law</Link>
                  </li>
                  <li>
                    <Link href="#">Westlaw International</Link>
                  </li>
                   <li>
                    <Link href="#"> National Judicial Institute</Link>
                  </li> */}
                 
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-6 col-xxs-12">
              <div className="rv-1-footer-widget rv-inner-footer-widget">
                <h5 className="rv-1-footer-widget__title">Pages</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <Link href="#">About NJC</Link>
                  </li>
                  <li>
                    <Link href="#">Contact NJC</Link>
                  </li>
                
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-5 col-md-6 col-12 col-xxs-12">
              <div className="rv-1-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Newsletter Signup</h5>
                <NewsletterForm2 />
              </div>
            </div>
          </div>
        </DivAnimateYAxis>

        <div className="rv-2-footer rv-8-footer-bottom">
          <div className="row gy-3 align-items-center">
            <DivAnimateXAxis position={-60} className="col-md-8">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} MBR Computer Consultants
                by site
              </p>
            </DivAnimateXAxis>
            <DivAnimateXAxis
              position={60}
              className="col-md-4 text-center text-md-end"
            >
              <div className="rv-2-footer__nav">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Term of Service</Link>
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection4;
