import React, { Fragment } from "react";
import Head from "next/head";
// components
import Breadcumb from "../components/Breadcumb";
import Service from "../components/Service";
import About from "../components/About";
import ServiceArea from "../components/ServiceArea";
import Testmonial from "../components/Testmonial";
import TeamMember from "../components/TeamMember";
import CounterArea from "../components/CounterArea";
import BlogArea from "../components/BlogArea";
import NewsLetter from "../components/Newsletter";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "About us" }];

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About us</title>
      </Head>
      <Breadcumb
        title="About Us"
        breadcumbMenu={breadcumbMenu}
        background="/images/breadcumb/1.jpg"
      />
      {/* <Service className="serviceAreaStyleTwo" /> */}
      <About className="aboutAreaStyleTwo" />
      <ServiceArea className="ourServiceAreaStyleTwo" />
      <Testmonial />
      <CounterArea fullWidth={true} className="counterAreaStyleTwo" />
      {/* <TeamMember slider={true} /> */}
      {/* <BlogArea className="blogArea" /> */}
      {/* <NewsLetter /> */}
    </Fragment>
  );
};
export default AboutPage;
