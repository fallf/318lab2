const express = require("express");
const router = express.Router();
const path = require("path");

// Route for the home page
router.get("/", (req, res) => {
  res.render("app", { message: "express" });
});

// Route for the About page
router.get("/about", (req, res) => {
  res.render("about", { message: "Welcome to the About Page!" });
});

// Route for rendering the download page
router.get("/about/download", (req, res) => {
  res.render("download", { message: "Click the button to download the PDF." });
});

// Route for downloading the PDF file
router.get("/about/download-file", (req, res) => {
  const filePath = path.join(
    __dirname,
    "..",
    "docs",
    "bookingconfirmation.pdf"
  );
  res.download(filePath, "bookingconfirmation.pdf", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

module.exports = router;
