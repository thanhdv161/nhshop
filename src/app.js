import express from "express";
import productRouter from "./routers/product";
import categoryRouter from "./routers/category";
import authRouter from "./routers/auth";
import { connectDB } from "./config/db";
import cors from "cors";
import morgan from "morgan";
const app = express();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect database
connectDB("mongodb://localhost:27017/nhshop");

app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
export const viteNodeApp = app;
