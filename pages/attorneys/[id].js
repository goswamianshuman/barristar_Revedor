import React, { Fragment } from 'react'
import { Grid, Hidden, Button } from '@material-ui/core'
import Head from 'next/head'
import CheckIcon from '@material-ui/icons/Check';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import Portfolio from '../../components/Portfolio'
import ContactArea from '../../components/ContactArea'

const teams = [
    {
        name: 'Alecgander Harry',
        level: 'Business Lawyer',
        image: '/images/expert/1.jpg',
        id: 1,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ],
        content: ['Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
            'Academy University School of Law, Boston, MA',
            'The Syntify High School Of New York',
            'Education & Court Admissions'],
        info: [
            {
                level: 'Positon: ',
                text: 'Siniour Lawyer'
            },
            {
                level: 'Practice Area: ',
                text: 'Family Lawyer, Criminal Defence, Personal Injury'
            },
            {
                level: 'Experience: ',
                text: '10 Years'
            },
            {
                level: 'Address: ',
                text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872'
            },
            {
                level: 'Phone: ',
                text: '0800.123.456'
            },
            {
                level: 'Email: ',
                text: 'youremail@gmail.com'
            },
            {
                level: 'Fax: ',
                text: ' 6985231456'
            },
        ]
    },
    {
        name: 'Lily Watson',
        level: 'Family Lawyer',
        image: '/images/expert/2.jpg',
        id: 2,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ],
        content: ['Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
            'Academy University School of Law, Boston, MA',
            'The Syntify High School Of New York',
            'Education & Court Admissions'],
        info: [
            {
                level: 'Positon: ',
                text: 'Siniour Lawyer'
            },
            {
                level: 'Practice Area: ',
                text: 'Family Lawyer, Criminal Defence, Personal Injury'
            },
            {
                level: 'Experience: ',
                text: '10 Years'
            },
            {
                level: 'Address: ',
                text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872'
            },
            {
                level: 'Phone: ',
                text: '0800.123.456'
            },
            {
                level: 'Email: ',
                text: 'youremail@gmail.com'
            },
            {
                level: 'Fax: ',
                text: ' 6985231456'
            },
        ]
    },
    {
        name: 'Willam Stephen',
        level: 'Criminal Lawyer',
        image: '/images/expert/3.jpg',
        id: 3,
        socialMedia: [
            'facebook', 'twitter', 'linkedin', 'instagram'
        ],
        content: ['Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
            'Academy University School of Law, Boston, MA',
            'The Syntify High School Of New York',
            'Education & Court Admissions'],
        info: [
            {
                level: 'Positon: ',
                text: 'Siniour Lawyer'
            },
            {
                level: 'Practice Area: ',
                text: 'Family Lawyer, Criminal Defence, Personal Injury'
            },
            {
                level: 'Experience: ',
                text: '10 Years'
            },
            {
                level: 'Address: ',
                text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872'
            },
            {
                level: 'Phone: ',
                text: '0800.123.456'
            },
            {
                level: 'Email: ',
                text: 'youremail@gmail.com'
            },
            {
                level: 'Fax: ',
                text: ' 6985231456'
            },
        ]
    },
    {
        name: 'Eshan Golly',
        level: 'Business Lawyer',
        image: '/images/expert/4.jpg',
        id: 4,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ],
        content: ['Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
            'Academy University School of Law, Boston, MA',
            'The Syntify High School Of New York',
            'Education & Court Admissions'],
        info: [
            {
                level: 'Positon: ',
                text: 'Siniour Lawyer'
            },
            {
                level: 'Practice Area: ',
                text: 'Family Lawyer, Criminal Defence, Personal Injury'
            },
            {
                level: 'Experience: ',
                text: '10 Years'
            },
            {
                level: 'Address: ',
                text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872'
            },
            {
                level: 'Phone: ',
                text: '0800.123.456'
            },
            {
                level: 'Email: ',
                text: 'youremail@gmail.com'
            },
            {
                level: 'Fax: ',
                text: ' 6985231456'
            },
        ]
    },
    {
        name: 'Daniel Dambeldor',
        level: 'Family Lawyer',
        image: '/images/expert/5.jpg',
        id: 5,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ],
        content: ['Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
            'Academy University School of Law, Boston, MA',
            'The Syntify High School Of New York',
            'Education & Court Admissions'],
        info: [
            {
                level: 'Positon: ',
                text: 'Siniour Lawyer'
            },
            {
                level: 'Practice Area: ',
                text: 'Family Lawyer, Criminal Defence, Personal Injury'
            },
            {
                level: 'Experience: ',
                text: '10 Years'
            },
            {
                level: 'Address: ',
                text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872'
            },
            {
                level: 'Phone: ',
                text: '0800.123.456'
            },
            {
                level: 'Email: ',
                text: 'youremail@gmail.com'
            },
            {
                level: 'Fax: ',
                text: ' 6985231456'
            },
        ]
    },
    {
        name: 'Darcy Alec',
        level: 'Criminal Lawyer',
        image: '/images/expert/6.jpg',
        id: 6,
        socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ],
        content: ['Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
            'Academy University School of Law, Boston, MA',
            'The Syntify High School Of New York',
            'Education & Court Admissions'],
        info: [
            {
                level: 'Positon: ',
                text: 'Siniour Lawyer'
            },
            {
                level: 'Practice Area: ',
                text: 'Family Lawyer, Criminal Defence, Personal Injury'
            },
            {
                level: 'Experience: ',
                text: '10 Years'
            },
            {
                level: 'Address: ',
                text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872'
            },
            {
                level: 'Phone: ',
                text: '0800.123.456'
            },
            {
                level: 'Email: ',
                text: 'youremail@gmail.com'
            },
            {
                level: 'Fax: ',
                text: ' 6985231456'
            },
        ]
    },
]

