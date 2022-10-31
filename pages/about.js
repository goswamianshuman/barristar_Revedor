import React, { Fragment } from 'react'
import Head from 'next/head'
// components 
import Breadcumb from '../components/Breadcumb'
import Service from '../components/Service'
import About from '../components/About'
import ServiceArea from '../components/ServiceArea'
import Testmonial from "../components/Testmonial";
import TeamMember from '../components/TeamMember'
import CounterArea from '../components/CounterArea'
import BlogArea from '../components/BlogArea'
import NewsLetter from '../components/Newsletter'

const aboutText = ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at', 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum'
]
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'About us' }
]

const AboutPage = () => {
    return (
        <Fragment>
            <Head>
                <title>About us</title>
            </Head>
            <Breadcumb
                title="About Us"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <Service className="bgColor" />
            <About
                className="aboutAreaStyleTwo"
                title="Why You Need Us"
                subTitle="We Are Expert"
                images="/images/about/1.jpg"
                videoId="XxVg_s8xAms"
                pragraphs={aboutText}
                changeOrder="changeOrder"
            />
            <ServiceArea
                className="ourServiceAreaStyleTwo"
                title="How Can We Help You"
                subTitle="Area Of Practice"
            />
            <Testmonial />
            <CounterArea
                fullWidth={true}
                className="counterAreaStyleTwo"
            />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                slider={true}
            />
            <BlogArea className="blogArea"
                title="Latest News"
                subTitle="From Our Blog"
            />
            <NewsLetter />
        </Fragment>
    )
}
export default AboutPage