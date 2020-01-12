require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getDiscount: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM discount ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertDiscount: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO discount SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteDiscount: (discount_id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM discount WHERE id = ?", discount_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateDiscount: (discount_id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE discount SET ? WHERE id = ?", [data, discount_id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}