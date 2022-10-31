import React, { Fragment } from 'react'
import Head from 'next/head'
import { Grid } from '@material-ui/core'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import CetagorySidebar from '../../components/CetagorySidebar'
import SingleContentArea from '../../components/SingleContentArea'
import SearchSidebar from '../../components/SearchSidebar'
import RecentPosts from '../../components/RecentPosts'
import Portfolio from '../../components/Portfolio'
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
    },
    {
        image: '/images/studies/4.jpg',
        title: 'Accounting issue',
        subtitle: 'Criminal',
        id: 4
    },
    {
        image: '/images/studies/5.jpg',
        title: 'Business Accounting',
        subtitle: 'Family Issue',
        id: 5
    },
    {
        image: '/images/studies/1.jpg',
        title: 'General Service',
        subtitle: 'Corporate',
        id: 6
    },
    {
        image: '/images/studies/2.jpg',
        title: 'Personal Issue',
        subtitle: 'General',
        id: 7
    },
    {
        image: '/images/studies/3.jpg',
        title: 'Business Accounting',
        subtitle: 'Business',
        id: 8
    },
    {
        image: '/images/studies/4.jpg',
        title: 'Accounting issue',
        subtitle: 'Criminal',
        id: 9
    }
]

function getPostDataById(id) {
    for (let i = 0; i < portfolios.length; i++) {
        if (portfolios[i].id === parseInt(id)) {
            return portfolios[i];
        }
    }
}

const CaseStadiesDetails = ({ id }) => {
    const profile = getPostDataById(id);
    const breadcumbMenu = [
        { name: 'Home', route: '/' },
        { name: 'Practice', route: '/practice' },
        { name: profile.title }
    ]
    return (
        <Fragment>
            <Head>
                <title>Portfolio {profile.title}</title>
            </Head>
            <Breadcumb
                title={profile.title}
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <Grid className="ptb100 singlePortfolioArea">
                <Grid container spacing={4} className="container">
                    <Grid item md={8} xs={12}>
                        <SingleContentArea
                            service={profile}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <aside>
                            <SearchSidebar />
                            <CetagorySidebar title="Category" />
                            <RecentPosts />
                        </aside>
                    </Grid>
                </Grid>
            </Grid>
            <Portfolio
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolios.slice(3, 6)}
                className="portfolioAreaStyleTwo portfolioAreaStyleFour"
            />
            <NewsLetter />
        </Fragment>
    );
}
export default CaseStadiesDetails

CaseStadiesDetails.getInitialProps = async ({ query }) => {
    const { id } = query;
    return { id };
};