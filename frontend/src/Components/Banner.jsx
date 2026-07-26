import React from "react";
import banner from "../Assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner_sec">
        <img src={banner} alt="" />
        <div className="banner_txt">
          <h2 className=" text-white">
            Stay Update on Newest Article for Your Success
          </h2>
          <p className=" text-white">
            Subscribe Our newsletter, so you can get every latest article and
            information about us every week.
          </p>
          <div className="sub_btn text-center">
            <Link>Subscribe</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
