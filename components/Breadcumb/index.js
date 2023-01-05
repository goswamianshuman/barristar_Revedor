import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Parallax } from "react-parallax";
const Breadcumb = ({ className = "", title, breadcumbMenu, background }) => {
  return (
    <div
      style={{
        background: ` url("${background}") no-repeat fixed center / cover`,
      }}
      className={`breadcumbArea ${className}`}
    >
      <Grid container className="container">
        <div className="breadcumbConainer">
          <Grid className="breadcumbWrap">
            <h2>{title}</h2>
            <ul>
              {breadcumbMenu.map((menu, i) => (
                <li key={i}>
                  {menu.route ? (
                    <Link legacyBehavior href={menu.route}>
                      <p>{menu.name}</p>
                    </Link>
                  ) : (
                    menu.name
                  )}
                </li>
              ))}
            </ul>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
export default Breadcumb;
