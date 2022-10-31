import React from 'react'
import { Grid } from '@material-ui/core'
import Link from 'next/link'
import { Parallax } from 'react-parallax';
const Breadcumb = ({ className = '', title, breadcumbMenu, background }) => {
    return (
        <Parallax
            bgImage={background}
            bgImageAlt="the cat"
            contentClassName={`breadcumbArea ${className}`}
            strength={200}>
            <Grid spacing={4} container className="container">
                <Grid item xs={12}>
                    <Grid className="breadcumbWrap">
                        <h2>{title}</h2>
                        <ul>
                            {breadcumbMenu.map((menu, i) => (
                                <li key={i}>{menu.route ? <Link href={menu.route}><a>{menu.name}</a></Link> : menu.name}</li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </Parallax>
    )
}
export default Breadcumb