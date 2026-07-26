import { Internships } from "../Models/InternshipModel.js";

export const createInternship = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      duration,
      stipend,
      description,
      requirements,
      skillsRequired,
      postedBy,
      applicationDeadline,
      category, // New field
    } = req.body;

    const newInternship = new Internships({
      title,
      company,
      location,
      duration,
      stipend,
      description,
      requirements,
      skillsRequired,
      postedBy,
      applicationDeadline,
      category, // New field
    });

    const savedInternship = await newInternship.save();
    res.status(201).json(savedInternship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internships.find();
    res.status(200).json(internships);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

export const getInternshipsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const internships = await Internships.find({ category });
    res.status(200).json(internships);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const singleInternship = async (req, res) => {
  try {
    const internship = await Internships.findById(req.params.id);
    if (!internship) {
      return res.status(404).json({ error: "Internship not found" });
    }
    res.status(200).json(internship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateInternship = async (req, res) => {
  try {
    const updatedInternship = await Internships.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedInternship) {
      return res.status(404).json({ error: "Internship not found" });
    }
    res.status(200).json(updatedInternship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteInternship = async (req, res) => {
  try {
    const deletedInternship = await Internships.findByIdAndDelete(
      req.params.id
    );
    if (!deletedInternship) {
      return res.status(404).json({ error: "Internship not found" });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const applyForInternship = async (req, res) => {
  try {
    const { userId } = req.body;
    const internship = await Internships.findById(req.params.id);
    if (!internship) {
      return res.status(404).json({ error: "Internship not found" });
    }

    // Check if the user has already applied
    if (internship.applicants.includes(userId)) {
      return res
        .status(400)
        .json({ error: "You have already applied for this internship" });
    }

    internship.applicants.push(userId);
    await internship.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
