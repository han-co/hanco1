const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 5000;

app.get("/test", (req, res) => {
  res.json({ message: "Hello From Express" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
