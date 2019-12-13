const express = require('express');
const Route = express.Router();
const angketController = require('../controllers/angket');
const Auth = require('../helpers/auth');

Route
      .all('/*', Auth.authInfo)
      .get('/', Auth.accesstoken, angketController.getAngket)
      .post('/talent', angketController.insertAngketTalent)
      .post('/costumer', angketController.insertAngketCostumer)
      .patch('/:angket_id', Auth.accesstoken, angketController.updateAngket)
      .delete('/:angket_id', Auth.accesstoken, angketController.deleteAngket)

module.exports = Route;