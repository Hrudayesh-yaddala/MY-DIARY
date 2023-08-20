const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const userRouter = require("./routes/userRoute");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const DiaryEntry = require("./models/Entry");
const { isAuthenticated } = require("./Middleware/verifyJWT");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret:process.env.API_SECRET,
});

const mongoURI = process.env.MONGODB_URL;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

const storage = multer.diskStorage({});
const upload = multer({ storage });

app.get("/api/user/entries/:id", async (req, res) => {
  try {
    const entryId = req.params.id;
    const entry = await DiaryEntry.findById(entryId);
    if (!entry) {
      return res.status(404).json({ error: "Entry not found" });
    }
    return res.status(200).json({ entry });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch entry" });
  }
});

app.post(
  "/compose",
  isAuthenticated,
  upload.array("images", 5),
  async (req, res) => {
    const files = req.files;
    const uploadedImages = [];

    try {
      // Upload each image to Cloudinary
      const { comment } = req.body;
      if (!comment) {
        return res.status(400).json({ message: "Fill details properly" });
      }
      for (const file of files) {
        const result = await cloudinary.uploader.upload(file.path);
        uploadedImages.push(result.secure_url);
      }

      // Create a new entry in the database with the uploaded images
      const entry = new DiaryEntry({
        date: req.body.date,
        comment: req.body.comment,
        images: uploadedImages,
        user: req.userId,
      });

      await entry.save();

      return res.status(200).json({ message:"Entry successfully created",entry});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to upload images" });
    }
  }
);

app.use("/api/user", userRouter);
app.listen(3000, () => {
  console.log("server started in terminal");
});
