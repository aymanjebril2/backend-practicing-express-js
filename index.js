import express from "express";
import path from "path";
import members from "./Members.js";

import logger from "./middleware/logger.js";

const app = express();

app.use(logger);
//// this route get all members

app.get("/api/members", (req, res) => {
  res.json(members);
});
const __dirname = path.resolve(path.dirname(""));
app.use(express.static(path.join(__dirname, "PAGES")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port${PORT}`));
