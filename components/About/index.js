import React, { useState } from "react";
import Link from "next/link";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import { Button, Grid } from "@mui/material";
import { aboutData } from "../../data/data";

const About = ({
  subTitle,
  title,
  videoId,
  className = "",
  signature,
  pragraphs,
  images,
  changeOrder = "",
}) => {
  const [video, setVideo] = useState(false);
  console.log();
  return (
    <Grid className={`aboutArea ${className}`}>
      <Grid container spacing={4} className="container">
        <Grid item md={6} xs={12} className="changeOrder">
          <Grid className="aboutImageWrap">
            <img src={aboutData[0].images} alt="" />
            {aboutData[0].videoId && (
              <Button onClick={() => setVideo(true)} className="playBtn">
                <PlayArrowTwoToneIcon />
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid className="aboutContent">
            {aboutData[0].subTitle && (
              <span className="subtitle">{aboutData[0].subTitle}</span>
            )}
            <h2>{aboutData[0].title}</h2>
            {aboutData[0].pragraphs.aboutText.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <Link legacyBehavior href="/about">
              <Button component="a" className="btnStyle">
                More About Us..
              </Button>
            </Link>
            {aboutData[0].signature && (
              <Grid className="signature">
                <img src={aboutData[0].signature} alt="" />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default About;
