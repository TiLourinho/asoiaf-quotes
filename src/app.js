import express from "express";

import { quoteRouter } from "./routes/quoteRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/quote", quoteRouter);

export default app;
