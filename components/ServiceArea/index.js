import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Parallax } from "react-parallax";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import AccessibilityTwoToneIcon from "@mui/icons-material/AccessibilityTwoTone";
import AssignmentIndTwoToneIcon from "@mui/icons-material/AssignmentIndTwoTone";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import CastForEducationTwoToneIcon from "@mui/icons-material/CastForEducationTwoTone";
import SectionTitle from "../Title";

const services = [
  {
    icon: <PeopleAltTwoToneIcon />,
    title: "Family Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
    id: 1,
  },
  {
    icon: <PermIdentityTwoToneIcon />,
    title: "Personal Injury",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
    id: 2,
  },
  {
    icon: <AccessibilityTwoToneIcon />,
    title: "Business Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
    id: 3,
  },
  {
    icon: <AssignmentIndTwoToneIcon />,
    title: "Criminal Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
    id: 4,
  },
  {
    icon: <CastForEducationTwoToneIcon />,
    title: "Education Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
    id: 5,
  },
  {
    icon: <HomeWorkTwoToneIcon />,
    title: "Real Estate Law",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of ",
    id: 6,
  },
];

const ServiceArea = ({ className = "", title, subTitle }) => {
  return (
    <Parallax
      bgImage="/images/practice/1.jpg"
      bgImageAlt="the cat"
      contentClassName={`ourServiceArea ${className}`}
      strength={200}
    >
      <Grid container spacing={4} className="container">
        <Grid item xs={12}>
          <SectionTitle title={title} subTitle={subTitle} />
        </Grid>
        {services.map((service, index) => (
          <Grid item xs={12} lg={4} sm={6} key={index}>
            <Grid className="serviceWrap">
              <Grid className="serviceIcon">{service.icon}</Grid>
              <Grid className="serviceContent">
                <h3>
                 <Link legacyBehavior href={`/practice/[id]`} as={`/practice/${service.id}`}>
                    <p>{service.title}</p>
                  </Link>
                </h3>
                <p>{service.content}</p>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Parallax>
  );
};
export default ServiceArea;
