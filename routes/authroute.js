const express = require("express");
const AuthController = require("../controller/authcontroller");
const Route = express.Router();

Route.post("/login", AuthController.login);
Route.post("/signup", AuthController.signup);
Route.get("/checkauth", AuthController.checkauth);

module.exports = Route;
