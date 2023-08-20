const express = require("express");
const multer = require("multer");
const {
  signup,
  signin,
  contactForm,
  handleImageUpload,
  getAllEntries,
  deleteEntry,
} = require("../controllers/userController");
const userController = require("../controllers/userController");
const { isAuthenticated } = require("../Middleware/verifyJWT");
const router = express.Router();
router.route("/register").post(signup);
router.route("/login").post(signin);
router.route("/contact").post(contactForm);
router.route("/compose").post(handleImageUpload);

router.route("/entries").get(isAuthenticated, getAllEntries);
router.route("/entries/:id").delete(deleteEntry);

router.use(isAuthenticated);
module.exports = router;
// Set up Multer for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// Handle the image upload in the userController
// Define other routes for user registration, login, etc.
// router.post("/register", userController.signup);
// router.post("/login", userController.signin);

// router.post("/contact", userController.contactForm);
// router.post("/compose", upload.array("images", 5), userController.handleImageUpload);
