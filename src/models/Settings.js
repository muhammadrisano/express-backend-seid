require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getSettings: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM general_settings ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertSettings: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO general_settings SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteSettings: (settings_id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM general_settings WHERE id = ?", settings_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateSettings: (settings_id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE general_settings SET ? WHERE id = ?", [data, settings_id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}