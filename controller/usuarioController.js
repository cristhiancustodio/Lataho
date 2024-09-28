const Usuarios = require("../models/Usuario");




class usuarioController{

    async index(req, res){
        try {
        
            const resultado = await Usuarios.findAll();
            return res.json(resultado);
            return res.send('¡Bienvenido a la página About!');
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener los cines");
        }
    }
}

module.exports = usuarioController;