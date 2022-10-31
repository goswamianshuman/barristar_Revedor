import React, { Fragment } from 'react'
import Head from 'next/head'
import { Grid } from '@material-ui/core'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import CetagorySidebar from '../../components/CetagorySidebar'
import SearchSidebar from '../../components/SearchSidebar'
import RecentPosts from '../../components/RecentPosts'


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

function getPostDataById(id) {
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].id === parseInt(id)) {
            return blogs[i];
        }
    }
}

const BlogDetails = ({ id }) => {
    const blog = getPostDataById(id);
    const breadcumbMenu = [
        { name: 'Home', route: '/' },
        { name: 'Practice', route: '/practice' },
        { name: blog.title }
    ]
    return (
        <Fragment>
            <Head>
                <title>Blog {blog.title}</title>
            </Head>
            <Breadcumb
                title={blog.title}
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <Grid className="singleArea ptb100">
                <Grid container spacing={4} className="container">
                    <Grid item md={8}>
                        <Grid className="blogPostWrapper mb0">
                            <Grid className="blogPostImg">
                                <img src={blog.image} alt={blog.title} />
                            </Grid>
                            <Grid className="blogPostContent">
                                <ul className="blogPostMeta">
                                    <li><img src={blog.avatar} alt={blog.name} /></li>
                                    <li>{blog.name}</li>
                                    <li>{blog.level}</li>
                                    <li>{blog.date}</li>
                                </ul>
                                <h3>{blog.title}</h3>
                                <p>{blog.text}</p>
                                <p style={{ marginBottom: "20px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate perferendis tenetur dolorem sunt necessitatibus quasi ullam, nihil, magni distinctio ipsa minus assumenda maiores doloribus voluptatem quas consectetur possimus suscipit praesentium reprehenderit. Pariatur reprehenderit eius nostrum libero dicta cum nobis.</p>
                                <p style={{ marginBottom: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio tempora dolorum, sint dolore explicabo vel magnam fugiat eveniet voluptatem fuga, quas assumenda cum repellat amet hic est distinctio sit doloribus necessitatibus enim ut. Cumque, iusto error pariatur id quisquam ut vitae quod illum voluptatem ullam corrupti non voluptatibus, quas amet placeat nemo animi modi recusandae, repellendus adipisci officiis facilis fugiat corporis! Necessitatibus error iste minima alias est vel doloribus atque nam distinctio suscipit iusto quo possimus quas, assumenda eaque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium natus consequuntur odit sit obcaecati saepe itaque ea, voluptates cumque maiores minima, nemo excepturi libero asperiores consectetur rem beatae aliquid non facilis ad, assumenda enim quaerat! Mollitia molestiae sit dolore odit, excepturi facere ut corrupti qui dignissimos, recusandae incidunt libero molestias quod, tempore at ratione. Nesciunt, numquam suscipit sit non aperiam beatae natus voluptatum saepe modi, sint quae asperiores amet pariatur hic magni iste animi, deleniti fugiat. Fuga itaque nulla dolore, architecto minus impedit autem quae laboriosam. Culpa iusto, similique quod labore dolorum, quam pariatur distinctio optio nihil in illo voluptate eius sequi quas itaque recusandae tenetur harum ut, possimus voluptas! Sed a inventore saepe porro veritatis! Facere quidem soluta expedita!</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <aside className="pr25">
                            <SearchSidebar />
                            <CetagorySidebar title="Blog Category" />
                            <RecentPosts />
                        </aside>
                    </Grid>
                </Grid>
            </Grid>
            <NewsLetter
                className="newsLetterArea"
            />
        </Fragment>
    );
}
export default BlogDetails

BlogDetails.getInitialProps = async ({ query }) => {
    const { id } = query;
    return { id };
};