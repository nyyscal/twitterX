import express from "express";
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{

  connectMongoDB()
  console.log(`Server is running on PORT 8000! Link: http://localhost:${PORT}`)
})