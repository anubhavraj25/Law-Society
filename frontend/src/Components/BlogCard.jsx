import React from "react";
import { Link } from "react-router-dom";
import article from "../Assets/article.png";

const BlogCard = () => {
  return (
    <>
      <div className="article_section">
        <img src={article} alt="" />
        <h5 className=" text-center">The Dilemma Continues</h5>
        <Link to="/blog/details">
          <div className=" readmorebtn">Read More</div>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
