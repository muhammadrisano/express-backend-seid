require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getUserTalent: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM user_talent ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertUserTalent: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO user_talent SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUserTalent: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM user_talent WHERE id = ?", id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateUserTalent: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE user_talent SET ? WHERE id = ?", [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}