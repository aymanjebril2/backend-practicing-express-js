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

  /// and here how to get some mathod if ture will give the members if is not will send wrong req 400
  const found = members.some((member) => member.id === +req.params.id);
  if (found) {
    res.json(members.filter((member) => member.id === +req.params.id));
  } else {
    res.status(400).json({ msg: "Members not Found " });
  }
});

const __dirname = path.resolve(path.dirname(""));
app.use(express.static(path.join(__dirname, "PAGES")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port${PORT}`));
