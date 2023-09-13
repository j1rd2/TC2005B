const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const { route } = require('./principal.routes');

router.get('/login', usersController.get_login);
router.post('/login', usersController.post_login);
router.get('/login', usersController.get_logout);
router.get('/add', usersController.get_add);
router.get('/add', usersController.post_add);

module.exports = router;