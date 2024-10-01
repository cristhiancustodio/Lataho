import express from 'express'

const router = express.Router();



// Ruta principal
router.get('/autenticacion', (req, res) => {
    res.render('login/autenticacion');

});

// Otra ruta



export default router;
