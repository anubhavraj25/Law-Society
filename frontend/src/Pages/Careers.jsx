import React, { useState } from "react";
import Free from "../Assets/Free.jpg";
import NGO from "../Assets/NGO.jpg";
import clock from "../Assets/clock.png";
import WhatsApp from "../Assets/WhatsApp.jpg";
import Career from "../Assets/Career.jpg";
import { Link } from "react-router-dom";
import { UserData } from "../UserContext";

const Careers = () => {
  const { internship } = UserData();
  // console.log(internship);
  const formatDate = (isoString) => {
    if (!isoString) return "";
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <>
      <div className="section internship_container">
        <div className="internshipdetails_sec">
          {internship.map((item) => (
            <Link to={`/internship/details/${item._id}`}>
              <div className="internship_sec">
                <div className="internship_img">
                  <img src={NGO} alt="" />
                </div>
                <div className="internship_title">
                  <div class="badge badge-primary badge-outline">
                    {item.category}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="time_icon">
                    <img src={clock} alt="" />
                    <h6>{formatDate(item.postedOn)}</h6>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/*  */}
        <div className="group_container">
          <img src={Free} alt="" />
          <img src={WhatsApp} alt="" />
          <img src={Career} alt="" />
        </div>
      </div>
    </>
  );
};

export default Careers;
