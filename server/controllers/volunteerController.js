import Volunteer from "../models/Volunteer.js"

// @desc    Register a new volunteer
// @route   POST /api/volunteers
// @access  Public
export const createVolunteer = async (req, res) => {
  try {
    const { name, email, phone, city, interest, message } = req.body

    // Basic validation
    if (!name || !email || !phone || !city || !interest) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      })
    }

    // Create volunteer
    const volunteer = await Volunteer.create({
      name,
      email,
      phone,
      city,
      interest,
      message,
    })

    res.status(201).json({
      success: true,
      message: "Volunteer registered successfully",
      data: volunteer,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    })
  }
}

// @desc    Get all volunteers
// @route   GET /api/volunteers
// @access  Public (will be protected later)
export const getVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      count: volunteers.length,
      data: volunteers,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch volunteers",
    })
  }
}
