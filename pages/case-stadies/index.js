import React, { Fragment } from 'react'
import Head from 'next/head'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import Portfolio from '../../components/Portfolio'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Case Studies' }
]

const portfolio = [
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


const CaseStudies = () => {
    return (
        <Fragment>
            <Head>
                <title>Case Studies</title>
            </Head>
            <Breadcumb
                className="breadcumbArea"
                title="Case Stadies"
                breadcumbMenu={breadcumbMenu}
                background="/images/breadcumb/1.jpg"
            />

            <Portfolio
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolio}
                className="portfolioAreaStyleTwo"
            />

            <NewsLetter />
        </Fragment>
    )
}
export default CaseStudies