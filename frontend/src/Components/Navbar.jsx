import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import { UserData } from "../UserContext";

const Navbar = () => {
  const { isAuth, logoutUser } = UserData();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const internshipCategories = [
    "Government Internship",
    "Paid Legal Internship",
    "Online Internship",
    "NGO Internship",
    "Internship with Advocate",
    "Internship with Law Firm",
    "Corporate Internship",
    "Internship Guide",
  ];

  const resourceCategories = ["Legal Draft", "Career Guide", "Legal News"];

  const opportunityCategories = [
    "Call for Blog and Articles",
    "Essay Competitions",
    "Call for Paper",
    "Moot Court Competitions",
    "Webinar",
    "Conference",
  ];

  return (
    <nav className="navbar">
      
        {/* Logo - Fully left on large screen */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Law Society Logo" />
            </Link>
          </div>
        </div>

        {/* Toggle for Mobile */}
        <div
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleNavbar}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>

        {/* Center - Navigation Links */}
        <div className="navbar-center">
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <Link to="/" className="nav-link" onClick={closeNavbar}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={closeNavbar}>
              About
            </Link>
            <Link to="/articles" className="nav-link" onClick={closeNavbar}>
              Articles
            </Link>

            {/* Internships Dropdown */}
            <div
              className={`dropdown ${
                activeDropdown === "internships" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-toggle nav-link"
                onClick={() => toggleDropdown("internships")}
              >
                Internships{" "}
                <span className="arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="dropdown-menu">
                {internshipCategories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/internships/category/${encodeURIComponent(category)}`}
                    className="dropdown-item"
                    onClick={closeNavbar}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className={`dropdown ${
                activeDropdown === "resources" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-toggle nav-link"
                onClick={() => toggleDropdown("resources")}
              >
                Resources{" "}
                <span className="arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="dropdown-menu">
                {resourceCategories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/resources/category/${encodeURIComponent(category)}`}
                    className="dropdown-item"
                    onClick={closeNavbar}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Opportunities Dropdown */}
            <div
              className={`dropdown ${
                activeDropdown === "opportunities" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-toggle nav-link"
                onClick={() => toggleDropdown("opportunities")}
              >
                Opportunities{" "}
                <span className="arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="dropdown-menu">
                {opportunityCategories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/opportunities/category/${encodeURIComponent(
                      category
                    )}`}
                    className="dropdown-item"
                    onClick={closeNavbar}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="nav-link" onClick={closeNavbar}>
              Contact
            </Link>
          </div>
        </div>

        {/* Right - Login/Profile */}
        <div className="navbar-right">
          <div className="auth-section">
            {isAuth ? (
              <div className="profile-dropdown">
                <button className="profile-button">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Profile"
                  />
                </button>
                <div className="dropdown-content">
                  <button
                    onClick={() => {
                      closeNavbar();
                      navigate("/my-profile");
                    }}
                  >
                    <span>My Profile</span>
                  </button>
                  <button
                    onClick={() => {
                      closeNavbar();
                      navigate("/saved");
                    }}
                  >
                    <span>Saved Internships</span>
                  </button>
                  <button
                    onClick={() => {
                      closeNavbar();
                      handleLogout();
                    }}
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn-login" onClick={closeNavbar}>
                  Login
                  <svg className="icon" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
