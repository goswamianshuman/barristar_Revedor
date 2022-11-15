import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { footerLinks } from "../../data/data";

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
                We are a team of interesting, creative, hard-working people that
                believe in going all out to fulfill your dreams and make sure
                that quality should be tight and experience should be stellar.
                overtime we have ventured into increasingly challenging products
                and services, upgrading ourselves to stay ahead in the game.
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
            <span>Privacy Policy | © 2022 Villy. All rights reserved</span>
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
