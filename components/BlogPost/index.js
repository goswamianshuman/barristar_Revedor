import React, { Fragment } from 'react'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
const blogs = [
    {
        image: '/images/blog-page/1.jpg',
        title: 'What lawyer can do for you',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        avatar: '/images/blog-page/6.jpg',
        name: 'By Aliza anne',
        level: 'Family Law',
        date: 'Feb 12,2020',
        id: 1
    },
    {
        image: '/images/blog-page/2.jpg',
        title: 'who do not know how to pursue pleasure',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        avatar: '/images/blog-page/6.jpg',
        name: 'Kaji Hasib',
        level: 'Business Law',
        date: 'Jan 12,2020',
        id: 2
    },
    {
        image: '/images/blog-page/3.jpg',
        title: 'How you can find the best justice',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        avatar: '/images/blog-page/6.jpg',
        name: 'Jone doe',
        level: 'Business Law',
        date: 'Oct 12,2020',
        id: 3
    },
    {
        image: '/images/blog-page/4.jpg',
        title: 'who do not know how to pursue pleasure',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        avatar: '/images/blog-page/6.jpg',
        name: 'Alex Jon',
        level: 'Company Law',
        date: 'Nov 12,2020',
        id: 4
    },
    {
        image: '/images/blog-page/5.jpg',
        title: 'What lawyer can do for you',
        text: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
        avatar: '/images/blog-page/6.jpg',
        name: 'Alex Jon',
        level: 'Company Law',
        date: 'Nov 12,2020',
        id: 5
    },
]
const BlogPost = () => {
    return (
        <Fragment>
            {blogs.map((blog, i) => (
                <Grid key={i} className="blogPostWrapper">
                    <Grid className="blogPostImg">
                        <Link as={`/blog/${blog.id}`} href={`/blog/[id]`}>
                            <a>
                                <img src={blog.image} alt={blog.title} />
                            </a>
                        </Link>
                    </Grid>
                    <Grid className="blogPostContent">
                        <ul className="blogPostMeta">
                            <li><img src={blog.avatar} alt={blog.name} /></li>
                            <li>{blog.name}</li>
                            <li>{blog.level}</li>
                            <li>{blog.date}</li>
                        </ul>
                        <h3>
                            <Link as={`/blog/${blog.id}`} href={`/blog/[id]`}>
                                <a>{blog.title}</a>
                            </Link>
                        </h3>
                        <p>{blog.text}</p>
                        <Link as={`/blog/${blog.id}`} href={`/blog/[id]`}>
                            <a className="readmore">Read more..</a>
                        </Link>
                    </Grid>
                </Grid>
            ))
            }
        </Fragment >
    )
}
export default BlogPost