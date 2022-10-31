import React from 'react'
import Link from 'next/link'
import { Grid } from '@material-ui/core'

const posts = [
    {
        image: "/images/case-studies-details/1.jpg",
        title: 'Actual teachings of the great explorer of the truth',
        id: 1
    },
    {
        image: "/images/case-studies-details/2.jpg",
        title: 'The truth, the master-builder of human happiness',
        id: 2
    },
    {
        image: "/images/case-studies-details/3.jpg",
        title: 'Explorer of the truth, the master-builder of human happiness',
        id: 3
    },
]

const RecentPosts = ({ className = "" }) => {
    return (
        <Grid className={`recentPostWrapper ${className}`}>
            <h3>Recent Case</h3>
            <ul>
                {posts.map((post, i) => (
                    <li key={i} className="postItem">
                        <Grid className="postImg">
                            <img src={post.image} alt={post.title} />
                        </Grid>
                        <Grid className="postContent">
                            <Link
                                href={`/case-stadies/[id]`}
                                as={`/case-stadies/${post.id}`}><a>{post.title}</a></Link>
                        </Grid>
                    </li>
                ))}
            </ul>
        </Grid>
    )
}
export default RecentPosts