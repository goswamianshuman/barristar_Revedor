import React from "react";
import { Grid, Button, Hidden } from "@mui/material";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
const HeaderTop = (props) => {
  return (
    <Grid className={props.className}>
      <Grid
        container
        alignItems="center"
        className="container headerTopMainWrapper"
      >
        <Grid item sm={6} md={5} lg={5} xs={12}>
          <ul className="d-flex accountLoginArea">
            <li>
              <RoomOutlinedIcon />
              Incuspaze, Unit 408, 4th Floor, Apollo Premier Building, Vijay
              Nagar Square, Indore, M.P 452010
            </li>
          </ul>
        </Grid>
        <Grid item sm={6} md={4} lg={5} xs={12}>
          <ul className="headerContact">
            <li>
              <PhoneOutlinedIcon /> +917022249728
            </li>
            <li>
              <QueryBuilderOutlinedIcon /> 9AM - 9PM
            </li>
          </ul>
        </Grid>
        <Hidden smDown>
          <Grid item lg={2} md={3} xs={12} className="text-right">
            <Button
              className="btnStyle btnOutlined btnRadius"
              component="a"
              href="/contact"
            >
              Contact Us
            </Button>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};
export default HeaderTop;
