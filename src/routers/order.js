const express = require('express');
const Route = express.Router();
const orderController = require('../controllers/order')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, orderController.getOrder)
  .post('/', Auth.accesstoken, orderController.insertOrder)
  .patch('/:order_id', Auth.accesstoken, orderController.updateOrder)
  .delete('/:order_id', Auth.accesstoken, orderController.deleteOrder)

module.exports = Route;