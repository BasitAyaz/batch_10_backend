const express = require("express");
const UserController = require("../controller/usercontroller");
const AuthController = require("../controller/authcontroller");
const Route = express.Router();

Route.get("/", AuthController.protected, UserController.getAll);
Route.get("/:id", UserController.getById);
Route.post("/", UserController.add);
Route.put("/:id", UserController.update);
Route.delete("/:id", UserController.del);

module.exports = Route;
