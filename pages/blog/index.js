import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import Head from 'next/head'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import SearchSidebar from '../../components/SearchSidebar'
import CetagorySidebar from '../../components/CetagorySidebar'
import RecentPosts from '../../components/RecentPosts'
import BlogPost from '../../components/BlogPost'
import Tags from '../../components/Tags'
import Instagram from '../../components/Instagram'

const breadcumbMenu = [
    {
        name: 'Home',
        route: '/'
    },
    { name: 'Blogs' }
]

const Blog = () => {
    return (
        <Fragment>
            <Head>
                <title>Blogs</title>
            </Head>
            <Breadcumb
                title="News"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <Grid className="blogPostArea blogPostLeftArea">
                <Grid container spacing={4} className="container">
                    <Grid item md={4} xs={12}>
                        <aside>
                            <SearchSidebar />
                            <CetagorySidebar
                                title="Blog Cetagory"
                            />
                            <RecentPosts />
                            <Tags />
                            <Instagram />
                        </aside>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <BlogPost />
                    </Grid>
                </Grid>
            </Grid>
            <NewsLetter />
        </Fragment>
    )
}
export default Blog