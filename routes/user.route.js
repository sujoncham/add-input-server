
const express = require('express');
const { getAllUsers, signup, login, getProfileById, accountDelete } = require('../controllers/user.controller');


const routerUser = express.Router();


routerUser.get('/', getAllUsers);
routerUser.post('/signup', signup);
routerUser.post('/login', login);
routerUser.get('/profile/:id', getProfileById);
routerUser.delete('/profile/deleteAccount/:id', accountDelete);


module.exports = routerUser;