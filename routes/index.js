const express = require('express');
const usuarioController = require('../controller/usuarioController');
const router = express.Router();

const controlador = new usuarioController();
// Ruta principal

router.get('/', controlador.index);

// Otra ruta





module.exports = router;
