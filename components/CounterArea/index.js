import React from "react";
import { Parallax } from "react-parallax";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { counters } from "../../data/data";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});
const CounterArea = ({ className = "", fullWidth }) => {
  return (
    <Parallax
      bgImage="/images/counter/1.jpg"
      bgImageAlt="the cat"
      contentClassName={`counterArea ${className}`}
      strength={200}
    >
      <Grid container spacing={4} className="container">
        <Grid item lg={fullWidth ? 12 : 6} xs={12}>
          <Grid className="counterMainWrapper">
            {counters.map((count, i) => (
              <Grid key={i} className="counterWrap">
                <Grid className="count">
                  <Odometer value={count.value} />
                  {count.level && <span className="level">{count.level}</span>}
                </Grid>
                <p>{count.title}</p>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Parallax>
  );
};
export default CounterArea;
