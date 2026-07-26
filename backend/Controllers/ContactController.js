import { Contact } from "../Models/ContactModel.js";

export const newContact = async (req, res) => {
  try {
    const { fullname, mob_number, email, subject, message } = req.body;
    const addContact = new Contact({
      fullname,
      mob_number,
      email,
      subject,
      message,
    });
    await addContact.save();
    return res.status(200).json({ message: "Submit Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "error while contact" });
  }
};
