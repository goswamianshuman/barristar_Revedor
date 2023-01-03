import React from "react";
import { Grid, Button } from "@mui/material";
import Link from "next/link";
import MoneyIcon from "@mui/icons-material/Money";
import SectionTitle from "../Title";
import { pricingpanel, pricing_text } from "../../data/data";

const PricingTable = ({ className = "", title, subTitle }) => {
  return (
    <Grid className={`pricingTableArea ${className}`}>
      <Grid container spacing={4} className="container">
        <Grid item xs={11}>
          <SectionTitle
            title={pricing_text[0].title}
            subTitle={pricing_text[0].subTitle}
          />
        </Grid>
        {pricingpanel.map((pricing, i) => (
          <Grid key={i} item md={4} sm={4} xs={11}>
            <Grid className="pricingWrapper">
              <MoneyIcon />
              <h3>{pricing.title}</h3>
              <h2>{pricing.price}</h2>
              <p>{pricing.text}</p>
              <Button className="btnStyle">Get Started</Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default PricingTable;
