import express from "express";
import path from "path";
import members from "./Members.js";

import logger from "./middleware/logger.js";

const app = express();

/// this how middleware works
// app.use(logger);

//// this route get all members
app.get("/api/members", (req, res) => {
  res.json(members);
});

/// this how to get singal member
app.get("/api/members/:id", (req, res) => {
  // here to check pramas on the req
  //   res.send(req.params.id);
  /// here how to go and got singal on by using filter mathood and and the req send it as string we have to change to number
  res.json(members.filter((member) => member.id === +req.params.id));
});

const __dirname = path.resolve(path.dirname(""));
app.use(express.static(path.join(__dirname, "PAGES")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port${PORT}`));
