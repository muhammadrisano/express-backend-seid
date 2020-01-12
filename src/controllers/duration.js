const durationModels = require('../models/duration')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getDuration: (req, res) => {
    durationModels.getDuration()
      .then((resultDuration) => {
        const result = resultDuration
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertDuration: (req, res) => {
    const { 
      package_name,
      time_hour,
      price,
      skill_id,
      discount_id
    } = req.body;
      
      const data = {
        package_name,
        time_hour,
        price,
        skill_id,
        discount_id
      }
    durationModels.insertDuration(data)
      .then((resultDuration) => {
        const result = resultDuration
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateDuration: (req, res) => {
    const duration_id = req.params.duration_id
    const {
      package_name,
      time_hour,
      price,
      skill_id,
      discount_id
    } = req.body;

    const data = {
      package_name,
      time_hour,
      price,
      skill_id,
      discount_id
    }
    durationModels.updateDuration(duration_id, data)
      .then((resultDuration) => {
        const result = resultDuration
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteDuration: (req, res) => {
    const duration_id = req.params.duration_id
    durationModels.deleteDuration(duration_id)
      .then((resultDuration) => {
        const result = resultDuration
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
