const pdf = require("html-pdf");
const express = require("express");
const bodyParser = require("body-parser");
const createTemplate = require("./template");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/create-pdf", (req, res) => {
  pdf.create(createTemplate(), { format }).toFile("result.pdf", (err) => {
    if (err) return res.status(400);

    return res.status(201).send("Pdf created");
  });
});

app.get("/fetch-pdf", (req, res) => {
  const resultPath = path.join(__dirname, "../result.pdf");

  res.sendFile(resultPath);
});

app.listen(8080, function (err) {
  if (err) throw err;
  console.log(`Listening on http://localhost:8080`);
});
