import React from 'react'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import SectionTitle from '../Title'

const blogs = [
    {
        images: '/images/blog/1.jpg',
        title: 'Justice May For You If You Are Innocent',
        avatar: '/images/blog-page/6.jpg',
        name: 'By Aliza',
        time: 'Oct 12,2020',
        id: 1
    },
    {
        images: '/images/blog/2.jpg',
        title: 'Justice May For You If You Are Innocent',
        avatar: '/images/blog-page/6.jpg',
        name: 'By Aliza',
        time: 'Oct 12,2020',
        id: 2
    },
    {
        images: '/images/blog/3.jpg',
        title: 'Justice May For You If You Are Innocent',
        avatar: '/images/blog-page/6.jpg',
        name: 'By Aliza',
        time: 'Oct 12,2020',
        id: 3
    },
]


const BlogArea = ({ className = '', title, subTitle }) => {
    return (
        <Grid className={`blogArea ${className}`}>
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={title}
                        subTitle={subTitle}
                    />
                </Grid>
                {blogs.map(blog => (
                    <Grid key={blog.id}
                        item
                        md={4}
                        sm={6}
                        xs={12}>
                        <Grid className="blogWrap">
                            <Grid className="blogImage">
                                <Link as={`/blog/${blog.id}`} href={`/blog/[id]`}>
                                    <a>
                                        <img src={blog.images} alt={blog.title} />
                                    </a>
                                </Link>
                            </Grid>
                            <Grid className="blogContent">
                                <h3><Link as={`/blog/${blog.id}`} href={`/blog/[id]`}>
                                    <a>{blog.title}</a>
                                </Link></h3>
                                <ul className="blogMeta">
                                    <li><img src={blog.avatar} alt="" /></li>
                                    <li>{blog.name}</li>
                                    <li>{blog.time}</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
export default BlogArea