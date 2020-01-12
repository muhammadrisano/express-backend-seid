const express = require('express');
const Route = express.Router();
const settingsController = require('../controllers/settings')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, settingsController.getSettings)
  .post('/', Auth.accesstoken, settingsController.insertSettings)
  .patch('/:settings_id', Auth.accesstoken, settingsController.updateSettings)
  .delete('/:settings_id', Auth.accesstoken, settingsController.deleteSettings)

module.exports = Route;