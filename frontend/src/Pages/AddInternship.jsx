import React, { useState } from "react";
import { UserData } from "../UserContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";

const AddInternship = () => {
  const { user } = UserData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: user.user?.fullname || "",
    location: "",
    duration: "",
    stipend: "",
    description: "",
    requirements: "",
    skillsRequired: "",
    postedBy: user.user?.fullname || "",
    applicationDeadline: "",
    category: "",
  });

  const categories = [
    "Government Internship",
    "Paid Legal Internship",
    "Online Internship",
    "NGO Internship",
    "Internship with Advocate",
    "Internship with Law Firm",
    "Corporate Internship",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedDescription = DOMPurify.sanitize(formData.description);

    

    const payload = {
      ...formData,
      description: sanitizedDescription,
    };

    try {
      const res = await axios.post(
        "https://law-society-backend.onrender.com/api/add/internship",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      toast.success("Internship added successfully");
      navigate("/internships");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error("Internship upload failed");
    }

    console.log("Form submitted:", payload);
  };

  return (
    <div className="form-container">
      <h2>Internship Form</h2>
      <form onSubmit={handleSubmit} className="internship-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Stipend:
          <input
            type="text"
            name="stipend"
            value={formData.stipend}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <ReactQuill
            theme="snow"
            value={formData.description}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                description: value,
              }))
            }
            placeholder="Write your description here..."
          />
        </label>

        <label>
          Requirements (comma separated):
          <input
            type="text"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
          />
        </label>

        <label>
          Skills Required (comma separated):
          <input
            type="text"
            name="skillsRequired"
            value={formData.skillsRequired}
            onChange={handleChange}
          />
        </label>

        <label>
          Posted By:
          <input
            type="text"
            name="postedBy"
            value={formData.postedBy}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Application Deadline:
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddInternship;
