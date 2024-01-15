const express = require('express');
const {login, register, checkSession, getUser} = require('../controllers/user.controller');
const {isAuth} = require ("../middleware/auth.middleware")
const userRouter = express.Router();


userRouter.get('/', getUser)
userRouter.post('/login', login)
userRouter.post('/register', register)
userRouter.post('/checksession', [isAuth], checkSession)

module.exports = userRouter;