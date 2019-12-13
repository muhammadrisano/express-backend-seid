require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getRole: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM role ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertRole: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO role SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteRole: (role_id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM role WHERE id = ?", role_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateRole: (role_id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE role SET ? WHERE id = ?", [data, role_id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}