import React, { Fragment } from 'react'
import Head from 'next/head'
import { Grid } from '@material-ui/core'
import Breadcumb from '../../components/Breadcumb'
import TeamMember from '../../components/TeamMember'
import NewsLetter from '../../components/Newsletter'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys' }
]

const Team = () => {
    return (
        <Fragment>
            <Head>
                <title>Attorneys</title>
            </Head>
            <Breadcumb
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                className="ptb100"
                noGutters={true}
            />
            <NewsLetter />
        </Fragment>
    )
}
export default Team