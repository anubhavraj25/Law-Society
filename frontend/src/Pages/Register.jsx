import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../Assets/login_img.png";
import logo from "../Assets/logo_bg.jpg";
import { UserData } from "../UserContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const { newUser } = UserData();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await newUser(data.fullname, data.email, data.password);

      if (response?.success == "true") {
        toast.success("Account created successfully");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="section">
        <div className="login_container">
          <div className="login_img">
            <img src={login_img} alt="" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login_form">
              <div className="login_logo">
                <img src={logo} alt="" />
              </div>
              <h4 className=" text-center">Welcome To Law Society</h4>
              <div className="input_field">
                <label htmlFor="">Full Name:</label>
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                />
              </div>
              <div className="input_field">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="input_field">
                <label htmlFor="">Password:</label>
                <input
                  type="text"
                  {...register("password", { required: true })}
                />
              </div>
              <div>
                <h6>
                  already have an account?<Link to="/login"> click here</Link>
                </h6>
              </div>
              <div className=" text-center">
                <button className="lgn-btn" disabled={loading}>
                  {loading ? (
                    <div className=" pls_wait flex gap-2">
                      <span>Please Wait</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          margin: "auto",
                          background: "transparent",
                          display: "block",
                        }}
                        width="24"
                        height="24"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          fill="none"
                          stroke="white"
                          strokeWidth="8"
                          r="35"
                          strokeDasharray="164.93361431346415 56.97787143782138"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            repeatCount="indefinite"
                            dur="1s"
                            values="0 50 50;360 50 50"
                            keyTimes="0;1"
                          />
                        </circle>
                      </svg>
                    </div>
                  ) : (
                    <div className=" flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59z" />
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                      </svg>
                      <span>Register Account</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
