import React from "react";
import judge from "../Assets/judge.jpg";
import judge_1 from "../Assets/judge_1.jpg";
import image_2 from "../Assets/image_2.jpg";

const Journals = () => {
  return (
    <>
      <div className="section">
        <div className="judge_sec">
          <div className="judge_card">
            <img src={judge} alt="" />
            <h5>Justice Sanjiv Khanna</h5>
            <h6 className=" text-center">Chief Justice of India</h6>
          </div>
          <div className="judge_card">
            <img src={judge_1} alt="" />
            <h5>Justice Sanjiv Khanna</h5>
          </div>
          <div className="judge_card">
            <img src={image_2} alt="" />
            <h5>Justice Sanjiv Khanna</h5>
          </div>
          <div className="judge_card">
            <img src={judge} alt="" />
            <h5>Justice Sanjiv Khanna</h5>
          </div>
          <div className="judge_card">
            <img src={judge} alt="" />
            <h5>Justice Sanjiv Khanna</h5>
          </div>
          <div className="judge_card">
            <img src={judge} alt="" />
            <h5>Justice Sanjiv Khanna</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journals;
