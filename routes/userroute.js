const express = require('express');
const UserController = require('../controller/usercontroller');
const Route = express.Router();

Route.get('/', UserController.getAll)
Route.get('/:id', UserController.getById)
Route.post('/', UserController.add)
Route.put('/:id', UserController.update)
Route.delete('/:id', UserController.del)

module.exports = Route;