import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads"));


const start = async () => {
  const connectDB = await mongoose.connect(
    "mongodb+srv://ashutosh7355vns:XAqF5BW5U0DMNZGF@linkedinclone.e0o0c.mongodb.net/?retryWrites=true&w=majority&appName=LinkedinClone");
  app.listen(9080,()=>{
    console.log("server is listening on port 9080");
  });
};
start();


//XAqF5BW5U0DMNZGF