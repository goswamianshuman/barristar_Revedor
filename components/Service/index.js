import React from "react";
import { Parallax } from "react-parallax";
import { Grid } from "@mui/material";
import { services } from "../../data/data";

const Service = ({ className = "" }) => {
  return (
    <div className={`serviceArea ${className}`}>
      <Grid container className="container">
        <div className="serviceGrid">
          {services.map((service, i) => (
            <div key={i} className="serviceWrap">
              <div className="serviceItem">
                <div className="serviceIcon">{service.icon}</div>
                <div className="serviceText">
                  <span>{service.subtitle}</span>
                  <h3>{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Grid>
    </div>
  );
};
export default Service;
