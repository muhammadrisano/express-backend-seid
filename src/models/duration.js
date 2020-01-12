require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getDuration: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM duration ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertDuration: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO duration SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteDuration: (duration_id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM duration WHERE id = ?", duration_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateDuration: (duration_id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE duration SET ? WHERE id = ?", [data, duration_id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}