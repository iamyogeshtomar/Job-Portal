import express from "express"
import mongoose from "mongoose"
import cors from "cors"
const app = express()
import errorHandler from "./middlewares/errorHandler.js"
const PORT = process.env.PORT || 6000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// Router imports
import companyRoutes from "./routes/companyRoutes.js"
import candidateRoutes from "./routes/candidateRoutes.js"

// Mongoose connection setup
try {
    mongoose.connect(`${process.env.MONGODB_URL_LOCAL}`)
    console.log(`Database connected successfully!`)
} catch (error) {
    throw new Error("Database connection failed!")
}

app.use("/hire", companyRoutes)
app.use(candidateRoutes)

app.get("/", (req, res, next) => {
    res.send("Working Successful")
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is up and running at PORT ${PORT}`))