import express from "express";
import cors from "cors";

import { quoteRouter } from "./routes/quoteRouter.js";
import { authRouter } from "./routes/authRouter.js";
import error from "./middlewares/error.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/quote", quoteRouter);
app.use("/auth", authRouter);

app.use(error);

export default app;
