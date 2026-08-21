const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const protect = require("../middleware/authMiddleware");

const {
  createProperty,
  getProperties,
  getMyProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

// Create Property
router.post("/", protect, upload.array("images", 10), createProperty);

// Get All Properties
router.get("/", getProperties);

// Get My Properties
router.get("/my", protect, getMyProperties);

// Get Single Property
router.get("/:id", getPropertyById);

// Update Property
router.put("/:id", protect, upload.array("images", 10), updateProperty);

// Delete Property
router.delete("/:id", protect, deleteProperty);

module.exports = router;