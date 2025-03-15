import app from "./app.js";
import { serverStart } from "./utils/tools.js";
import { PORT } from "./config/constants.js";

app.listen(PORT, (error) => serverStart(error, PORT));
