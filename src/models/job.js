require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
  getJob: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM job ", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertJob: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO job SET ?", data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteJob: (job_id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM job WHERE id = ?", job_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateJob: (job_id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE job SET ? WHERE id = ?", [data, job_id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}