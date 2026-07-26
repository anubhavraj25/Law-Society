import React from "react";
import Header from "../Components/Header";
import Services from "../Components/Services";
import Features from "../Components/Features";
import Lawyer from "../Components/Lawyer";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <>
      <div className="section">
        <Header />
        <div className="service_sec">
          <Services />
          <Features />
        </div>
        <Lawyer />
        <Banner />
      </div>
    </>
  );
};

export default Home;
