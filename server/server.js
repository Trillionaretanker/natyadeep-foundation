import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import volunteerRoutes from "./routes/volunteerRoutes.js"

dotenv.config()
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/volunteers", volunteerRoutes)

app.get("/", (req, res) => {
  res.send("Natyadeep Foundation Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
