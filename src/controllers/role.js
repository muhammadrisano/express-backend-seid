const roleModels = require('../models/role')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getRole: (req, res) => {
    roleModels.getRole()
      .then((resultrole) => {
        const result = resultrole
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertRole: (req, res) => {
    const data = {
      role_name: req.body.role_name
    }
    roleModels.insertRole(data)
      .then((resultrole) => {
        const result = resultrole
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateRole: (req, res) => {
    const role_id = req.params.role_id
    const data = {
      role_name: req.body.role_name
    }
    roleModels.updateRole(role_id, data)
      .then((resultrole) => {
        const result = resultrole
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteRole: (req, res) => {
    const role_id = req.params.role_id
    roleModels.deleteRole(role_id)
      .then((resultrole) => {
        const result = resultrole
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
