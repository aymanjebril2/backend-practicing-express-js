import express from "express";
import members from "../../Members.js";
import { v4 } from "uuid";

const router = express.Router();

//// this route get all members
router.get("/", (req, res) => {
  res.json(members);
});

/// this how to get singal member
router.get("/:id", (req, res) => {
  // here to check pramas on the req
  //   res.send(req.params.id);
  /// here how to go and got singal on by using filter mathood and and the req send it as string we have to change to number

  /// and here how to get some mathod if ture will give the members if is not will send wrong req 400
  const found = members.some((member) => member.id === +req.params.id);
  if (found) {
    res.json(members.filter((member) => member.id === +req.params.id));
  } else {
    res.status(400).json({ msg: `No members of id number ${req.params.id}` });
  }
});

//// Create Membres
router.post("/", (req, res) => {
  const newMember = {
    id: v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "please include email and name " });
  }
  members.push(newMember);
  res.json(members);
});

export default router;
