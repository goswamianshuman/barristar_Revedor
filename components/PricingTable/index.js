import React from 'react'
import { Grid, Button } from '@material-ui/core'
import Link from 'next/link'
import MoneyIcon from '@material-ui/icons/Money';
import SectionTitle from '../Title'
const pricingpanel = [
    {
        title: 'Started Plan',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price: '$120',
    },
    {
        title: 'Basic Plan',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price: '$150',
    },
    {
        title: 'Advanced Plan',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        price: '$180',
    },
]
const PricingTable = ({ className = "", title, subTitle }) => {
    return (
        <Grid className={`pricingTableArea ${className}`}>
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
                {pricingpanel.map((pricing, i) => (
                    <Grid key={i} item md={4} sm={4} xs={12}>
                        <Grid className="pricingWrapper">
                            <MoneyIcon />
                            <h3>{pricing.title}</h3>
                            <h2>{pricing.price}</h2>
                            <p>{pricing.text}</p>
                            <Button className="btnStyle">Get Started</Button>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
export default PricingTable