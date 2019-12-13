const express = require('express');
const Route = express.Router();
const skillController = require('../controllers/skill')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, skillController.getSkill)
  .post('/', Auth.accesstoken, skillController.insertSkill)
  .patch('/:skill_id', Auth.accesstoken, skillController.updateSkill)
  .delete('/:skill_id', Auth.accesstoken, skillController.deleteSkill)

module.exports = Route;