require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getOrder: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM order ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertOrder: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO order SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteOrder: (order_id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM order WHERE id = ?", order_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateOrder: (order_id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE order SET ? WHERE id = ?", [data, order_id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}