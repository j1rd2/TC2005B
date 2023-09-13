const express = require('express');

const router = express.Router();

const tiendaController = require('../controllers/tienda.controller'); // Para controlador de tienda

const isAuth = require('../util/is-auth');

router.get('/tienda/vender',isAuth, tiendaController.get_vender);
router.post('/tienda/vender',isAuth, tiendaController.post_vender);
router.get('/tienda',isAuth, tiendaController.get_tienda);
router.get('/tienda/:id',isAuth, tiendaController.get_tienda);
router.get('/:id',isAuth, tiendaController.get_tienda);


module.exports = router;