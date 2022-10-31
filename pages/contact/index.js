import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import Head from 'next/head'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import Form from '../../components/Form'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]

const Contact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact us</title>
            </Head>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background="/images/breadcumb/1.jpg"
            />

            <Grid className="contactusPageArea">
                <Grid container spacing={4} className="container">
                    <Grid item md={7} xs={12}>
                        <Grid className="contactUsInfo">
                            <h3>Our Contacts</h3>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                            <h4>Address</h4>
                            <span>245 King Street, Touterie Victoria 8520 Australia</span>
                            <h4>Phone</h4>
                            <span>0-123-456-7890</span>
                            <span>0-123-456-7890</span>
                            <h4>Email</h4>
                            <span>sample@gmail.com</span>
                        </Grid>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Grid className="contactUSForm">
                            <h3>Quick Contact Form</h3>
                            <Form
                                addressInfo={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <NewsLetter />
        </Fragment>
    )
}
export default Contact