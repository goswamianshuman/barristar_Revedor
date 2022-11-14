import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import Head from "next/head";
import Breadcumb from "../../components/Breadcumb";
import NewsLetter from "../../components/Newsletter";
import Form from "../../components/Form";
import { contactData } from "../../data/data";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Contact" }];

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact us</title>
      </Head>
      <Breadcumb
        className="breadcumbArea"
        title="Contact"
        breadcumbMenu={breadcumbMenu}
        background="/images/breadcumb/1.jpg"
      />

      <Grid className="contactusPageArea">
        <Grid container spacing={4} className="container">
          <Grid item md={7} xs={12}>
            <Grid className="contactUsInfo">
              <h3>{contactData[0].title}</h3>
              <p>{contactData[0].detail}</p>
              <h4>Address</h4>
              <span>{contactData[0].address}</span>
              <h4>Phone</h4>
              <span>{contactData[0].phone_one}</span>
              <span>{contactData[0].phone_two}</span>
              <h4>Email</h4>
              <span>{contactData[0].email}</span>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}>
            <Grid className="contactUSForm">
              <h3>Quick Contact Form</h3>
              <Form addressInfo={true} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Contact;
