const express = require('express');

const router = express.Router();

const tiendaController = require('../controllers/tienda.controller'); // Para controlador de tienda

router.get('/tienda/vender', tiendaController.get_vender);
router.post('/tienda/vender',tiendaController.post_vender);
router.get('/tienda', tiendaController.get_tienda);

module.exports = router;