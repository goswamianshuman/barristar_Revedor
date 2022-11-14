import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import { blogs_recent_posts } from "../../data/data";

const RecentPosts = ({ className = "" }) => {
  return (
    <Grid className={`recentPostWrapper ${className}`}>
      <h3>Recent Case</h3>
      <ul>
        {blogs_recent_posts.map((post, i) => (
          <li key={i} className="postItem">
            <Grid className="postImg">
              <img src={post.image} alt={post.title} />
            </Grid>
            <Grid className="postContent">
              <Link
                legacyBehavior
                href={`/case-stadies/[id]`}
                as={`/case-stadies/${post.id}`}
              >
                <p>{post.title}</p>
              </Link>
            </Grid>
          </li>
        ))}
      </ul>
    </Grid>
  );
};
export default RecentPosts;
