require('dotenv').config()
const connection = require('../configs/db')

module.exports = {
  getUser: (search) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users", (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  userDetail: (id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT users.id_user, users.email, users.fullname, users.role_id, users.created_at, users.updated_at, role.role_name FROM users INNER JOIN role ON users.role_id = role.id WHERE id_user = ?", id_user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateUser: (id_user, data) =>{
    return new Promise((resolve, reject)=>{
      connection.query("UPDATE users SET ?, WHERE id = ?", [data, id_user], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  insertUser: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO users SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  getByEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE email = ?', email, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updatePassword: (id_user, data) => {
    console.log(id_user)
    return new Promise((resolve, reject) => {
      connection.query("UPDATE users SET ? WHERE id_user =?", [data, id_user], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUser: (id_user) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM users WHERE id_user = ?", id_user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error)
        }
      })
    })
  },
  register:(data)=>{
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO users SET ?", data, (err, result)=>{
        if(!err){
          resolve(result)
        }else{
          reject(new Error(err))
        }
      })
    })
  }
}
