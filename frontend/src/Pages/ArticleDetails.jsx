import React, { useEffect, useState } from "react";
import youtube from "../Assets/youtube.png";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { UserData } from "../UserContext";
import DOMPurify from "dompurify"; // ✅ Add this import

const ArticleDetails = () => {
  const { user } = UserData();
  const navigate = useNavigate();
  const [articleDetails, setArticleDetails] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getArticleDetails = async () => {
    try {
      const res = await axios.get(
        `https://law-society-backend.onrender.com/api/articles/${id}`
      );
      setArticleDetails(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch article");
    }
  };

  useEffect(() => {
    getArticleDetails();
  }, [id]);

  const formatDate = (isoString) => {
    if (!isoString) return "";
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const deleteArticle = async () => {
    try {
      await axios.delete(
        `https://law-society-backend.onrender.com/api/articles/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      toast.success("Article deleted successfully");
      navigate("/articles");
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  const updateArticle = () => {
    navigate(`/edit-article/${id}`);
  };

  return (
    <>
      <div className="section articlesdetails_container">
        <div className="articlesdetails_sec">
          <h3>{articleDetails.title}</h3>
          <img
            src={`https://law-society-backend.onrender.com/${articleDetails.image}`}
            alt=""
          />
          <br />
          <div className="sht_desc">
            <p>Published Date: {formatDate(articleDetails.date)}</p>
            <p>Category: {articleDetails.category}</p>
            <p>Posted By: {articleDetails.writtenBy}</p>
          </div>

          <div className="article_desc">
            {/* ✅ Renders HTML safely */}
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(articleDetails.description),
              }}
            />
          </div>

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
                <span>Update Article</span>
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
                <span>Delete Article</span>
              </div>
            </>
          ) : (
            <p>not admin</p>
          )}
        </div>

        {/* Right column - advertisement */}
        {/* <div className="advertisment_container">
          <div className="youtube_video">
            <iframe
              src="https://www.youtube.com/embed/K65DEXrR9As"
              title="MUST Know Important Laws of India!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="channel_sec">
            <div className="channel_container">
              <img src={youtube} alt="" />
              <div className="channel_name">
                <h3 className=" text-black">Law Society</h3>
                <h6>For Video Content Subscribe Us On Youtube</h6>
              </div>
            </div>
            <div className="subscribe_btn">
              <a href="#">
                Subscribe Channel{" "}
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="ads_container">Advertisement</div>
        </div> */}
      </div>
    </>
  );
};

export default ArticleDetails;
