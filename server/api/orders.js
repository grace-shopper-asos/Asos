const router = require('express').Router()
const {Orders, User, Products} = require('../db/models')

module.exports = router

//use router.post to add new order in a db with  user id can be req.sessionID
