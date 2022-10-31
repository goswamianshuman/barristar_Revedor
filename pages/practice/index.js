import React, { Fragment } from 'react'
import Head from 'next/head'
// components 
import Breadcumb from '../../components/Breadcumb'
import Service from '../../components/Service'
import ServiceArea from '../../components/ServiceArea'
import Testmonial from "../../components/Testmonial";
import PricingTable from "../../components/PricingTable";
import NewsLetter from '../../components/Newsletter'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Practice area' }
]

const Practice = () => {
    return (
        <Fragment>
            <Head>
                <title>Practice</title>
            </Head>
            <Breadcumb
                title="Practice Area"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <Service className="bgColor" />
            <ServiceArea
                className="ourServiceAreaStyleThree bgFFF"
                title="How Can We Help You"
                subTitle="Area Of Practice"
            />
            <PricingTable
                title="Pricing Table"
                subTitle="Our Pricing Plan"
            />
            <Testmonial
                className="pt100"
            />
            <NewsLetter />
        </Fragment>
    )
}
export default Practice