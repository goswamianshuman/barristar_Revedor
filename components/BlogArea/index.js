import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import SectionTitle from "../Title";
import { blogs, blogs_text } from "../../data/home";

const BlogArea = ({ className = "" }) => {
  return (
    <Grid className={`blogArea ${className}`}>
      <Grid container spacing={4} className="container">
        <Grid item xs={12}>
          <SectionTitle
            title={blogs_text[0].title}
            subTitle={blogs_text[0].subTitle}
          />
        </Grid>
        {blogs.map((blog) => (
          <Grid key={blog.id} item md={4} sm={6} xs={12}>
            <Grid className="blogWrap">
              <Grid className="blogImage">
                <Link
                  legacyBehavior
                  as={`/blog/${blog.id}`}
                  href={`/blog/[id]`}
                >
                  <p>
                    <img src={blog.images} alt={blog.title} />
                  </p>
                </Link>
              </Grid>
              <Grid className="blogContent">
                <h3>
                  <Link
                    legacyBehavior
                    as={`/blog/${blog.id}`}
                    href={`/blog/[id]`}
                  >
                    <p>{blog.title}</p>
                  </Link>
                </h3>
                <ul className="blogMeta">
                  <li>
                    <img src={blog.avatar} alt="" />
                  </li>
                  <li>{blog.name}</li>
                  <li>{blog.time}</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default BlogArea;
