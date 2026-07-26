import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NGO from "../Assets/NGO.jpg";
import clock from "../Assets/clock.png";
import { Link } from "react-router-dom";
import { UserData } from "../UserContext";
import newBadge from "../Assets/new.png";
import DOMPurify from "dompurify";

const CategoryWiseInternship = () => {
  const { user } = UserData();
  const navigate = useNavigate();
  const { category } = useParams();
  const [internships, setInternships] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // Fetch internships for the specified category
    const fetchInternships = async () => {
      try {
        const response = await fetch(
          `https://law-society-backend.onrender.com/api/internships/category/${category}`
        );
        const data = await response.json();
        setInternships(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, [category]);

  const isNew = (dateString) => {
    const today = new Date();
    const posted = new Date(dateString);
    const diffTime = today - posted;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  };

  const handleAddArticle = () => {
    navigate("/add-internship");
  };

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
      <div className="categorywise_section">
        <h1 className=" text-black">{decodeURIComponent(category)}</h1>
      </div>
      <div className="add_art_btn_sec">
        {user.user?.role === "admin" ? (
          <>
            <div className="add_art_btn" onClick={handleAddArticle}>
              <span className=" mr-2">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </span>

              <p>Add Article</p>
            </div>
          </>
        ) : (
          <p>not admin</p>
        )}
      </div>
      <div className=" category_internship_container">
        <div className="internshipsdetails_sec">
          {internships.map((item) => (
            <Link to={`/internship/details/${item._id}`}>
              <div className="internship_sec">
                {isNew(item.postedOn) && (
                  <img src={newBadge} alt="New" className="new-badge" />
                )}
                <div className="internships_img">
                  <img src={NGO} alt="" />
                </div>
                <div className="internship_title">
                  <div class="badge badge-primary badge-outline">
                    {item.category}
                  </div>
                  <h4>{item.title}</h4>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.description),
                    }}
                  />

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
        {/* <div className="group_container">
          <img src={Free} alt="" />
          <img src={WhatsApp} alt="" />
          <img src={Career} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default CategoryWiseInternship;
