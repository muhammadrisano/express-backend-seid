const settingsModels = require('../models/settings')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getSettings: (req, res) => {
    settingsModels.getSettings()
      .then((resultSettings) => {
        const result = resultSettings
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertSettings: (req, res) => {
    const data = {
      name: req.body.name,
      value: req.body.value,
      status: req.body.status,
    }
    settingsModels.insertSettings(data)
      .then((resultSettings) => {
        const result = resultSettings
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateSettings: (req, res) => {
    const settings_id = req.params.settings_id
    const data = {
      name: req.body.name,
      value: req.body.value,
      status: req.body.status,
    }
    settingsModels.updateSettings(settings_id, data)
      .then((resultsettings) => {
        const result = resultsettings
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteSettings: (req, res) => {
    const settings_id = req.params.settings_id
    settingsModels.deleteSettings(settings_id)
      .then((resultSettings) => {
        const result = resultSettings
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
