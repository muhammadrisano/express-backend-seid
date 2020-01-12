const express = require('express');
const Route = express.Router();
const discountController = require('../controllers/discount')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, discountController.getDiscount)
  .post('/', Auth.accesstoken, discountController.insertDiscount)
  .patch('/:discount_id', Auth.accesstoken, discountController.updateDiscount)
  .delete('/:discount_id', Auth.accesstoken, discountController.deleteDiscount)

module.exports = Route;