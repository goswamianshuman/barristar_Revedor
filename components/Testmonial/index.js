import React from "react";
import Slider from "react-slick";
import { Grid, Hidden } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { sliders } from "../../data/data";
const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
const Testmonial = ({ className = "" }) => {
  return (
    <Grid className={`testmonialArea ${className}`}>
      <Grid container className="container">
        <Grid item md={4} sm={6} xs={12}>
          <Grid className="testimonialImages">
            <img src="/images/testimonial/1.png" alt="" />
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item md={1}></Grid>
        </Hidden>
        <Grid item md={7} sm={6} xs={12}>
          <Grid className="testimonialContent">
            <span>What People Say</span>
            <h2>Client Testimonial</h2>
            <Slider className="testmonialSlider" {...settings}>
              {sliders.map((slider, i) => (
                <Grid key={i} className="slideItem">
                  <p>
                    <FormatQuoteIcon /> {slider.text}
                  </p>
                  <Grid className="thumbWrap">
                    <Grid className="thumbImg">
                      <img src={slider.images} alt="" />
                    </Grid>
                    <Grid className="imgContent">
                      <h4>{slider.title}</h4>
                      <span>{slider.subTitle}</span>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Testmonial;
