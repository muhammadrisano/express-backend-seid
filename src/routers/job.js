const express = require('express');
const Route = express.Router();
const jobController = require('../controllers/job')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, jobController.getJob)
  .post('/', Auth.accesstoken, jobController.insertJob)
  .patch('/:job_id', Auth.accesstoken, jobController.updateJob)
  .delete('/:job_id', Auth.accesstoken, jobController.deleteJob)

module.exports = Route;