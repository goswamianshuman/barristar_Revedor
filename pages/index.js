import React, { Fragment } from "react";
import Head from "next/head";
// components
import HeroSlider from "../components/HeroSlider";
import Service from "../components/Service";
import About from "../components/About";
import ServiceArea from "../components/ServiceArea";
// import Portfolio from "../components/Portfolio";
// import Testmonial from "../components/Testmonial";
import ContactArea from "../components/ContactArea";
import TeamMember from "../components/TeamMember";
// import CounterArea from "../components/CounterArea";
import BlogArea from "../components/BlogArea";
// import NewsLetter from "../components/Newsletter";

// const portfolio = [
//   {
//     image: "/images/studies/1.jpg",
//     title: "General Service",
//     subtitle: "Corporate",
//     id: 1,
//   },
//   {
//     image: "/images/studies/2.jpg",
//     title: "Personal Issue",
//     subtitle: "General",
//     id: 2,
//   },
//   {
//     image: "/images/studies/3.jpg",
//     title: "Business Accounting",
//     subtitle: "Business",
//     id: 3,
//   },
//   {
//     image: "/images/studies/4.jpg",
//     title: "Accounting issue",
//     subtitle: "Criminal",
//     id: 4,
//   },
//   {
//     image: "/images/studies/5.jpg",
//     title: "Business Accounting",
//     subtitle: "Family Issue",
//     id: 5,
//   },
// ];

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Home page</title>
      </Head>
      <HeroSlider className="heroSliderAreaStyleTwo" />
      <Service className="serviceAreaStyleTwo" />
      <About className="aboutAreaStyleTwo" />
      <ServiceArea className="ourServiceAreaStyleTwo" />
      {/* <Portfolio
        title="Our Resent Case Studies"
        subTitle="Here Our Best Work"
        portfolioItem={portfolio}
      /> */}
      {/* <Testmonial /> */}
      <ContactArea />
      <TeamMember slider={true} />
      {/* <CounterArea /> */}
      <BlogArea className="blogArea" />
      {/* <NewsLetter /> */}
    </Fragment>
  );
};
export default Home;
