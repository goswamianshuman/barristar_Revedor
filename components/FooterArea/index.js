import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const footerLinks = [
  {
    title: "Quick Link",
    menus: [
      { name: "Home", route: "/" },
      { name: "Practice Area", route: "practice" },
      { name: "Our Team", route: "team" },
      { name: "Recent Case", route: "case" },
      { name: "Our Blog", route: "blog" },
    ],
  },
  {
    title: "Practice Area",
    menus: [
      { name: "Family Law", route: "home" },
      { name: "Criminal Law", route: "home" },
      { name: "Parsonal Injury", route: "home" },
      { name: "Real Estate Law", route: "home" },
      { name: "Business Law", route: "home" },
    ],
  },
  {
    title: "Contact Us",
    menus: [
      { name: "Head Office Address" },
      { name: "121 King Street, Melbourne West," },
      { name: "Australia" },
      { name: "Phone: 888 123-4587" },
      { name: "Email: info@example.com" },
    ],
  },
];

const FooterArea = () => {
  return (
    <footer className="footerArea">
      <Grid className="footerTopArea">
        <Grid container spacing={3} className="container">
          <Grid item lg={3} sm={6} xs={12}>
            <Grid className="footerLogo">
              <Link legacyBehavior href="/">
                <p>
                  <img src="/images/logo/logo2.png" alt="logo" />
                </p>
              </Link>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature
              </p>
            </Grid>
          </Grid>
          {footerLinks.map((menu, i) => (
            <Grid key={i} item lg={3} sm={6} xs={12}>
              <div className="footerWrap">
                <h3>{menu.title}</h3>
                <ul>
                  {menu.menus.map((item, i) => (
                    <li key={i}>
                      {item.route ? (
                        <Link legacyBehavior href="/">
                          <p>{item.name}</p>
                        </Link>
                      ) : (
                        `${item.name}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid className="footerBottomArea">
        <Grid container spacing={3} className="container">
          <Grid item md={8} sm={10} xs={12}>
            <span>Privacy Policy | © 2022 Revedor. All rights reserved</span>
          </Grid>
          <Grid item md={4} sm={2} xs={12}>
            <ul className="socialListFooter">
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};
export default FooterArea;
