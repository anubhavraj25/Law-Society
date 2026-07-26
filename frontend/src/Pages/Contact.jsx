import React, { useEffect } from "react";
import mobile from "../Assets/mobile.png";
import email from "../Assets/email.png";
import call from "../Assets/call.jpg";
import getintouch from "../Assets/getintouch.jpg";
import { useForm } from "react-hook-form";
import { UserData } from "../UserContext";

const Contact = () => {
  const { contact } = UserData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await contact(
      data.fullname,
      data.mob_number,
      data.email,
      data.subject,
      data.message
    );
    reset();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="section">
        <div className="contact_sec">
          <div className="contact_left">
            <h1 className=" text-black">Reach out to Us Right Away</h1>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              sequi accusantium optio cupiditate itaque illum veritatis porro,
              eos et eius.
            </h6>
            <div className="connection_section">
              <div className="connection">
                <div className="mobile_icon">
                  <img src={mobile} alt="" />
                </div>
                <div className="mobile_no">
                  <h5>Phone Number</h5>
                  <h6>7589986154</h6>
                </div>
              </div>
              <div className="connection">
                <div className="mobile_icon">
                  <img src={email} alt="" />
                </div>
                <div className="mobile_no">
                  <h5>Email</h5>
                  <h6>internship.lawsociety344@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_right">
            <img src={getintouch} alt="contact" />
          </div>
        </div>
        {/*  */}
        <div className="contact_form_section">
          <div className="contact_form_img">
            <img src={call} alt="" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact_form">
              <h2>We Will be Happy to Help You!</h2>
              <div className="form_sec">
                <div className="input_field">
                  <label htmlFor="">Full Name:</label>
                  <input
                    type="text"
                    {...register("fullname", { required: true })}
                  />
                </div>
                <div className="input_field">
                  <label htmlFor="">Phone Number:</label>
                  <input
                    type="Number"
                    {...register("mob_number", { required: true })}
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
                  <label htmlFor="">Subject You Want To Discuss:</label>
                  <input
                    type="text"
                    {...register("subject", { required: true })}
                  />
                </div>
                <div className="input_field">
                  <label htmlFor="">Message:</label>
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    cols="50"
                    {...register("message", { required: true })}
                  ></textarea>
                </div>
                <div className=" text-center">
                  <button className="btns">
                    Send Message{" "}
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
                        d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
