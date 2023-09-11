const express = require('express');

const router = express.Router();

const principalController = require('../controllers/principal.controller'); //Controlador de principal

router.get('/', principalController.get_main);

router.get('/noticias', principalController.get_noticias);

router.get('/noticias/tour', principalController.get_tour);

router.get('noticias/vuelta', principalController.get_vuelta);

router.get('noticias/giro', principalController.get_giro);

module.exports = router;