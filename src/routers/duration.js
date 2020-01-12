const express = require('express');
const Route = express.Router();
const durationController = require('../controllers/duration')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, durationController.getDuration)
  .post('/', Auth.accesstoken, durationController.insertDuration)
  .patch('/:duration_id', Auth.accesstoken, durationController.updateDuration)
  .delete('/:duration_id', Auth.accesstoken, durationController.deleteDuration)

module.exports = Route;