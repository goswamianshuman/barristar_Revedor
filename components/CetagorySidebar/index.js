import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import { cetagoryMenu } from "../../data/data";

const CetagorySidebar = ({ className = "", title }) => {
  return (
    <Grid className={`cetagoryWrap ${className}`}>
      <h3 className="sidebarTitle">{title}</h3>
      <ul>
        {cetagoryMenu.map((cetagory, i) => (
          <li key={i}>
            <Link legacyBehavior href={`/case-stadies/${cetagory.id}`}>
              <p>{cetagory.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Grid>
  );
};
export default CetagorySidebar;
