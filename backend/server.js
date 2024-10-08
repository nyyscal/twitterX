import express from "express";
import dotenv from "dotenv"
dotenv.config();
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //PARSE REQ FROM BODY
app.use(express.urlencoded({extended: true})); //PARSE FORM DATA URL ENCODED
app.use(cookieParser()) //Parse the request from cookie

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{

  connectMongoDB()
  console.log(`Server is running on PORT 8000! Link: http://localhost:${PORT}`)
})