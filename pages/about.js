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
      <Service className="bgColor" />
      <About className="aboutAreaStyleTwo" />
      <ServiceArea
        className="ourServiceAreaStyleTwo"
        title="How Can We Help You"
        subTitle="Area Of Practice"
      />
      <Testmonial />
      <CounterArea fullWidth={true} className="counterAreaStyleTwo" />
      <TeamMember
        title="Qualified Attorneys "
        subTitle="Meet Our Experts"
        slider={true}
      />
      <BlogArea
        className="blogArea"
        title="Latest News"
        subTitle="From Our Blog"
      />
      <NewsLetter />
    </Fragment>
  );
};
export default AboutPage;
