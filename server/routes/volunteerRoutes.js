import express from "express"
import { createVolunteer } from "../controllers/volunteerController.js"

const router = express.Router()

// POST /api/volunteers
router.post("/", createVolunteer)

export default router
