const {Router} = require('express');
const { Register, Login, Logout } = require('../controllers/user.controller');

const UserRouter = Router()

UserRouter.post('/register',Register)
UserRouter.post('/login',Login)
UserRouter.post('/logout',Logout)

module.exports = UserRouter