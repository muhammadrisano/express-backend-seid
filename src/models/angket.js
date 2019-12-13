require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getAngket: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM angket ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertAngketTalent: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO angket_talent SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertAngketCostumer: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO angket_costumer SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteAngket: (id_angket) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM angket WHERE id_angket = ?", id_angket, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateAngket: (id_angket, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE angket SET ? WHERE id_angket = ?", [data, id_angket], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}