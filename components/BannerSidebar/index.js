import React from 'react'
import { Grid, Button } from '@material-ui/core'
import Link from 'next/link'

const BannerSidebar = ({ className, image }) => {
    return (
        <Grid style={{ backgroundImage: `url(${image})` }} className={`bannerWrapper ${className}`}>
            <h3><span>25</span> Years of Experience In This Field</h3>
            <Link href="/contact">
                <Button className="btnStyle">Contact Us Now</Button>
            </Link>
        </Grid>
    )
}
export default BannerSidebar