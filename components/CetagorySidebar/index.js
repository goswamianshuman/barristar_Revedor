import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";

const cetagoryMenu = [
  {
    name: "Family Law",
    id: 1,
  },
  {
    name: "Criminal Law",
    id: 2,
  },
  {
    name: "Business Law",
    id: 3,
  },
  {
    name: "Personal Injury",
    id: 4,
  },
  {
    name: "Education Law",
    id: 5,
  },
  {
    name: "Drugs Crime",
    id: 6,
  },
];

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
