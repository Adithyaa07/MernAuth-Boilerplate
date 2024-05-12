import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from "./routes/userRoute.js";
import AuthRoute from "./routes/authRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on port 3000!");
});

app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute);

app.use((req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = res.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
