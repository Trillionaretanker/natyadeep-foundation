import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"

// Routes
import volunteerRoutes from "./routes/volunteerRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

dotenv.config()

// 🔹 1. Create app FIRST
const app = express()

// 🔹 2. Connect DB
connectDB()

// 🔹 3. Middlewares
app.use(cors())
app.use(express.json())

// 🔹 4. Routes (AFTER app is created)
app.use("/api/volunteers", volunteerRoutes)
app.use("/api/admin", adminRoutes)

// 🔹 5. Test route (optional but recommended)
app.get("/", (req, res) => {
  res.send("API running successfully 🚀")
})

// 🔹 6. Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
