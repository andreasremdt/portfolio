import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import { Button, Container, PageHeader, MDXWrapper } from "../primitives";
import { main } from "./post.module.css";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout pageTitle={post.frontmatter.title}>
    <PageHeader
      title={post.frontmatter.title}
      subtitle={`Posted on ${post.frontmatter.date}`}
    />
    <Container className={main}>
      <MDXWrapper>{post.body}</MDXWrapper>

      <Button to="/blog/">Back to blog</Button>
    </Container>
  </Layout>
);

export default PostTemplate;
