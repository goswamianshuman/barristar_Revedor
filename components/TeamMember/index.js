import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from 'next/link'
import { Grid, Button } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SectionTitle from '../Title'

const teams = [
    {
        name: 'Alecgander Harry',
        level: 'Business Lawyer',
        image: '/images/expert/1.jpg',
        id: 1,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Lily Watson',
        level: 'Family Lawyer',
        image: '/images/expert/2.jpg',
        id: 2,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Willam Stephen',
        level: 'Criminal Lawyer',
        image: '/images/expert/3.jpg',
        id: 3,
        socialMedia: [
            'facebook', 'twitter', 'linkedin', 'instagram'
        ]
    },
    {
        name: 'Eshan Golly',
        level: 'Business Lawyer',
        image: '/images/expert/4.jpg',
        id: 4,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Daniel Dambeldor',
        level: 'Family Lawyer',
        image: '/images/expert/5.jpg',
        id: 5,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec',
        level: 'Criminal Lawyer',
        image: '/images/expert/6.jpg',
        id: 6,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
]


const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Button
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
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
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const TeamMember = ({ className = '', title, subTitle, slider, noGutters }) => {
    return (
        <Grid className={`teamArea ${className}`}>
            <Grid container spacing={!noGutters ? 0 : 4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
                {slider ? (
                    <Grid item xs={12}>
                        <Slider className="teamSlideArea" {...settings}>
                            {teams.map((team, i) => (
                                <Grid key={i} className="teamWrapper">
                                    <Grid className="teamImage">
                                        <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}><a><img src={team.image} alt={team.name} /></a></Link>
                                    </Grid>
                                    <Grid className="teamContent">
                                        <h3> <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}><a>{team.name}</a></Link></h3>
                                        <span>{team.level}</span>
                                        <ul>
                                            {team.socialMedia.map(social => (
                                                <li key={social}>
                                                    <a href="#">
                                                        {social === 'facebook' && <FacebookIcon />}
                                                        {social === 'linkedin' && <LinkedInIcon />}
                                                        {social === 'instagram' && <InstagramIcon />}
                                                        {social === 'twitter' && <TwitterIcon />}
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
                                            <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}><a><img src={team.image} alt={team.name} /></a></Link>
                                        </Grid>
                                        <Grid className="teamContent">
                                            <h3> <Link as={`/attorneys/${team.id}`} href={`/attorneys/[id]`}><a>{team.name}</a></Link></h3>
                                            <span>{team.level}</span>
                                            <ul>
                                                {team.socialMedia.map(social => (
                                                    <li key={social}>
                                                        <a href="#">
                                                            {social === 'facebook' && <FacebookIcon />}
                                                            {social === 'linkedin' && <LinkedInIcon />}
                                                            {social === 'instagram' && <InstagramIcon />}
                                                            {social === 'twitter' && <TwitterIcon />}
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
    )
}
export default TeamMember