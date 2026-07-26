import React from "react";
import family from "../Assets/family.png";
import business from "../Assets/business.png";
import trust from "../Assets/trust.png";
import file from "../Assets/file.png";
import education from "../Assets/education.png";
import workers from "../Assets/workers.png";
import global from "../Assets/global.png";
import banking from "../Assets/banking.png";

const Features = () => {
  return (
    <>
      <div className="service_container">
        <h2>Our Practice Areas</h2>
        <h6>
          Problems trying to resolve the conflict between the two major realms.
        </h6>
        <div className="services">
          <div className="service">
            <img src={business} alt="" />
            <h4>Trust & Estates</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={trust} alt="" />
            <h4>Business Law</h4>
            <h6>
              Quality excellence for optimal and sustainable business operation.
            </h6>
          </div>
          <div className="service">
            <img src={family} alt="" />
            <h4>Family Law</h4>
            <h6>Optimize human resources for sustainable business growth.</h6>
          </div>
          <div className="service">
            <img src={file} alt="" />
            <h4>Civil Law</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={education} alt="" />
            <h4>Education Law</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={workers} alt="" />
            <h4>Corporate Law</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={global} alt="" />
            <h4>Banking and Finance</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
          <div className="service">
            <img src={banking} alt="" />
            <h4>International Law</h4>
            <h6>
              Strategic method development for business excellence and progress.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
