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
    async registrarUsuario(req, res){
        try {
            const data = req.body;
            console.log(data);return false;
            
            const resultado = await Usuarios.create(data);
            req.flash('success', 'Account Created.');
            res.redirect(`/users/${newUser.id}`);
        } catch (error) {
            
        }
    }
}

module.exports = usuarioController;