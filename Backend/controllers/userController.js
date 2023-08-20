const Contact = require("../models/Contact");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const DiaryEntry = require("../models/Entry");
const jwt = require("jsonwebtoken");
// const currentDate="wednesday";

require("dotenv").config();
const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "Fill all details" });
    }
    const isUser = await User.findOne({ email: email }); //undefined
    if (isUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    return res.status(200).json({ message: "user registered", user: newUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Fill all details" });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      const isPasswordValid = await bcrypt.compare(password, isUser.password);
      if (isPasswordValid) {
        const accessToken = await jwt.sign(
          { userId: isUser._id },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "1d",
          }
        );
        return res.status(200).json({
          message: "Login successful",
          firstname: isUser.firstname,
          accessToken,
        });
      } else {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    } else {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const contactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!email || !name || !message) {
      return res.status(400).json({ message: "Fill all details" });
    }
    const newContact = await Contact.create(req.body);
    return res
      .status(200)
      .json({ message: "Your Message has now been received" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

// Function to handle image uploads and store them in the `images` array
const handleImageUpload = async (req, res) => {
  try {
    const { comment } = req.body;
    if (!comment) {
      return res.status(400).json({ message: "Fill details properly" });
    }
    const images = req.files.map((file) => {
      return {
        data: file.buffer, // Binary image data from multer
        contentType: file.mimetype, // Image MIME type from multer
      };
    });

    console.log("Hello", req.userId);

    const newEntry = await DiaryEntry.create({
      currentDate,
      comment,
      images,
      user: req.userId,
    });

    console.log("Hello", newEntry);

    return res.status(200).json({ message: "Entry created", entry: newEntry });
  } catch (error) {
    console.error("Error creating entry:", error);
    return res.status(500).json({ error: "Failed to create entry" });
  }
};

const getAllEntries = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).populate("entries");
    console.log("Hello", user.entries);
    return res.status(200).json({ entries: user.entries, status: 200 });
  } catch (error) {
    console.error("Error fetching entries:", error);
    return res.status(500).json({ error: "Failed to fetch entries" });
  }
};

const deleteEntry = async (req, res) => {
  const entryId = req.params.id;
  try {
    await DiaryEntry.findByIdAndDelete(entryId);
    return res.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting entry:", error);
    return res.status(500).json({ error: "Failed to delete entry" });
  }
};

module.exports = {
  signup,
  signin,
  contactForm,
  handleImageUpload,
  getAllEntries,
  deleteEntry,
};
