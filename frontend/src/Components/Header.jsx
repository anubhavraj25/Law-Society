import React from "react";
import header from "../Assets/Header.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header_sec">
        <img src={header} alt="" />
        <div className="header_txt">
          <h1>
            Justice Restored, Freedom Reclaimed Your Path to a Better Tomorrow.
          </h1>
          <p className=" text-white">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div className="header_link">
            <Link to="/about">Know More</Link>
            <Link to="/articles">View Articles</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
