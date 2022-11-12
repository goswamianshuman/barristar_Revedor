import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Grid, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SectionTitle from "../Title";
import { teams, teams_text } from "../../data/home";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <Button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <KeyboardArrowLeftIcon />
  </Button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <Button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <KeyboardArrowRightIcon />
  </Button>
);

const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const TeamMember = ({ className = "", title, subTitle, slider, noGutters }) => {
  return (
    <Grid className={`teamArea ${className}`}>
      <Grid container spacing={!noGutters ? 0 : 4} className="container">
        <Grid item xs={12}>
          <SectionTitle
            title={teams_text[0].title}
            subTitle={teams_text[0].subTitle}
          />
        </Grid>
        {slider ? (
          <Grid item xs={12}>
            <Slider className="teamSlideArea" {...settings}>
              {teams.map((team, i) => (
                <Grid key={i} className="teamWrapper">
                  <Grid className="teamImage">
                    <Link
                      legacyBehavior
                      as={`/attorneys/${team.id}`}
                      href={`/attorneys/[id]`}
                    >
                      <p>
                        <img src={team.image} alt={team.name} />
                      </p>
                    </Link>
                  </Grid>
                  <Grid className="teamContent">
                    <h3>
                      {" "}
                      <Link
                        legacyBehavior
                        as={`/attorneys/${team.id}`}
                        href={`/attorneys/[id]`}
                      >
                        <p>{team.name}</p>
                      </Link>
                    </h3>
                    <span>{team.level}</span>
                    <ul>
                      {team.socialMedia.map((social) => (
                        <li key={social}>
                          <a href="#">
                            {social === "facebook" && <FacebookIcon />}
                            {social === "linkedin" && <LinkedInIcon />}
                            {social === "instagram" && <InstagramIcon />}
                            {social === "twitter" && <TwitterIcon />}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>
              ))}
            </Slider>
          </Grid>
        ) : (
          <Fragment>
            {teams.map((team, i) => (
              <Grid key={i} item lg={4} md={6} xs={12}>
                <Grid className="teamWrapper">
                  <Grid className="teamImage">
                    <Link
                      legacyBehavior
                      as={`/attorneys/${team.id}`}
                      href={`/attorneys/[id]`}
                    >
                      <p>
                        <img src={team.image} alt={team.name} />
                      </p>
                    </Link>
                  </Grid>
                  <Grid className="teamContent">
                    <h3>
                      {" "}
                      <Link
                        legacyBehavior
                        as={`/attorneys/${team.id}`}
                        href={`/attorneys/[id]`}
                      >
                        <p>{team.name}</p>
                      </Link>
                    </h3>
                    <span>{team.level}</span>
                    <ul>
                      {team.socialMedia.map((social) => (
                        <li key={social}>
                          <a href="#">
                            {social === "facebook" && <FacebookIcon />}
                            {social === "linkedin" && <LinkedInIcon />}
                            {social === "instagram" && <InstagramIcon />}
                            {social === "twitter" && <TwitterIcon />}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Fragment>
        )}
      </Grid>
    </Grid>
  );
};
export default TeamMember;
