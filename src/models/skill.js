require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getSkill: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM skill ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertSkill: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO skill SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteSkill: (skill_id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM skill WHERE id = ?", skill_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateSkill: (skill_id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE skill SET ? WHERE id = ?", [data, skill_id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}