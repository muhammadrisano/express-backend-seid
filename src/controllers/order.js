const orderModels = require('../models/order')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getOrder: (req, res) => {
    orderModels.getOrder()
      .then((resultOrder) => {
        const result = resultOrder
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertOrder: (req, res) => {
    const {
      order_no,
      user_id,
      order_at,
      payment_at,
      payment_method_name,
      subtotal,
      payment_fee,
      status_order,
      status_payment,
      job_id,
      company_fee,
      talent_amount,
    } = req.body;
    const data = {
      order_no,
      user_id,
      order_at,
      payment_at,
      payment_method_name,
      subtotal,
      payment_fee,
      status_order,
      status_payment,
      job_id,
      company_fee,
      talent_amount,
    }
    orderModels.insertOrder(data)
      .then((resultOrder) => {
        const result = resultOrder
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateOrder: (req, res) => {
    const order_id = req.params.order_id
    const {
      order_no,
      user_id,
      order_at,
      payment_at,
      payment_method_name,
      subtotal,
      payment_fee,
      status_order,
      status_payment,
      job_id,
      company_fee,
      talent_amount,
    } = req.body;
    const data = {
      order_no,
      user_id,
      order_at,
      payment_at,
      payment_method_name,
      subtotal,
      payment_fee,
      status_order,
      status_payment,
      job_id,
      company_fee,
      talent_amount,
    }
    orderModels.updateOrder(order_id, data)
      .then((resultOrder) => {
        const result = resultOrder
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteOrder: (req, res) => {
    const order_id = req.params.order_id
    orderModels.deleteOrder(order_id)
      .then((resultOrder) => {
        const result = resultOrder
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
