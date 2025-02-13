import express from "express";
import router from "./userControler.js";
import cors from "cors";
import { connctDB } from "./Database/Db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import listControle from "./ListControle.js";
import { connectPassport } from "./Utils/GoogleAuth.js";
const app = express();
dotenv.config();

app.use(
  cors({
    // origin: "http://localhost:5000/googlelogin",
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// body and cookie parses
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: "application/json" }));
connectPassport();

// db connection
connctDB();
// routes
app.use(router);
app.use(listControle);

app.listen(process.env.PORT, (req, res) => {
  console.log("SERVER on port 5000");
});
