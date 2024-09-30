const Usuarios = require("../models/Usuario");
const { getTipoDocumento } = require("../models/Generales");


const lista_tipo_documento = async () => {
    return await getTipoDocumento();
}
const usuarioController = {

    async index(req, res) {
        return res.render("login/index", {
            lista_tipo_documento: await lista_tipo_documento(),
        });
    },
    async verUsuario(req, res) {
        let usuario = await Usuarios.findByPk(req.params.id || 0);

        return res.render("login/index", {
            lista_tipo_documento: await lista_tipo_documento(),
            usuario: usuario ? usuario.toJSON() : null,
        });
    },
    async registrarUsuario(req, res) {

        try {
            let body = req.body;
            let resultado = await Usuarios.create(body);
            return res.json({
                error: false,
                mensaje: "Creado correctamente",
                respuesta: resultado,
            });

        } catch (error) {
            return res.status(400).json({
                error: true,
                mensaje: "Ocurrio un error",
                respuesta_error: error.message,
            })
        }
    },
    async actualizarUsuario(req, res) {
        try {
            let id = req.params.id;
            let body = req.body;

            let resultado = {};

            const busqueda = await Usuarios.findByPk(id);

            if (!busqueda) {
                throw new Error("Usuario no encontrado");
            } else {
                resultado = await Usuarios.update(body, { where: { id_usuario: id } });
            }
            return res.status(200).json({
                error: false,
                mensaje: 'Actualizado correctamente',
                respuesta: resultado || {}
            });

        } catch (error) {
            return res.status(500).json({
                error: true,
                mensaje: error.message || 'Ocurrio un error',
                respuesta: error
            });
        }
    },
    async eliminarUsuario(req, res) {
        try {
            let id = req.params.id;
            let resultado = {};

            const usuario = await Usuarios.findByPk(id);

            if (!usuario) {
                throw new Error("No se encontro al usuario");
            } else {
                resultado = await Usuarios.destroy({ where: { id_usuario: id } });
            }

            return res.status(200).json({
                error: false,
                mensaje: 'Eliminado correctamente',
                respuesta: resultado || {}
            });

        } catch (error) {
            return res.status(500).json({
                error: true,
                mensaje: error.message || 'Ocurrio un error',
                respuesta: error
            });
        }
    }
}

module.exports = usuarioController;