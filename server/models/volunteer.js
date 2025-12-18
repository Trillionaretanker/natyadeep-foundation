import mongoose from "mongoose"

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    interest: {
      type: String,
      enum: ["Acting", "Direction", "Writing", "Social Work", "Management", "Other"],
      required: true,
    },

    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Volunteer = mongoose.model("Volunteer", volunteerSchema)

export default Volunteer
