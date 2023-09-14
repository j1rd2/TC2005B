const express = require('express');

const router = express.Router();

const tiendaController = require('../controllers/tienda.controller'); // Para controlador de tienda

const isAuth = require('../util/is-auth');

const canVender = require('../util/can-vender');
const canVerTienda = require('../util/can-ver-tienda');

router.get('/tienda/vender',isAuth, canVender, tiendaController.get_vender);
router.post('/tienda/vender',isAuth, canVender, tiendaController.post_vender);
router.get('/tienda',isAuth, canVerTienda, tiendaController.get_tienda);
router.get('/tienda/:id',isAuth, canVerTienda, tiendaController.get_tienda);
router.get('/:id',isAuth, canVerTienda, tiendaController.get_tienda);


module.exports = router;