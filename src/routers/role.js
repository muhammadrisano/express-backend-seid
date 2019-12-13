const express = require('express');
const Route = express.Router();
const roleController = require('../controllers/role')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, roleController.getRole)
  .post('/', Auth.accesstoken, roleController.insertRole)
  .patch('/:role_id', Auth.accesstoken, roleController.updateRole)
  .delete('/:role_id', Auth.accesstoken, roleController.deleteRole)

module.exports = Route;