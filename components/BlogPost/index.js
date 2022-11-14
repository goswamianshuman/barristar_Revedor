import React, { Fragment } from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import { blog } from "../../data/data";

const BlogPost = () => {
  return (
    <Fragment>
      {blog.map((blog, i) => (
        <Grid key={i} className="blogPostWrapper">
          <Grid className="blogPostImg">
            <Link legacyBehavior as={`/blog/${blog.id}`} href={`/blog/[id]`}>
              <p>
                <img src={blog.image} alt={blog.title} />
              </p>
            </Link>
          </Grid>
          <Grid className="blogPostContent">
            <ul className="blogPostMeta">
              <li>
                <img src={blog.avatar} alt={blog.name} />
              </li>
              <li>{blog.name}</li>
              <li>{blog.level}</li>
              <li>{blog.date}</li>
            </ul>
            <h3>
              <Link legacyBehavior as={`/blog/${blog.id}`} href={`/blog/[id]`}>
                <p>{blog.title}</p>
              </Link>
            </h3>
            <p>{blog.text}</p>
            <Link legacyBehavior as={`/blog/${blog.id}`} href={`/blog/[id]`}>
              <a className="readmore">Read more..</a>
            </Link>
          </Grid>
        </Grid>
      ))}
    </Fragment>
  );
};
export default BlogPost;
