require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getUserskill: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM user_skill ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertUserskill: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO user_skill SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUserskill: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM user_skill WHERE id = ?", id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateUserskill: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE user_skill SET ? WHERE id = ?", [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}