const portfolios = [
    {
        image: '/images/studies/1.jpg',
        title: 'General Service',
        subtitle: 'Corporate',
        id: 1
    },
    {
        image: '/images/studies/2.jpg',
        title: 'Personal Issue',
        subtitle: 'General',
        id: 2
    },
    {
        image: '/images/studies/3.jpg',
        title: 'Business Accounting',
        subtitle: 'Business',
        id: 3
    }
]

function getPostDataById(id) {
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].id === parseInt(id)) {
            return teams[i];
        }
    }
}
const SingleTeamPage = ({ id }) => {
    const team = getPostDataById(id);
    const breadcumbMenu = [
        { name: 'Home', route: '/' },
        { name: 'Attorneys', route: '/attorneys' },
        { name: team.name }
    ]
    return (
        <Fragment>
            <Head>
                <title>{team.name}</title>
            </Head>
            <Breadcumb
                title={team.name}
                breadcumbMenu={breadcumbMenu}
                background="/images/breadcumb/1.jpg"
            />
            <Grid className='singleTeamArea'>
                <Grid container spacing={4} className="container">
                    <Hidden mdDown>
                        <Grid item md={1}></Grid>
                    </Hidden>
                    <Grid item md={10} xs={12}>
                        <Grid container spacing={4}>
                            <Grid item md={6} xs={12}>
                                <Grid className="singleTeamImgWrap">
                                    <Grid className="singleTeamImg">
                                        <img src={team.image} alt={team.name} />
                                    </Grid>
                                    <h4>{team.name}</h4>
                                </Grid>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Grid className="singleTeamContent">
                                    <h4>Important Information</h4>
                                    <ul className="teamMembarInfo">
                                        {team.info.map((teamInfo, i) => (
                                            <li key={i}>
                                                <span>{teamInfo.level}</span>
                                                {teamInfo.text}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="socialShare">
                                        <li><Button component="a" href="#"><FacebookIcon /></Button></li>
                                        <li><Button component="a" href="#"><TwitterIcon /></Button></li>
                                        <li><Button component="a" href="#"><LinkedInIcon /></Button></li>
                                        <li><Button component="a" href="#"><InstagramIcon /></Button></li>
                                    </ul>
                                </Grid>
                            </Grid>
                            <Grid className="col-12">
                                <Grid className="singleTeamInfo">
                                    <h3>Personal Experience</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                    <h5>Education</h5>
                                    <ul>
                                        {team.content.map(teamContent => (
                                            <li key={teamContent}><CheckIcon /> {teamContent}</li>
                                        ))}
                                    </ul>
                                    <h5>Language</h5>
                                    <span>French(fluent), English (fluent), Greek , chinese.</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Portfolio
                title="Participated Case"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolios}
                className="portfolioAreaStyleTwo portfolioAreaStyleFour"
            />
            <ContactArea />
            <NewsLetter />
        </Fragment>
    )
}
export default SingleTeamPage

SingleTeamPage.getInitialProps = async ({ query }) => {
    const { id } = query;
    return { id };
};