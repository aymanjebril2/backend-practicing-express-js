import express from "express";
import path from "path";

const app = express();

const __dirname = path.resolve(path.dirname(""));
app.use(express.static(path.join(__dirname, "PAGES")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port${PORT}`));
