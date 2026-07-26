import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useLocation, useNavigate } from "react-router-dom";
import { UserData } from "../UserContext";

const Articles = () => {
  const { user, getAllArticles } = UserData();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    getAllArticles();
  }, [location.pathname]);
  const handleAddArticle = () => {
    navigate("/add-article");
  };
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <div className="section article_container">
        <h3>All Articles Collection</h3>
        <div className="article_container_top">
          <div className="search_box">
            <input type="search" placeholder="Search Article Here..." />
          </div>
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
        <div className="article_card">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Articles;
