import React from "react";
import HeaderSection from "../header/HeaderSection";
import HeaderSection7 from "../header/HeaderSection7";

import FooterSection4 from "../footer/FooterSection4";
type Props = {
  children: React.ReactNode;
};
const InnerLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderSection7  />
      {children}
      <FooterSection4 style="" logo="/assets/img/logo-light.png" />
    </>
  );
};

export default InnerLayout;
