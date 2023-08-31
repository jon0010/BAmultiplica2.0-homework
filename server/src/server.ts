import express, { ErrorRequestHandler } from "express";
import mainRouter from "./routes/mainRouter";
import morgan from "morgan";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import "./db";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const corsOptions = {
  origin: "https://b-amultiplica2-0-homework.vercel.app",
  credentials: true,
};

const dirname = path.dirname(path.resolve());

const app = express();

// settings
app.set("port", process.env.PORT_NAME ?? 3001);
app.set("views", path.join(dirname, "views"));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.options("*", (_req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.sendStatus(200);
});

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(mainRouter);

// Error catching endware.
const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
};

app.use(errorHandler);

// static files
app.use(express.static(path.join(__dirname, "../client/dist")));

export default app;
