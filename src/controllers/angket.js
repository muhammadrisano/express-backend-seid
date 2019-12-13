const angketModels = require('../models/angket')
const MiscHelper = require('../helpers/helpers')

module.exports = {
  getAngket: (req, res) => {
    angketModels.getAngket()
      .then((resultangket) => {
        const result = resultangket
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertAngketTalent: (req, res) => {
    const {name, phone, medsos, usermedsos, tgl_lahir, school, how_seid, where_seid, bidang1, bidang2, minat_volunteer, volunteer} = req.body
    const data = {
      name,
      phone,
      medsos,
      usermedsos,
      tgl_lahir,
      school,
      how_seid,
      where_seid,
      bidang1,
      bidang2,
      minat_volunteer,
      volunteer
    }
    console.log(data)
    angketModels.insertAngketTalent(data)
      .then((resultangket) => {
        const result = resultangket
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertAngketCostumer: (req, res) => {
    const { name, email, phone, institusi, what_seid, where_seid, butuh_talent, with_relawan, bidang_butuh1, bidang_butuh2, bidang_butuh3 } = req.body
    const data = {
      name,
      email,
      phone,
      institusi,
      what_seid,
      where_seid,
      butuh_talent,
      with_relawan,
      bidang_butuh1,
      bidang_butuh2,
      bidang_butuh3,
    }
    angketModels.insertAngketCostumer(data)
      .then((resultangket) => {
        const result = resultangket
        MiscHelper.response(res, result, 201, data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateAngket: (req, res) => {
    const id_angket = req.params.id_angket;
    const { id_user, fullname, phone, medsos, username_medsos, birth_date, school, how_seid, where_seid, bidang_part_time, minat_volunter, bidang_volunteer } = req.body
    const data = {
      id_user,
      fullname,
      phone,
      medsos,
      username_medsos,
      birth_date,
      school,
      how_seid,
      where_seid,
      bidang_part_time,
      minat_volunter,
      bidang_volunteer
    }
    angketModels.updateAngket(id_angket, data)
      .then((resultangket) => {
        const result = resultangket
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteAngket: (req, res) => {
    const id_angket = req.params.id_angket
    angketModels.deleteAngket(id_angket)
      .then((resultangket) => {
        const result = resultangket
        MiscHelper.response(res, result, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
