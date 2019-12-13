const userTalentModels = require('../models/user_talent')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getuserTalent: (req, res) => {
    userTalentModels.getUserTalent()
      .then((resresult) => {
        const result = resresult
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertUserTalent: (req, res) => {
    const {user_id}  = req.body;
    const data = {
      user_id,
      ktp_photo:'',
      ijazah_photo:'',
      created_at: new Date(),
    }
    userTalentModels.insertUserTalent(data)
      .then((resresult) => {
        const result = resresult
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateUserTalent: (req, res) => {
    const id = req.params.user_talent_id
    const {
      modified_by,
    } = req.body;
    const data = {
      ktp_photo: '',
      ijazah_photo: '',
      modified_by,
      modified_at: new Date(),
    }
    userTalentModels.updateUserTalent(id, data)
      .then((resresult) => {
        const result = resresult
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteUserTalent: (req, res) => {
    const id = req.params.user_talent_id
    userTalentModels.deleteUserTalent(id)
      .then((resresult) => {
        const result = resresult
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
