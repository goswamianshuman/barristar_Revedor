import React, { Fragment } from "react";
import Head from "next/head";
import { Grid } from "@mui/material";
import Breadcumb from "../../components/Breadcumb";
import NewsLetter from "../../components/Newsletter";
import CetagorySidebar from "../../components/CetagorySidebar";
import SingleContentArea from "../../components/SingleContentArea";
import SearchSidebar from "../../components/SearchSidebar";
import RecentPosts from "../../components/RecentPosts";
import Portfolio from "../../components/Portfolio";
import { portfolioItem } from "../../data/data";

function getPostDataById(id) {
  for (let i = 0; i < portfolioItem.length; i++) {
    if (portfolioItem[i].id === parseInt(id)) {
      return portfolioItem[i];
    }
  }
}

const CaseStadiesDetails = ({ id }) => {
  const profile = getPostDataById(id);
  const breadcumbMenu = [
    { name: "Home", route: "/" },
    { name: "Practice", route: "/practice" },
    { name: profile.title },
  ];
  return (
    <Fragment>
      <Head>
        <title>Portfolio {profile.title}</title>
      </Head>
      <Breadcumb
        title={profile.title}
        breadcumbMenu={breadcumbMenu}
        background="/images/breadcumb/1.jpg"
      />
      <Grid className="ptb100 singlePortfolioArea">
        <Grid container spacing={4} className="container">
          <Grid item md={8} xs={12}>
            <SingleContentArea service={profile} />
          </Grid>
          <Grid item md={4} xs={12}>
            <aside>
              <SearchSidebar />
              <CetagorySidebar title="Category" />
              <RecentPosts />
            </aside>
          </Grid>
        </Grid>
      </Grid>
      <Portfolio
        title="Our Resent Case Studies"
        subTitle="Here Our Best Work"
        fullWidth={true}
        portfolioItem={portfolioItem.slice(3, 6)}
        className="portfolioAreaStyleTwo portfolioAreaStyleFour"
      />
    </Fragment>
  );
};
export default CaseStadiesDetails;

CaseStadiesDetails.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};
