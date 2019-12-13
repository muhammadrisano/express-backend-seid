const userskillModels = require('../models/userskill')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getUserskill: (req, res) => {
    userskillModels.getUserskill()
      .then((resultuserskill) => {
        const result = resultuserskill
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertUserskill: (req, res) => {
    const {
      user_id, skill_id
    } = req.body;
    const data = {
      user_id,
      skill_id,
    }
    userskillModels.insertUserskill(data)
      .then((resultuserskill) => {
        const result = resultuserskill
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateUserskill: (req, res) => {
    const id = req.params.user_skill_id
    const data = {
      userskill_name: req.body.userskill_name
    }
    userskillModels.updateUserskill(id, data)
      .then((resultuserskill) => {
        const result = resultuserskill
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteUserskill: (req, res) => {
    const id = req.params.user_skill_id
    userskillModels.deleteUserskill(id)
      .then((resultuserskill) => {
        const result = resultuserskill
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
