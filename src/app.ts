import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    message: "welcome pet adoption platform",
  });
});

export default app;
