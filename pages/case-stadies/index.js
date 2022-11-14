import React, { Fragment } from "react";
import Head from "next/head";
import Breadcumb from "../../components/Breadcumb";
import NewsLetter from "../../components/Newsletter";
import Portfolio from "../../components/Portfolio";
const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Case Studies" }];

const CaseStudies = () => {
  return (
    <Fragment>
      <Head>
        <title>Case Studies</title>
      </Head>
      <Breadcumb
        className="breadcumbArea"
        title="Case Stadies"
        breadcumbMenu={breadcumbMenu}
        background="/images/breadcumb/1.jpg"
      />

      <Portfolio fullWidth={true} className="portfolioAreaStyleTwo" />

      {/* <NewsLetter /> */}
    </Fragment>
  );
};
export default CaseStudies;
