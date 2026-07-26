import React from "react";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
  return (
    <>
      <div className="section blog_container">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default Blogs;
