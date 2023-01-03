import React from "react";
import Form from "../Form";
import { Parallax } from "react-parallax";
import { Grid } from "@mui/material";
import { contact_section_item } from "../../data/data";

const ContactArea = ({ className = "" }) => {
  return (
    <div className={`contactArea ${className}`}>
      <Grid container spacing={4} className="container">
        <Grid item lg={5} xs={11}>
          <Grid className="contactInfo">
            <span>{contact_section_item[0].subtitle}</span>
            <h2>{contact_section_item[0].title}</h2>
            <h6>{contact_section_item[0].textOne}</h6>
            <p>{contact_section_item[0].textTwo}</p>
          </Grid>
        </Grid>
        <Grid item lg={7} xs={12}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};
export default ContactArea;
