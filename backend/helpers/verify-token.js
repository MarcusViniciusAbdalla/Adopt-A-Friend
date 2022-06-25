const jwt = require('jsonwebtoken')
const getToken = require('./get-token')

//middleware to validate token 
const checkToken = (req, res , next) => {

  const token = getToken(req)

  if(!token) {
    return res.status(401).json({ message: 'Acesso Negado!'})
  }
}

module.exports = checkToken