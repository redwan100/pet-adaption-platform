import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import morgan from "morgan";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

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

// !GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

// !NOT FOUND ROUTE
app.use("*", notFound);

export default app;
