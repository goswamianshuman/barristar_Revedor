import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Parallax } from "react-parallax";
import SectionTitle from "../Title";
import { services_section, services_section_item } from "../../data/data";

const ServiceArea = ({ className = "" }) => {
  return (
    <div className={`ourServiceArea ${className}`}>
      <Grid container spacing={4} className="container">
        <Grid item xs={11}>
          <SectionTitle
            title={services_section_item[0].title}
            subTitle={services_section_item[0].subTitle}
          />
        </Grid>
        {services_section.map((service, index) => (
          <Grid item xs={11} lg={4} sm={6} key={index}>
            <Grid className="serviceWrap">
              <Grid className="serviceIcon">{service.icon}</Grid>
              <Grid className="serviceContent">
                <h3>
                  <Link
                    legacyBehavior
                    href={`/practice/[id]`}
                    as={`/practice/${service.id}`}
                  >
                    <p>{service.title}</p>
                  </Link>
                </h3>
                <p>{service.content}</p>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ServiceArea;
