const express = require('express');
const Route = express.Router();
const UserController = require('../controllers/User')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, UserController.getUser)
  .post('/', Auth.accesstoken, UserController.insertUser)
  .patch('/:User_id', Auth.accesstoken, UserController.updateUser)
  .delete('/:User_id', Auth.accesstoken, UserController.deleteUser)

module.exports = Route;