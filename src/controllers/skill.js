const skillModels = require('../models/skill')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getSkill: (req, res) => {
    skillModels.getSkill()
      .then((resultskill) => {
        const result = resultskill
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertSkill: (req, res) => {
    const {code, name, status} = req.body;
    const data = {
      code,
      name,
      status,
      certificate_foto: '',
      status:'ACTIVE',
      created_at: new Date(),
    }
    skillModels.insertSkill(data)
      .then((resultskill) => {
        const result = resultskill
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateSkill: (req, res) => {
    const skill_id = req.params.skill_id
    const {code, name, status, modified_by} = req.body;
    const data = {
      code,
      name,
      status,
      modified_by,
      modified_at: new Date(),
    }
    skillModels.updateSkill(skill_id, data)
      .then((resultskill) => {
        const result = resultskill
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteSkill: (req, res) => {
    const skill_id = req.params.skill_id
    skillModels.deleteSkill(skill_id)
      .then((resultskill) => {
        const result = resultskill
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
