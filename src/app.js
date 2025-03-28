import express from "express";

import { quoteRouter } from "./routes/quoteRouter.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/quote", quoteRouter);

app.use(errorMiddleware);

export default app;
