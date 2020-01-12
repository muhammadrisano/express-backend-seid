const userModels = require('../models/user')
const MiscHelper = require('../helpers/helpers')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
require('dotenv').config()

module.exports = {
  getUser: (req, res) => {
    const search = req.query.search
    userModels.getUser(search)
      .then((resultUser) => {
        const result = resultUser
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  userDetail: (req, res) => {
    const id_user = req.params.id_user
    userModels.userDetail(id_user)
      .then((resultUser) => {
        const result = resultUser
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  updatePassword: (req, res) => {
    const id_user = req.params.id_user
    console.log(id_user)
    const salt = MiscHelper.generateSalt(18)
    const passwordHash = MiscHelper.setPassword(req.body.password, salt)
    console.log(passwordHash)
    const data = {
      password: passwordHash.passwordHash,
      salt,
      updated_at: new Date()
    }
    userModels.updatePassword(id_user, data)
      .then((resultUpdatePassword) => {
        MiscHelper.response(res, resultUpdatePassword, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  updateUser: (req, res)=>{
    const {
      mother_name, ktp_id, gender, birthday, modified_by,
    } = req.body;
    const id_user = req.params.id_user
    const data ={
      mother_name,
      ktp_id,
      gender,
      birthday,
      modified_by,
      modified_at: new Date(),
    }
    userModels.updateUser(id_user, data)
    .then((result)=>{
      MiscHelper.response(res,result, 200)
    })
    .catch((err)=>{
      console.log(err)
    })
  },
  insertUser: (req, res) => {
    const salt = MiscHelper.generateSalt(18)
    const passwordHash = MiscHelper.setPassword(req.body.password, salt)
    const data = {
      email: req.body.email,
      password: passwordHash.passwordHash,
      fullname: req.body.fullname,
      salt: passwordHash.salt,
      token: "",
      role_id: req.body.role_id,
      created_at: new Date(),
      updated_at: new Date()
    }
    userModels.insertUser(data)
      .then((resultRegister) => {
        MiscHelper.response(res, resultRegister, 201)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  login: (req, res) => {
    const phone_number = req.body.phone_number
    const password = req.body.password
    console.log(password)
    userModels.getByPhone(phone_number)
      .then((result) => {
        const dataUser = result[0]
        const usePassword = MiscHelper.setPassword(password, dataUser.salt).passwordHash
        if (dataUser.is_verified === 0){
          return MiscHelper.response(res, null, 403, 'User not verified')
        }else if (usePassword === dataUser.password) {
          dataUser.token = jwt.sign({
            userid: dataUser.id
          }, process.env.SECRET_KEY, { expiresIn: '1h' })
          if (dataUser.role_id === "1") {
            console.log(dataUser.role_id)
            dataUser.token += ` ${crypto.createHmac('sha1', process.env.AUTH_ADMIN).digest('hex')}`
          }
          delete dataUser.salt
          delete dataUser.password
          userModels.updateUser(dataUser.id_user, { token: dataUser.token })
          return MiscHelper.response(res, dataUser, 200)
        } else {
          return MiscHelper.response(res, null, 403, 'Wrong password !')
        }
      })
      .catch((error) => {
        console.log(error)
        return MiscHelper.response(res, null, 403, 'Email salah !')
      })
  },
  deleteUser: (req, res) => {
    const id_user = req.params.id_user
    userModels.deleteUser(id_user)
      .then((resultUser) => {
        const result = resultUser
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  editUser: (req, res) => {
    const id_user = req.params.id_user
    const {
      country_code, phone_number, email, is_verified, first_name, last_name, mother_name, gender, ktp_id, birthday, is_talent, status, modified_by
    } = req.body;
    const data = {
      country_code,
      phone_number,
      email,
      is_verified,
      first_name,
      last_name,
      mother_name,
      gender,
      ktp_id,
      birthday,
      is_talent,
      status,
      modified_by,
      modified_at: new Date(),
    } 
    userModels.updateUser(id_user, data)
      .then((resultUser) => {
        const result = resultUser
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  otp: (req, res)=>{
    const phone_number = req.body.phone_number;
    const data ={
      is_verified: true
    }
    userModels.otp(phone_number,data)
      .then((resultUser) => {
        const result = resultUser;
        MiscHelper.response(res, result, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  register:(req, res)=>{
    const salt = MiscHelper.generateSalt(18);
    const passwordHash = MiscHelper.setPassword(req.body.password, salt)
    const {email, first_name, last_name, phone_number, country_code} = req.body
    const data ={
      email,
      first_name,
      last_name,
      phone_number,
      country_code,
      is_verified: false,
      password: passwordHash.passwordHash,
      salt: passwordHash.salt,
      token:"",
      mother_name:"",
      gender:"",
      ktp_id:"",
      is_talent:1,
      status:"active",
      birthday: new Date(2001-01-01),
      modified_by: 0,
      created_by:0,
      created_at: new Date(),
      modified_at: new Date(),
    }
    console.log(data);
    userModels.register(data)
    .then((resultUser)=>{
      const result = resultUser;
      MiscHelper.response(res, result, 200)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
