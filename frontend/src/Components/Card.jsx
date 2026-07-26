import React from "react";
import { Link } from "react-router-dom";
import { UserData } from "../UserContext";
import badge from "../Assets/badge.png";

const Card = () => {
  const { articles } = UserData();
  const isNew = (dateString) => {
    const today = new Date();
    const posted = new Date(dateString);
    const diffTime = today - posted;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {articles.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <img
            src={`https://law-society-backend.onrender.com/${item.image}`}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {item.category}
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                {item.writtenBy}
              </span>
              {isNew(item.date) && (
                <span className="newbadge">
                  <img src={badge} alt="" />
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
              {item.title}
            </h3>
            <Link
              to={`/articles/details/${item._id}`}
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-200"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
