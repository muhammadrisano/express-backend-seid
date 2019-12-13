const express = require('express');
const Route = express.Router();
const userSkillController = require('../controllers/userskill.js')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, userSkillController.getUserSkill)
  .post('/', Auth.accesstoken, userSkillController.insertUserSkill)
  .patch('/:user_skill_id', Auth.accesstoken, userSkillController.updateUserSkill)
  .delete('/:user_skill_id', Auth.accesstoken, userSkillController.deleteUserSkill)

module.exports = Route;