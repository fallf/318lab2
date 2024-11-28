const express = require("express");
const indexRouter = require("./public/routes/app");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);

// app.get("/", (req, res) => {
//   res.send("we are here ");
// });

app.listen(PORT, () => {
  console.log("we are here");
});
