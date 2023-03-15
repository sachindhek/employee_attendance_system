// import express from "express";
// import { Request, Response } from "express";
const express = require("express");
const router = express.Router();
// const { verifyToken } = require("../middleware/middleware");
const { loginEmployee, postEmployee } = require("../controller/apicontroller");

router.post("/api/login", loginEmployee);
router.post("/addEmployee", postEmployee);
router.post("/add_time_log");

module.exports = router;
