// const express = require("express");
import express from "express";
const app = express();
const port = 3003;
const bodyParser = require("body-parser");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const index = require("./routes/routes");
app.use(index);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
