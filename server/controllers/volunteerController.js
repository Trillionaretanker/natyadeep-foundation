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
