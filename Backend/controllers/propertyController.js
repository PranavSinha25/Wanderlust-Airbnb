console.log("🚀 PROPERTY CONTROLLER LOADED");
const Property = require("../models/Property");

// ======================
// Create Property
// ======================
const createProperty = async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILES:", req.files);
  try {
    const {
      title,
      description,
      location,
      category,
      price,
      guests,
      bedrooms,
      bathrooms,
      beds,
      amenities,
    } = req.body;

    const images =
      req.files && req.files.length > 0
        ? req.files.map((file) => file.path)
        : [];

    const property = await Property.create({
      title,
      description,
      location,
      category,
      price,
      guests,
      bedrooms,
      bathrooms,
      beds,
      amenities: amenities
        ? amenities.split(",").map((item) => item.trim())
        : [],
      images,
      owner: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Property added successfully",
      property,
    });
  } catch (error) {
  console.error("===== ERROR =====");
  console.error(error);
  console.error(error.message);
  console.error(error.stack);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

// ======================
// Get All Properties
// ======================
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find()
      .populate("owner", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      properties,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================
// Get My Properties
// ======================
const getMyProperties = async (req, res) => {
  try {
    const properties = await Property.find({
      owner: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      properties,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================
// Get Property By ID
// ======================
// Get Single Property
const getPropertyById = async (req, res) => {
  console.log("➡️ getPropertyById called");
  console.log("ID:", req.params.id);
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.status(200).json({
      success: true,
      property,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================
// Update Property
// ======================
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    if (property.owner.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    property.title = req.body.title;
    property.description = req.body.description;
    property.location = req.body.location;
    property.category = req.body.category;
    property.price = req.body.price;
    property.guests = req.body.guests;
    property.bedrooms = req.body.bedrooms;
    property.bathrooms = req.body.bathrooms;
    property.beds = req.body.beds;

    property.amenities = req.body.amenities
      ? req.body.amenities.split(",").map((item) => item.trim())
      : [];

    if (req.files && req.files.length > 0) {
      property.images = req.files.map((file) => file.path);
    }

    await property.save();

    res.status(200).json({
      success: true,
      message: "Property Updated Successfully",
      property,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================
// Delete Property
// ======================
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    if (property.owner.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await Property.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Property Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createProperty,
  getProperties,
  getMyProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
};