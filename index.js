import express from "express";
import path from "path";

const app = express();

const members = [
  {
    id: 1,
    name: "ayman omer ",
    email: "ayman@ayman.com",
    status: "inactive",
  },
  {
    id: 2,
    name: "shafee ahmed",
    email: "shfee@shfee.com",
    status: "inactive",
  },
  {
    id: 1,
    name: "jahzeal isreal ",
    email: "jahzeal@jahzeal.com",
    status: "inactive",
  },
];

app.get("/api/members", (req, res) => {
  res.json(members);
});
const __dirname = path.resolve(path.dirname(""));
app.use(express.static(path.join(__dirname, "PAGES")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port${PORT}`));
