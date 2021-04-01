import express from "express";
import path from "path";
import route from "./routes/api/members.js";
import bodyParser from "body-parser";

import logger from "./middleware/logger.js";

const app = express();

/// bodyParser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/// this how middleware works
// app.use(logger);

const __dirname = path.resolve(path.dirname(""));
app.use(express.static(path.join(__dirname, "PAGES")));

/// membres api route
app.use("/api/members", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port${PORT}`));
