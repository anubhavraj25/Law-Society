import React, { useEffect, useState } from "react";
import Free from "../Assets/Free.jpg";
import NGO from "../Assets/NGO.jpg";
// import clock from "../Assets/clock.png";
import sheet from "../Assets/sheet.png";
import eye from "../Assets/eye.png";
import WhatsApp from "../Assets/WhatsApp.jpg";
import Career from "../Assets/Career.jpg";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import DOMPurify from "dompurify";
import { UserData } from "../UserContext";

const InternshipDetails = () => {
  const { user } = UserData();
  const navigate = useNavigate();
  const [internshipDetails, setInternshipDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getInternshipDetails = async () => {
    try {
      const res = await axios.get(
        `https://law-society-backend.onrender.com/api/internship/${id}`
      );
      console.log(res.data);
      setInternshipDetails(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getInternshipDetails();
  });

  //
  const formatDate = (isoString) => {
    if (!isoString) return "";
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const deleteArticle = async () => {
    try {
      await axios.delete(
        `https://law-society-backend.onrender.com/api/internships/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success("Internship deleted successfully");
      navigate("/internships");
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  const updateArticle = () => {
    navigate(`/edit-internship/${id}`);
  };

  return (
    <>
      <div className="section internship_container">
        <div className="internshipdetails_sec">
          <h3>{internshipDetails.title}</h3>
          <img src={NGO} alt="" />
          <div className="badge badge-primary">
            {internshipDetails.category}
          </div>
          <div className="details_count">
            <img src={sheet} alt="" />
            <img src={eye} alt="" />
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(internshipDetails.description),
            }}
          />

          <div>
            <h2>Requirements</h2>
            <p>
              {internshipDetails.requirements?.map((item) => (
                <p>{item}</p>
              ))}
            </p>
          </div>
          <div>
            <h2>Skill Required</h2>
            <p>
              {internshipDetails.skillsRequired?.map((item) => (
                <p>{item}</p>
              ))}
            </p>
          </div>
          <div>
            <p>
              <strong>Company:</strong> {internshipDetails.company}
            </p>
            <p>
              <strong>Location:</strong> {internshipDetails.location}
            </p>
            <p>
              <strong>Duration:</strong> {internshipDetails.duration}
            </p>
            <p>
              <strong>Stipend:</strong> {internshipDetails.stipend}
            </p>
            <p>
              <strong>Application Deadline:</strong>{" "}
              {formatDate(internshipDetails.applicationDeadline)}
            </p>
          </div>
        </div>
        <div>
          {user.user?.role === "admin" ? (
            <>
              <div
                className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 ease-in-out px-4 py-2 rounded-md shadow cursor-pointer"
                onClick={updateArticle}
              >
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
                <span>Update Internship</span>
              </div>

              <div
                className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 transition-all duration-200 ease-in-out px-4 py-2 rounded-md shadow cursor-pointer mt-3"
                onClick={deleteArticle}
              >
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                  />
                </svg>
                <span>Delete Internship</span>
              </div>
            </>
          ) : (
            <p>not admin</p>
          )}
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

export default InternshipDetails;
