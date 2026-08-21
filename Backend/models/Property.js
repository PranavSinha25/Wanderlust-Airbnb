const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Beach",
        "Mountain",
        "Villa",
        "Cabin",
        "Camping",
        "Apartment",
        "Farm",
        "Lake",
        "Luxury",
      ],
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 1,
    },

    guests: {
      type: Number,
      required: true,
      min: 1,
    },

    bedrooms: {
      type: Number,
      required: true,
      min: 1,
    },

    bathrooms: {
      type: Number,
      required: true,
      min: 1,
    },

    beds: {
      type: Number,
      required: true,
      min: 1,
    },

    amenities: [
      {
        type: String,
      },
    ],

    images: [
      {
        type: String,
      },
    ],

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rating: {
        type: Number,
        default: 4.5,
        min: 0,
        max: 5,
    },

    reviews: {
        type: Number,
        default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Property", propertySchema);