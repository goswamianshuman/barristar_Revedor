import React, { useState } from 'react'
import Link from 'next/link'
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import { Button, Grid } from '@material-ui/core'

const About = ({ subTitle, title, videoId, className = '', signature, pragraphs, images, changeOrder = "" }) => {
    const [video, setVideo] = useState(false)
    return (
        <Grid className={`aboutArea ${className}`}>
            <Grid container spacing={4} className="container">
                <Grid item md={6} xs={12}
                    className="changeOrder">
                    <Grid className="aboutImageWrap">
                        <img src={images} alt="" />
                        {videoId && <Button
                            onClick={() => setVideo(true)}
                            className="playBtn">
                            <PlayArrowTwoToneIcon
                            /></Button>}
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid className="aboutContent">
                        {subTitle && <span className="subtitle">{subTitle}</span>}
                        <h2>{title}</h2>
                        {pragraphs.map(text => (
                            <p key={text}>{text}</p>
                        ))}
                        <Link href='/about'>
                            <Button component="a" className="btnStyle">More About Us..</Button>
                        </Link>
                        {signature && <Grid className="signature">
                            <img src={signature} alt="" />
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default About