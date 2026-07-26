import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  stipend: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: [String], required: true },
  skillsRequired: { type: [String], required: true },
  postedBy: { type: String, required: true },
  postedOn: { type: Date, default: Date.now },
  applicationDeadline: { type: Date, required: true },
  applicants: { type: [String], default: [] },
  category: { type: String, required: true },
});

export const Internships = mongoose.model("Internships", internshipSchema);
