const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) =>
  res.json({
    name: "bob",
    email: "a@gmail.com",
  })
);
app.listen(port, () => console.log("Example app listing on port $(port)!"));
