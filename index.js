import express from "express";
import path from "path";
import route from "./routes/api/members.js";

import logger from "./middleware/logger.js";

const app = express();

/// this how middleware works
// app.use(logger);

const __dirname = path.resolve(path.dirname(""));
app.use(express.static(path.join(__dirname, "PAGES")));

app.use("/api/members", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port${PORT}`));
