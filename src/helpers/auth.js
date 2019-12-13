const jwt = require('jsonwebtoken');
const MiscHelper = require('../helpers/helpers')

const allowedAccess = process.env.REQUEST_HEADERS

module.exports = {
  authInfo: (req, res, next) => {
    const headerAuth = req.headers['authorization']
    const headerSecret = req.headers['x-access-token']
    if (headerAuth !== allowedAccess) {
      return MiscHelper.response(res, null, 401, 'Unauthorized, Need access token !')
    } else if (typeof headerSecret === 'undefined') {
      next()
    } else {
      const bearerToken = headerSecret.split(' ')
      const token = bearerToken[1]
      let authadmin = null
      if (bearerToken[2]) {
        authadmin = bearerToken[2]
      }


      req.token = token
      req.authadmin = authadmin
      console.log('Token stored ! ' + token)
      next()
    }
  },
  accesstoken: (req, res, next) => {
    const secretKey = process.env.SECRET_KEY
    const accessToken = req.token
    const userToken = req.headers['x-control-user']
    console.log(accessToken);
    jwt.verify(accessToken, secretKey, (err, decoded) => {
      console.log(userToken);
      if (err && err.name === 'TokenExpiredError') return MiscHelper.response(res, null, 401, 'Token Expired')
      if (err && err.name === 'JsonWebTokenError') return MiscHelper.response(res, null, 401, 'Invalid Token')
      if (parseInt(userToken) !== parseInt(decoded.userid)) return MiscHelper.response(res, null, 401, 'Invalid User Token')
      console.log(decoded)
      next()
    })
  },
  authadmin: (req, res, next) => {
    if (req.authadmin !== crypto.createHmac('sha1', process.env.AUTH_ADMIN).digest('hex')) {
      return MiscHelper.response(res, null, 401, 'admin can only create user')
    }
    next()
  }
}
