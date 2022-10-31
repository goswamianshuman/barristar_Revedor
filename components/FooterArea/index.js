import React from 'react'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const footerLinks = [
    {
        title: 'Quick Link', menus: [
            { name: 'Home', route: '/' },
            { name: 'Practice Area', route: 'practice' },
            { name: 'Our Team', route: 'team' },
            { name: 'Recent Case', route: 'case' },
            { name: 'Our Blog', route: 'blog' },
        ]
    },
    {
        title: 'Practice Area', menus: [
            { name: 'Family Law', route: 'home' },
            { name: 'Criminal Law', route: 'home' },
            { name: 'Parsonal Injury', route: 'home' },
            { name: 'Real Estate Law', route: 'home' },
            { name: 'Business Law', route: 'home' },
        ]
    },
    {
        title: 'Contact Us', menus: [
            { name: 'Head Office Address' },
            { name: '121 King Street, Melbourne West,', },
            { name: 'Australia', },
            { name: 'Phone: 888 123-4587', },
            { name: 'Email: info@example.com', },
        ]
    },
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <Grid className="footerTopArea">
                <Grid
                    container
                    spacing={3}
                    className="container">
                    <Grid item lg={3} sm={6} xs={12}>
                        <Grid className="footerLogo">
                            <Link href="/">
                                <a>
                                    <img src="/images/logo/logo.png" alt="logo" />
                                </a>
                            </Link>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                        </Grid>
                    </Grid>
                    {footerLinks.map((menu, i) => (
                        <Grid key={i} item lg={3} sm={6} xs={12}>
                            <div className="footerWrap">
                                <h3>{menu.title}</h3>
                                <ul>
                                    {menu.menus.map((item, i) => (
                                        <li key={i}>{item.route ? <Link href="/"><a>{item.name}</a></Link> : `${item.name}`}</li>
                                    ))}
                                </ul>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid className="footerBottomArea">
                <Grid container spacing={3} className="container">
                    <Grid item md={8} sm={10} xs={12}>
                        <span>Privacy Policy | © 2020 Barristar. All rights reserved</span>
                    </Grid>
                    <Grid item md={4} sm={2} xs={12}>
                        <ul className="socialListFooter">
                            <li><a href="#"><FacebookIcon /></a></li>
                            <li><a href="#"><TwitterIcon /></a></li>
                            <li><a href="#"><InstagramIcon /></a></li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}
export default FooterArea