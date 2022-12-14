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
        <Grid
          item
          alignSelf="center"
          lg={6}
          md={5}
          xs={11}
          style={{
            background: `url(${aboutData[0].images}) no-repeat center / cover`,
          }}
          className="changeOrder"
        >
          {/* <img src={aboutData[0].images} alt="" /> */}
          {aboutData[0].videoId && (
            <Button onClick={() => setVideo(true)} className="playBtn">
              <PlayArrowTwoToneIcon />
            </Button>
          )}
        </Grid>
        <Grid item md={6} xs={11}>
          <Grid className="aboutContent">
            {aboutData[0].subTitle && (
              <span className="subtitle">{aboutData[0].subTitle}</span>
            )}
            <h2>{aboutData[0].title}</h2>
            {/* {aboutData[0].pragraphs.aboutText.map((text) => (
              <p key={text}>{text}</p>
            ))} */}
            <ul>
              <li>
                <h3>Transport Pricing</h3>
                <p>See fixed price before you pay a rupee. No hidden charges</p>
              </li>
              <li>
                <h3>Exports Only</h3>
                <p>Our lawyers are well versed and experts in their jobs.</p>
              </li>
              <li>
                <h3>24 × 7 At Your Service</h3>
                <p>
                  Whether it is 5 in morning or in noon, our doors are always
                  open for you
                </p>
              </li>
            </ul>
            <div className="aboutbtn">
              <Link legacyBehavior href="/about">
                <Button component="a" className="btnStyle">
                  More About Us..
                </Button>
              </Link>
            </div>
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
