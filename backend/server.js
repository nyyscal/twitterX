import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"
import notificationRoutes from "./routes/notification.route.js"

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})


const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //PARSE REQ FROM BODY
app.use(express.urlencoded({extended: true})); //PARSE FORM DATA URL ENCODED
app.use(cookieParser()) //Parse the request from cookie

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/notifications", notificationRoutes)

app.listen(PORT, ()=>{

  connectMongoDB()
  console.log(`Server is running on PORT 8000! Link: http://localhost:${PORT}`)
})