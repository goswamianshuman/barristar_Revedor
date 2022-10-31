import React from 'react'
import { Grid } from '@material-ui/core'

const instagrams = [
    '/images/instragram/1.jpg', '/images/instragram/2.jpg', '/images/instragram/3.jpg', '/images/instragram/4.jpg', '/images/instragram/5.jpg', '/images/instragram/6.jpg'
]

const Instagram = () => {
    return (
        <Grid className="instagramWrap">
            <h3>Instagram</h3>
            <ul>
                {instagrams.map(instagram => (
                    <li key={instagram}>
                        <img src={instagram} alt="" />
                    </li>
                ))}
            </ul>
        </Grid>
    )
}
export default Instagram