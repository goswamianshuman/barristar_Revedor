import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import SectionTitle from "../Title";
import { portfolioItem, portfolio_text } from "../../data/data";

const Portfolio = ({ className = "", fullWidth }) => {
  return (
    <Grid className={`portfolioArea ${className}`}>
      <Grid container spacing={4} className="container">
        <Grid item xs={12}>
          <SectionTitle
            title={portfolio_text[0].title}
            subTitle={portfolio_text[0].subTitle}
          />
        </Grid>
      </Grid>

      {!fullWidth ? (
        <Grid className="portfolioWrapper">
          {portfolioItem.map((portfolio, i) => (
            <Grid key={i} className="portfolioItem">
              <img src={portfolio.image} alt={portfolio.title} />
              <Grid className="portfolioContent">
                <p>{portfolio.subtitle}</p>
                <h3>
                  <Link
                    legacyBehavior
                    href={`/case-stadies/[id]`}
                    as={`/case-stadies/${portfolio.id}`}
                  >
                    <p>{portfolio.title}</p>
                  </Link>
                </h3>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={4} className="container">
          {portfolioItem.map((portfolio, i) => (
            <Grid key={i} item md={4} sm={6} xs={12}>
              <Grid className="portfolioItem">
                <img src={portfolio.image} alt={portfolio.title} />
                <Grid className="portfolioContent">
                  <p>{portfolio.subtitle}</p>
                  <h3>
                    <Link
                      legacyBehavior
                      href={`/case-stadies/[id]`}
                      as={`/case-stadies/${portfolio.id}`}
                    >
                      <p>{portfolio.title}</p>
                    </Link>
                  </h3>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};
export default Portfolio;
