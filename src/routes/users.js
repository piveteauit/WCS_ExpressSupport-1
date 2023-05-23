const {Router} = require('express');
const { getAllUsers, getUsersByID } = require('../controllers/users');

// '/users
const userRouter = Router();

userRouter.get('', getAllUsers);
userRouter.get('/:user_id', getUsersByID);

module.exports = {
    userRouter
}