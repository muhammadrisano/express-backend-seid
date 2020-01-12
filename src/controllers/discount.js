const discountModels = require('../models/discount')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getDiscount: (req, res) => {
    discountModels.getDiscount()
      .then((resultDiscount) => {
        const result = resultDiscount
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertDiscount: (req, res) => {
    const data = {
      skill_id: req.body.skill_id,
      value: req.body.value,
      type: req.body.type,
    }
    discountModels.insertDiscount(data)
      .then((resultDiscount) => {
        const result = resultDiscount
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateDiscount: (req, res) => {
    const discount_id = req.params.discount_id
    const data = {
      skill_id: req.body.skill_id,
      value: req.body.value,
      type: req.body.type,
    }
    discountModels.updateDiscount(discount_id, data)
      .then((resultDiscount) => {
        const result = resultDiscount
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteDiscount: (req, res) => {
    const discount_id = req.params.discount_id
    discountModels.deleteDiscount(discount_id)
      .then((resultDiscount) => {
        const result = resultDiscount
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
