import React from "react";
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer text-base-content p-10">
        <aside>
          <img src={logo} alt="" className="footer_logo" />
          <p className=" text-white">
            LAW Society Pvt. Ltd.
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav className=" text-white">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className=" text-white">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className=" text-white">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
