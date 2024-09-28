const express = require('express');
const usuarioController = require('../controller/usuarioController');
const router = express.Router();

const controlador = new usuarioController();
// Ruta principal
router.get('/', controlador.index);

// Otra ruta
router.get('/about', (req, res) => {
  res.send('¡Bienvenido a la página About!');
});

module.exports = router;
