import React from "react";
import { Grid } from "@mui/material";
import { instagrams } from "../../data/data";

const Instagram = () => {
  return (
    <Grid className="instagramWrap">
      <h3>Instagram</h3>
      <ul>
        {instagrams.map((instagram) => (
          <li key={instagram}>
            <img src={instagram} alt="" />
          </li>
        ))}
      </ul>
    </Grid>
  );
};
export default Instagram;
