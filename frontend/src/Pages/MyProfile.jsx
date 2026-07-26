import React, { useEffect } from "react";
import profile from "../Assets/profile.jpg";
import { UserData } from "../UserContext";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user, logoutUser } = UserData();
  const navigate = useNavigate();
  console.log(user?.user);
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <div className="profile_container">
        <h2 className=" text-center mt-1">My Profile</h2>
        <div className="profile_sec">
          <div className="profile_img">
            <img src={profile} alt="" />
          </div>
          <div className="profile_data">
            <h5 className=" flex items-center">
              User Id:{" "}
              <span>
                <p>
                  {user?.user?._id ? user.user._id.slice(-4) : "Loading..."}
                </p>
              </span>
            </h5>

            <h5 className=" flex items-center">
              Full Name:
              <span>
                <p> {user?.user?.fullname || "Loading..."}</p>
              </span>
            </h5>

            <h5 className=" flex items-center">
              Email:{" "}
              <span>
                <p> {user?.user?.email || "Loading..."}</p>
              </span>
            </h5>

            <h5 className=" flex items-center">
              Role:{" "}
              <span>
                <p> {user?.user?.role || "Loading..."}</p>
              </span>
            </h5>
            <div
              className="badge badge-warning cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
