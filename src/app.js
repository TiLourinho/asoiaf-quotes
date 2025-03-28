import express from "express";

import { quoteRouter } from "./routes/quoteRouter.js";
import error from "./middlewares/error.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/quote", quoteRouter);

app.use(error);

export default app;
