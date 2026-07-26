import React, { useEffect } from "react";
import about from "../Assets/about.png";
import Services from "../Components/Services";
import Features from "../Components/Features";
import FAQ from "../Components/FAQ";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="abt_container section"></div>
      <div className="abt_header">
        <div className="abt_header_right">
          <img src={about} alt="" />
        </div>
        <div className="abt_header_left">
          <h6>About Us</h6>
          <h4>Know More About Law Society</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            itaque autem doloremque optio maiores asperiores blanditiis vero
            totam vitae, ut tempore similique aspernatur nostrum est deserunt
            veritatis laborum minima facilis. Dolor, in nostrum quidem dolore
            excepturi odit asperiores vitae vero, earum velit corporis fuga
            tenetur distinctio et fugiat? Quisquam voluptas recusandae nesciunt,
            perferendis consequuntur earum officia! Molestias aliquid iure
            aperiam voluptates laboriosam recusandae unde architecto quis autem,
            adipisci doloribus commodi odit, cumque eius assumenda. Quia in
            natus illum, voluptatibus ipsam consectetur. Ut, dolores!
          </p>
        </div>
      </div>
      <div className="sevices_container">
        <Services />
      </div>
      <div className="sevices_container">
        <Features />
      </div>
      <div className="analytics_sec">
        <div className=" text-center">
          <h3>1200</h3>
          <h5>Satisfied Customers</h5>
        </div>
        <div className=" text-center">
          <h3>98%</h3>
          <h5>Successful Cases</h5>
        </div>
        <div className=" text-center">
          <h3>32</h3>
          <h5>Years of Experince</h5>
        </div>
        <div className=" text-center">
          <h3>1800</h3>
          <h5>Case Closed</h5>
        </div>
      </div>
      <div className="faq_container">
        <FAQ />
      </div>
    </>
  );
};

export default About;
