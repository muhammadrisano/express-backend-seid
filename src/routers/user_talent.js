const express = require('express');
const Route = express.Router();
const userTalentController = require('../controllers/usertalent')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, userTalentController.getUserTalent)
  .post('/', Auth.accesstoken, userTalentController.insertUserTalent)
  .patch('/:user_talent_id', Auth.accesstoken, userTalentController.updateUserTalent)
  .delete('/:user_talent_id', Auth.accesstoken, userTalentController.deleteUserTalent)

module.exports = Route;